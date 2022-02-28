
import 'package:bacomathiques/app/dialogs/consent.dart';
import 'package:bacomathiques/app/settings.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_widget_from_html_core/flutter_widget_from_html_core.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// The ads dialog.
class AdsDialog extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) => AlertDialog(
    title: _createTitleWidget(),
    content: _createContentWidget(),
    actions: [
      Wrap(
        alignment: WrapAlignment.end,
        crossAxisAlignment: WrapCrossAlignment.end,
        direction: Axis.vertical,
        children: createActionsWidgets(context, ref.watch(settingsModelProvider)),
      ),
    ],
  );

  /// Creates a new title widget.
  Widget _createTitleWidget() => const Text('Publicités');

  /// Creates a new content widget.
  Widget _createContentWidget() => const SingleChildScrollView(
    child: HtmlWidget(
      '''
          Bacomathiques vous laisse le choix d'activer ou de désactiver les publicités (personnalisées ou non).
          Sachez cependant que cette application et son contenu sont mis à disposition gratuitement pour les utilisateurs et que les publicités
          constituent les seuls revenus de cette application.
          Consultez notre <a href="https://bacomathiqu.es/assets/pdf/politique-de-confidentialite.pdf">politique de confidentialité</a> pour plus d'informations.
          ''',
    ),
  );

  /// Creates a new dialog actions widgets.
  List<Widget> createActionsWidgets(BuildContext context, SettingsModel settingsModel) => [
    TextButton(
      onPressed: () async {
        settingsModel.adMobEnabled = true;
        await settingsModel.flush();
        await (await SharedPreferences.getInstance()).setBool(ConsentInformation.PREFERENCES_WANTS_NON_PERSONALIZED_ADS, false);
        await _showRestartDialog(context);
        Navigator.pop(context);
      },
      child: Text('Voir des annonces sur mesure'.toUpperCase()),
    ),
    TextButton(
      onPressed: () async {
        settingsModel.adMobEnabled = true;
        await settingsModel.flush();
        await (await SharedPreferences.getInstance()).setBool(ConsentInformation.PREFERENCES_WANTS_NON_PERSONALIZED_ADS, true);
        await _showRestartDialog(context);
        Navigator.pop(context);
      },
      child: Text('Voir des annonces moins pertinentes'.toUpperCase()),
    ),
    TextButton(
      onPressed: () async {
        settingsModel.adMobEnabled = false;
        await settingsModel.flush();
        Navigator.pop(context);
      },
      child: Text('Désactiver les publicités'.toUpperCase()),
    ),
    TextButton(
      onPressed: () => Navigator.pop(context),
      child: Text('Fermer'.toUpperCase()),
    ),
  ];

  /// Shows a restart dialog.
  Future<void> _showRestartDialog(BuildContext context) => showDialog(
    context: context,
    builder: (context) => AlertDialog(
      content: const SingleChildScrollView(
        child: Text(
          'Choix enregistré ! Il est possible que vous ayez à redémarrer l\'application pour que les changements soient pris en compte.',
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: Text('Ok'.toUpperCase()),
        ),
      ],
    ),
  );

  /// Shows the dialog.
  static void show(BuildContext context) => showDialog(
    context: context,
    builder: (context) => AdsDialog(),
  );
}