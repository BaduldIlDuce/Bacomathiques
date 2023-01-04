import 'package:bacomathiques/widgets/centered_circular_progress_indicator.dart';
import 'package:bacomathiques/widgets/dialogs/app_alert_dialog.dart';
import 'package:flutter/material.dart';

/// A dialog that allows to tell the user to wait.
class WaitingDialog extends StatelessWidget {
  /// The wait message.
  final String message;

  /// Creates a new waiting dialog instance.
  const WaitingDialog({
    required this.message,
  });

  @override
  Widget build(BuildContext context) => AppAlertDialog.oneChild(
    title: 'Veuillez patienter…',
    child: CenteredCircularProgressIndicator(message: message),
  );

  /// Shows the dialog.
  static void show(BuildContext context, {required String message}) => showDialog(
    context: context,
    builder: (context) => WaitingDialog(message: message),
    barrierDismissible: false,
  );
}