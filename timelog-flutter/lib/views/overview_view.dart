import 'package:flutter/material.dart';
import 'package:timelog/components/time_entry_card.dart';
import 'package:timelog/models/app.dart';
import 'package:timelog/models/timer_entry.dart';

class OverviewView extends StatefulWidget {
  const OverviewView({super.key});

  @override
  State<OverviewView> createState() => _OverviewViewState();
}

class _OverviewViewState extends State<OverviewView> {
  _OverviewViewState() {
    App.main.timerEntryListener.listen((v) {
      setState(() {
        timeEntries = v;
      });
    });
  }

  List<TimerEntry> timeEntries = [];

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(10),
      child: ListView(
        children: [
          Container(
            alignment: Alignment.centerLeft,
            margin: const EdgeInsets.all(10),
            child: Text(
              "Your activity",
              style: Theme.of(context).textTheme.titleLarge,
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    "Yesterday",
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                ),
                Text(
                  "1:17:21",
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
              ],
            ),
          ),
          ...timeEntries.map(
            (timeEntry) => TimeEntryCard(
              timerEntry: timeEntry,
            ),
          ),
        ],
      ),
    );
  }
}
