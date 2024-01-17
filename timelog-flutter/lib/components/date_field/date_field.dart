import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:timelog/constants/date.dart';

class DateField extends StatefulWidget {
  const DateField({super.key});

  @override
  State<StatefulWidget> createState() => _DateFieldState();
}

class _DateFieldState extends State {
  final _controller = TextEditingController();
  DateTime _currentDateTime = DateTime.now();

  @override
  void initState() {
    super.initState();
    _controller.addListener(() {
      setState(() {
        _currentDateTime = DateTime.parse(_controller.text);
      });
    });
  }

  @override
  Widget build(BuildContext context) => TextField(
        controller: _controller,
        decoration: const InputDecoration(
          border: OutlineInputBorder(),
          label: Text("Start Date"),
        ),
        onTap: () async {
          DateTime? pickedDate = await showDatePicker(
            context: context,
            initialDate: _currentDateTime,
            firstDate: DateTime(1950),
            lastDate: DateTime(2100),
          );

          if (pickedDate != null) {
            String formattedDate =
                DateFormat(DateConstants.dateFormat).format(pickedDate);
            setState(
              () {
                _controller.text = formattedDate;
              },
            );
          } else {}
        },
      );
}
