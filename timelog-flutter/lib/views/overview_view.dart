import "package:collection/collection.dart";
import 'package:flutter/material.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:timelog/components/time_entry_card.dart';
import 'package:timelog/models/timer_entry.dart';
import 'package:timelog/services/app_service.dart';

class OverviewView extends StatefulWidget {
  const OverviewView({super.key});

  @override
  State<OverviewView> createState() => _OverviewViewState();
}

class _OverviewViewState extends State<OverviewView> {
  late void Function() _timerEntryListenerUnsubscriber;
  List<TimerEntry> _timerEntries = [];

  @override
  initState() {
    _timerEntryListenerUnsubscriber =
        AppService.main.timerEntryService.listenTimerEntry((v) {
      setState(() {
        _timerEntries = v;
      });
    });

    super.initState();
  }

  @override
  dispose() {
    _timerEntryListenerUnsubscriber();
    super.dispose();
  }

  Map<String, List<TimerEntry>> get _groupedTimerEntries {
    final groupedTimerEntries = groupBy(
      _timerEntries,
      (timerEntry) {
        final startDate = DateTime.utc(
          timerEntry.startTime.year,
          timerEntry.startTime.month,
          timerEntry.startTime.day,
        );
        return timeago.format(startDate);
      },
    ).map((key, value) {
      return MapEntry(key, value..sort());
    });

    return groupedTimerEntries;
  }

  List<String> get _localizedRelativeDates {
    return _groupedTimerEntries.keys.toList();
  }

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
          ..._localizedRelativeDates.map(
            (localizedRelativeDate) {
              final timerEntries = _groupedTimerEntries[localizedRelativeDate];
              if (timerEntries == null) {
                return const Column();
              }
              return Column(
                children: [
                  Container(
                    margin: const EdgeInsets.all(10),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            localizedRelativeDate,
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
                  ...timerEntries.map(
                    (timeEntry) => TimeEntryCard(
                      timerEntry: timeEntry,
                    ),
                  ),
                ],
              );
            },
          )
        ],
      ),
    );
  }
}
