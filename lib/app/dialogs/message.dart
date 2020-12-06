import 'package:flutter/material.dart';

/// A simple message dialog.
class MessageDialog extends StatelessWidget {
  /// The message to show.
  final String message;

  /// Action to run when the ok button has been pressed.
  final VoidCallback okButtonPressed;

  /// Creates a new message dialog instance.
  MessageDialog({
    @required this.message,
    this.okButtonPressed,
  });

  @override
  Widget build(BuildContext context) => AlertDialog(
    content: Text(message),
    actions: [
      FlatButton(
        child: Text('Ok'.toUpperCase()),
        onPressed: okButtonPressed ?? () => Navigator.pop(context),
        textTheme: ButtonTextTheme.accent,
      ),
    ],
  );

  /// Shows the dialog.
  static Future<void> show(BuildContext context, {@required String message, VoidCallback okButtonPressed, VoidCallback onCancelled}) async {
    await showDialog(
      context: context,
      builder: (context) => MessageDialog(message: message, okButtonPressed: okButtonPressed),
      barrierDismissible: false,
    );
    if (onCancelled != null) {
      onCancelled();
    }
  }
}