package fr.bacomathiques.activities;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;

import com.bumptech.glide.Glide;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import de.mateware.snacky.Snacky;
import fr.bacomathiques.R;
import fr.bacomathiques.adapters.LessonsAdapter;
import fr.bacomathiques.lesson.Lesson;
import fr.bacomathiques.tasks.RequestLessonsTask;
import uk.co.chrisjenx.calligraphy.CalligraphyConfig;
import uk.co.chrisjenx.calligraphy.CalligraphyContextWrapper;

public class MainActivity extends AppCompatActivity implements RequestLessonsTask.RequestLessonsListener {

	protected static final String INTENT_LESSON = "lesson";
	private static final String INTENT_LESSONS = "lessons";

	private LessonsAdapter adapter;
	private View clickedCaption;

	private long offlineDate = -1L;

	@Override
	protected void onCreate(final Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		if(savedInstanceState != null && savedInstanceState.containsKey(INTENT_LESSONS)) {
			final List<Lesson> lessons = new ArrayList<>();
			for(final Parcelable parcelable : savedInstanceState.getParcelableArray(INTENT_LESSONS)) {
				lessons.add((Lesson)parcelable);
			}

			onRequestLessonsDone(lessons.toArray(new Lesson[lessons.size()]));
			return;
		}

		displaySplashScreen();
		CalligraphyConfig.initDefault(null);
		new RequestLessonsTask(this, this).execute(Lesson.getLessonsURL());
	}

	@Override
	public final void onSaveInstanceState(final Bundle outState) {
		if(adapter != null) {
			outState.putParcelableArray(INTENT_LESSONS, adapter.getData());
		}

		super.onSaveInstanceState(outState);
	}

	@Override
	protected final void attachBaseContext(final Context newBase) {
		super.attachBaseContext(CalligraphyContextWrapper.wrap(newBase));
	}

	@Override
	public final void onRequestLessonsStarted() {}

	@Override
	public final void onRequestLessonsException(final Exception ex, final long offlineDate) {
		ex.printStackTrace();

		this.offlineDate = offlineDate;
	}

	@Override
	public final void onRequestLessonsDone(final Lesson[] result) {
		if(result != null) {
			adapter = new LessonsAdapter(Glide.with(this), result);
			hideSplashScreen();
			return;
		}
		this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
		new AlertDialog.Builder(this).setTitle(R.string.dialog_generic_error).setMessage(R.string.dialog_errorrequestlessons_message).setPositiveButton(R.string.dialog_generic_ok, new DialogInterface.OnClickListener() {

			@Override
			public final void onClick(final DialogInterface dialogInterface, final int id) {
				dialogInterface.dismiss();
			}

		}).setOnDismissListener(new DialogInterface.OnDismissListener() {

			@Override
			public final void onDismiss(final DialogInterface dialogInterface) {
				MainActivity.this.finish();
			}

		}).create().show();
	}

	/**
	 * Displays the splash screen.
	 */

	public final void displaySplashScreen() {
		final ActionBar actionBar = this.getSupportActionBar();
		if(actionBar != null) {
			actionBar.hide();

			actionBar.setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);

			final LayoutInflater inflater = (LayoutInflater)this.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
			if(inflater != null) {
				actionBar.setCustomView(inflater.inflate(R.layout.actionbar_view, null));
			}
		}

		this.setContentView(R.layout.activity_main_splash);
	}

	/**
	 * Hides the splash screen.
	 */

	public final void hideSplashScreen() {
		final RelativeLayout layout = this.findViewById(R.id.splash_layout);
		if(layout == null) {
			MainActivity.this.setContentView(R.layout.activity_main);
			setupRecyclerView();
			return;
		}

		layout.animate().alpha(0f).setDuration(700L).withEndAction(new Runnable() {

			@Override
			public final void run() {
				final ActionBar actionBar = MainActivity.this.getSupportActionBar();
				if(actionBar != null) {
					actionBar.show();
				}

				MainActivity.this.setContentView(R.layout.activity_main);
				setupRecyclerView();

				if(offlineDate != -1L) {
					final Calendar calendar = Calendar.getInstance();
					calendar.setTimeInMillis(offlineDate);

					new Handler().postDelayed(new Runnable() {

						@Override
						public void run() {
							Snacky.builder()
									.setActivity(MainActivity.this)
									.setText(MainActivity.this.getString(R.string.snackbar_offline, SimpleDateFormat.getDateInstance().format(calendar.getTime())))
									.setDuration(Snacky.LENGTH_LONG)
									.setBackgroundColor(ContextCompat.getColor(MainActivity.this, R.color.colorPrimaryDark))
									.info()
									.show();
						}

					}, 500);
				}
			}

		}).start();
	}

	/**
	 * On preview click event.
	 *
	 * @param view The preview view.
	 */

	public final void onPreviewClick(View view) {
		if(view instanceof ImageView) {
			view = ((View)view.getParent()).findViewById(R.id.main_lessons_recyclerview_item_caption);
		}

		if(clickedCaption != null) {
			clickedCaption.animate().setDuration(300L).alpha(0f).start();

			if(view == clickedCaption) {
				clickedCaption = null;
				return;
			}
		}

		if(view.getAlpha() == 0f) {
			view.animate().setDuration(300L).alpha(1f).start();
			clickedCaption = view;
		}
		else {
			view.animate().setDuration(300L).alpha(0f).start();
			clickedCaption = null;
		}
	}

	/**
	 * On check out click event.
	 *
	 * @param view The check out view.
	 */

	public final void onCheckOutClick(final View view) {
		final Intent intent = new Intent(this, LessonActivity.class);
		intent.putExtra(INTENT_LESSON, view.getTag().toString());
		this.startActivity(intent);
	}

	/**
	 * Setups the layout's recycler view.
	 */

	private void setupRecyclerView() {
		final RecyclerView recyclerView = this.findViewById(R.id.main_lessons_recyclerview);

		recyclerView.setOnTouchListener(new View.OnTouchListener() {

			@Override
			public final boolean onTouch(final View view, final MotionEvent motionEvent) {
				if(clickedCaption != null) {
					onPreviewClick(clickedCaption);
					return true;
				}
				return false;
			}

		});

		final int columns = this.getResources().getInteger(R.integer.main_lessons_recyclerview_columns);
		recyclerView.setLayoutManager(columns == 1 ? new LinearLayoutManager(this) : new GridLayoutManager(this, columns));
		recyclerView.setAdapter(adapter);
	}

}