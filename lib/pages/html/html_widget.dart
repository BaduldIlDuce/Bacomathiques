import 'package:bacomathiques/pages/html/representation_preview.dart';
import 'package:bacomathiques/pages/html/title_widget.dart';
import 'package:bacomathiques/pages/html/widget_factory.dart';
import 'package:bacomathiques/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html_core/flutter_widget_from_html_core.dart';
import 'package:html/dom.dart' as dom;

/// Allows to display a HTML widget.
class AppHtmlWidget extends StatelessWidget {
  /// The HTML data.
  final String data;

  /// The text style.
  final TextStyle textStyle;

  /// Whether to build it async.
  final bool buildAsync;

  /// The image path (allows to display remote pictures).
  final String imagesDirectoryURL;

  /// Creates a new app HTML widget instance.
  const AppHtmlWidget({
    @required this.data,
    @required this.textStyle,
    this.buildAsync = true,
    this.imagesDirectoryURL,
  });

  @override
  Widget build(BuildContext context) => HtmlWidget(
        data,
        buildAsync: buildAsync,
        customWidgetBuilder: buildCustomWidget,
        customStylesBuilder: buildCustomStyle,
        buildAsyncBuilder: (context, snapshot) => snapshot.hasData ? snapshot.data : const CenteredCircularProgressIndicator(message: 'Rendu…'),
        //rebuildTriggers: RebuildTriggers([data, buildCustomWidget, buildCustomStyle]),
        textStyle: textStyle,
        factoryBuilder: () => AppWidgetFactory(textStyle: textStyle),
      );

  /// Builds the widget of an element.
  Widget buildCustomWidget(dom.Element element) {
    if (element.localName == 'h2' || element.localName == 'h3' || element.localName == 'h4') {
      return TitleWidget.fromElement(textStyle: textStyle, element: element);
    }

    if (element.attributes.containsKey('data-api-v2-geogebra-id') && imagesDirectoryURL != null) {
      return RepresentationPreview(
        imagesDirectoryURL: imagesDirectoryURL,
        representationId: element.id,
        geogebraId: element.attributes['data-api-v2-geogebra-id'],
      );
    }

    return null;
  }

  /// Builds the style of an element.
  Map<String, String> buildCustomStyle(dom.Element element) {
    Map<String, String> style = {
      if (element.classes.contains('mb-0')) 'margin-bottom': '0',
    };

    switch (element.localName) {
      case 'p':
        return {
          'margin-top': '0',
          'margin-bottom': '1em',
          ...style,
        };
      case 'ol':
        {
          return {
            'margin-top': '0',
            'margin-bottom': '0',
            'padding-left': '2em',
            ...style,
          };
        }
      case 'ul':
        return {
          'list-style-type': 'dash',
          'margin-top': '0',
          'margin-bottom': '0',
          'padding-left': '2em',
          ...style,
        };
      case 'li':
        return {
          'margin-bottom': '0.8em',
          ...style,
        };
    }

    return null;
  }
}
