import 'package:flutter/material.dart';

class ColorProvider {
  const ColorProvider({
    required this.brightness,
    required this.backgroundColor,
    required this.seedColor,
  });

  final Brightness brightness;
  final Color? backgroundColor;
  final Color seedColor;

  static ColorProvider dark = const ColorProvider(
    brightness: Brightness.dark,
    backgroundColor: Colors.black,
    seedColor: Color.fromARGB(255, 209, 4, 245),
  );

  static ColorProvider light = const ColorProvider(
    brightness: Brightness.light,
    backgroundColor: null,
    seedColor: Color.fromARGB(255, 241, 165, 255),
  );
}
