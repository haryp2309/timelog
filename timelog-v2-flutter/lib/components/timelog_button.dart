import 'package:flutter/material.dart';

enum TimelogButtonMode { primary, secondary, tertiary }

class TimelogButton extends StatelessWidget {
  TimelogButton({
    super.key,
    required this.label,
    required this.mode,
  });

  String label;
  TimelogButtonMode mode;

  ButtonStyle createStyle(BuildContext context) {
    ButtonStyle baseStyle = const ButtonStyle(
      textStyle: MaterialStatePropertyAll(
        TextStyle(
          fontWeight: FontWeight.bold,
        ),
      ),
    );

    switch (mode) {
      case TimelogButtonMode.primary:
        return baseStyle.copyWith(
          backgroundColor: MaterialStatePropertyAll(
            Theme.of(context).colorScheme.onPrimaryContainer,
          ),
          foregroundColor: MaterialStatePropertyAll(
            Theme.of(context).colorScheme.onSecondary,
          ),
        );

      case TimelogButtonMode.secondary:
        return baseStyle.copyWith(
          backgroundColor: MaterialStatePropertyAll(
            Theme.of(context).colorScheme.onSecondaryContainer,
          ),
          foregroundColor: MaterialStatePropertyAll(
            Theme.of(context).colorScheme.onSecondary,
          ),
        );

      case TimelogButtonMode.tertiary:
        return baseStyle.copyWith();
    }
  }

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => {},
      style: createStyle(context),
      child: Text(label),
    );
  }
}
