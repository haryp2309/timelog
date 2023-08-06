import 'package:flutter/material.dart';

extension HexColor on Color {
  /// String is in the format "aabbcc" or "ffaabbcc" with an optional leading "#".
  static Color fromHex(String hexString) {
    final hexadecimalString = hexString.replaceFirst('#', '');
    final hexadecimalStringWithOpacity = hexadecimalString.length == 8
        ? "${hexadecimalString.substring(2)}${hexadecimalString.substring(0, 2)}"
        : "ff$hexadecimalString";
    return Color(int.parse("ff$hexadecimalString", radix: 16));
  }

  /// Prefixes a hash sign if [leadingHashSign] is set to `true` (default is `true`).
  String toHex({bool leadingHashSign = true}) => '${leadingHashSign ? '#' : ''}'
      '${alpha.toRadixString(16).padLeft(2, '0')}'
      '${red.toRadixString(16).padLeft(2, '0')}'
      '${green.toRadixString(16).padLeft(2, '0')}'
      '${blue.toRadixString(16).padLeft(2, '0')}';
}
