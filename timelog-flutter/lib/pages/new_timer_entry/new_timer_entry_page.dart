import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:timelog/themes/theme_extension.dart';

class NewTimerEntryPage extends StatefulWidget {
  const NewTimerEntryPage({super.key});

  @override
  State<StatefulWidget> createState() => _NewTimerEntryPageState();
}

class _NewTimerEntryPageState extends State {
  final _descriptionEditingController = TextEditingController();
  final _startDateEditingController = TextEditingController();
  String currentText = "";

  @override
  void initState() {
    _descriptionEditingController.addListener(() {
      setState(() {
        currentText = _descriptionEditingController.text;
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("New Timer Entry"),
      ),
      body: Container(
        margin: CustomThemeExtension.getValues(context).pageMargin,
        child: ListView(
          children: [
            Container(
              margin: const EdgeInsets.symmetric(vertical: 10),
              child: TextField(
                controller: _descriptionEditingController,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  label: Text("Description"),
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 10),
              child: TextField(
                controller: _startDateEditingController,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  label: Text("Start Date"),
                ),
                onTap: () async {
                  DateTime? pickedDate = await showDatePicker(
                    context: context,
                    initialDate: DateTime.now(),
                    firstDate: DateTime(1950),
                    lastDate: DateTime(2100),
                  );

                  if (pickedDate != null) {
                    String formattedDate =
                        DateFormat('yyyy-MM-dd').format(pickedDate);
                    setState(() {
                      _startDateEditingController.text =
                          formattedDate; //set output date to TextField value.
                    });
                  } else {}
                },
              ),
            ),
            Text(currentText)
          ],
        ),
      ),
    );
  }
}
