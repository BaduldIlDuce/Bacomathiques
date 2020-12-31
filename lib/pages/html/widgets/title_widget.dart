import 'package:bacomathiques/app/theme/theme.dart';
import 'package:bacomathiques/pages/html/html_widget.dart';
import 'package:bacomathiques/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:html/dom.dart' as dom;

/// Allows to get the color according to the specified app theme.
typedef ColorGetter = Color Function(AppTheme theme);

/// Allows to display a title.
class TitleWidget extends StatelessWidget {
  /// The base size.
  static const int _BASE_SIZE = 16;

  /// The font size.
  final double fontSize;

  /// Returns the color of this title according to the provided theme.
  final ColorGetter getColor;

  /// Returns the border bottom color of this title according to the provided theme.
  final ColorGetter getBorderBottomColor;

  /// The html content.
  final String html;

  /// The container padding.
  final EdgeInsets padding;

  /// The container margin.
  final EdgeInsets margin;

  /// Creates a new headline 2 formatted title.
  TitleWidget.h2({
    ColorGetter colorGetter,
    @required this.html,
  })  : fontSize = 2.4 * _BASE_SIZE,
        getColor = colorGetter ?? _getH2Color,
        getBorderBottomColor = ((theme) => theme.hrColor),
        padding = const EdgeInsets.only(bottom: 0.5 * _BASE_SIZE),
        margin = const EdgeInsets.only(bottom: 1.4 * _BASE_SIZE);

  /// Creates a new headline 3 formatted title.
  TitleWidget.h3({
    ColorGetter colorGetter,
    @required this.html,
  })  : fontSize = 1.75 * _BASE_SIZE,
        getColor = colorGetter ?? _getH3Color,
        getBorderBottomColor = null,
        padding = null,
        margin = const EdgeInsets.only(bottom: 1.0 * _BASE_SIZE);

  /// Creates a new headline 4 formatted title.
  TitleWidget.h4({
    ColorGetter colorGetter,
    @required this.html,
  })  : fontSize = 1.25 * _BASE_SIZE,
        getColor = colorGetter,
        getBorderBottomColor = null,
        padding = null,
        margin = const EdgeInsets.only(bottom: 0.75 * _BASE_SIZE);

  /// Creates a new title widget from the specified element.
  factory TitleWidget.fromElement({
    ColorGetter colorGetter,
    @required dom.Element element,
  }) {
    switch (element.localName) {
      case 'h3':
        return TitleWidget.h3(
          colorGetter: colorGetter,
          html: element.innerHtml,
        );
      case 'h4':
        return TitleWidget.h4(
          colorGetter: colorGetter,
          html: element.innerHtml,
        );
      default:
        return TitleWidget.h2(
          colorGetter: colorGetter,
          html: element.innerHtml,
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    AppTheme theme = context.resolveTheme();
    TextStyle textStyle = TextStyle(
      fontFamily: 'FuturaBT',
      fontSize: fontSize,
      color: (getColor == null ? theme.textColor : getColor(theme)) ?? theme.textColor,
    );

    Widget child = RegExp(r'<\/?[a-z][\s\S]*>', caseSensitive: false).hasMatch(html)
        ? AppHtmlWidget(
            data: html,
            buildAsync: false,
            textStyle: textStyle,
          )
        : Text(
            html,
            style: textStyle,
          );

    Color borderBottomColor = getBorderBottomColor == null ? null : getBorderBottomColor(theme);

    return Container(
      decoration: borderBottomColor == null
          ? null
          : BoxDecoration(
              border: Border(
                bottom: BorderSide(
                  color: borderBottomColor,
                ),
              ),
            ),
      width: borderBottomColor == null ? null : MediaQuery.of(context).size.width,
      margin: margin,
      child: child,
    );
  }

  /// Returns the color of the headline 2 according to the specified theme.
  static Color _getH2Color(AppTheme theme) => theme.h2Color;

  /// Returns the color of the headline 3 according to the specified theme.
  static Color _getH3Color(AppTheme theme) => theme.h3Color;
}