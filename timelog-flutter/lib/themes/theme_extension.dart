import 'package:flutter/material.dart';

class CustomThemeExtension extends ThemeExtension<CustomThemeExtension> {
  final EdgeInsets pageMargin;

  const CustomThemeExtension({required this.pageMargin});

  @override
  ThemeExtension<CustomThemeExtension> copyWith({EdgeInsets? pageMargin}) {
    return CustomThemeExtension(
      pageMargin: pageMargin ?? this.pageMargin,
    );
  }

  @override
  ThemeExtension<CustomThemeExtension> lerp(
    covariant ThemeExtension<CustomThemeExtension>? other,
    double t,
  ) {
    if (other is! CustomThemeExtension) {
      return this;
    }
    return CustomThemeExtension(
      pageMargin:
          EdgeInsets.lerp(pageMargin, other.pageMargin, t) ?? pageMargin,
    );
  }

  static CustomThemeExtension getValues(BuildContext context) {
    return Theme.of(context).extension<CustomThemeExtension>()!;
  }
}
