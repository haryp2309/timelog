import 'package:flutter/material.dart';
import 'package:timelog/pages/home/home_page.dart';
import 'package:timelog/themes/color_provider.dart';
import 'package:timelog/themes/default_theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      darkTheme: DefaultThemeBuilder(
        colorProvider: ColorProvider.dark,
      ).build(),
      themeMode: ThemeMode.dark,
      theme: DefaultThemeBuilder(
        colorProvider: ColorProvider.light,
      ).build(),
      home: const HomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
