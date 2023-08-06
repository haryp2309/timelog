import 'package:flutter/material.dart';
import 'package:timelog/themes/color_provider.dart';

class DefaultThemeBuilder {
  const DefaultThemeBuilder({required this.colorProvider});
  final ColorProvider colorProvider;

  ThemeData build() {
    return ThemeData(
      appBarTheme: AppBarTheme(
        backgroundColor: colorProvider.backgroundColor,
      ),
      colorScheme: ColorScheme.fromSeed(
        seedColor: colorProvider.seedColor,
        brightness: colorProvider.brightness,
        background: colorProvider.backgroundColor,
      ),
      navigationBarTheme: NavigationBarThemeData(
        backgroundColor: colorProvider.backgroundColor,
      ),
      useMaterial3: true,
    );
  }
}
