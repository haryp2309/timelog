import "package:collection/collection.dart";
import 'package:flutter/material.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:timelog/components/time_entry_card.dart';
import 'package:timelog/helpers/duration_helpers.dart';
import 'package:timelog/models/timer_entry.dart';
import 'package:timelog/services/app_service.dart';
import 'package:timelog/themes/theme_extension.dart';

class OverviewView extends StatefulWidget {
  const OverviewView({super.key});

  @override
  State<OverviewView> createState() => _OverviewViewState();
}

class _OverviewViewState extends State<OverviewView> {
  late void Function() _timerEntryListenerUnsubscriber;
  final List<TimerEntry> _timerEntries = [];

  @override
  initState() {
    /* _timerEntryListenerUnsubscriber =
        AppService.main.timerEntryService.listenTimerEntry((v) {
      setState(() {
        //_timerEntries = v;
      });
    }); */

    AppService.main.clientService.addOrUpdateClient(
      clientId: "CLIENT1",
      name: "Work",
    );

    AppService.main.clientService.addOrUpdateClient(
      clientId: "CLIENT2",
      name: "University",
    );

    AppService.main.projectService.addOrUpdateProject(
      projectId: "PROJECT1",
      clientId: "CLIENT2",
      color: const Color.fromARGB(255, 133, 208, 21),
      name: "Visual Intelligence",
    );

    AppService.main.projectService.addOrUpdateProject(
      projectId: "PROJECT2",
      clientId: "CLIENT2",
      color: const Color.fromARGB(255, 21, 208, 192),
      name: "Algorithm and Datastructures",
    );

    AppService.main.projectService.addOrUpdateProject(
      projectId: "PROJECT3",
      clientId: "CLIENT1",
      color: const Color.fromARGB(255, 208, 21, 96),
      name: "WRK-2142",
    );

    _timerEntries.add(
      AppService.main.timerEntryService.addOrUpdateTimerEntry(
        timerEntryId: "TIMER_ENTRY1",
        projectId: "PROJECT1",
        startTime:
            DateTime.now().subtract(const Duration(hours: 3, seconds: 123)),
        description: "Another more important thing",
        endTime: DateTime.now(),
      ),
    );

    _timerEntries.add(
      AppService.main.timerEntryService.addOrUpdateTimerEntry(
        timerEntryId: "TIMER_ENTRY2",
        projectId: "PROJECT2",
        startTime:
            DateTime.now().subtract(const Duration(hours: 2, seconds: 432)),
        description: "Finish assignment",
        endTime: DateTime.now(),
      ),
    );

    _timerEntries.add(
      AppService.main.timerEntryService.addOrUpdateTimerEntry(
        timerEntryId: "TIMER_ENTRY3",
        projectId: "PROJECT1",
        startTime: DateTime.now().subtract(
          const Duration(hours: 3, days: 3, minutes: 2, seconds: 23),
        ),
        description: "Do something important",
        endTime: DateTime.now().subtract(const Duration(days: 3)),
      ),
    );

    _timerEntries.add(
      AppService.main.timerEntryService.addOrUpdateTimerEntry(
        timerEntryId: "TIMER_ENTRY4",
        projectId: "PROJECT3",
        startTime: DateTime.now().subtract(const Duration(hours: 3, days: 100)),
        description: "Do something important",
        endTime: DateTime.now().subtract(const Duration(days: 100)),
      ),
    );

    _timerEntries.add(
      AppService.main.timerEntryService.addOrUpdateTimerEntry(
        timerEntryId: "TIMER_ENTRY5",
        projectId: "PROJECT3",
        startTime: DateTime.now().subtract(const Duration(hours: 3, days: 100)),
        description: "Finish up that important work",
        endTime: DateTime.now().subtract(const Duration(days: 100)),
      ),
    );

    super.initState();
  }

  @override
  dispose() {
    /* _timerEntryListenerUnsubscriber(); */
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
      margin: CustomThemeExtension.getValues(context).pageMargin,
      child: ListView(
        children: [
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
                          formatDuration(
                            timerEntries
                                .map((e) => (e.endTime ?? DateTime.now())
                                    .difference(e.startTime))
                                .reduce((value, element) => value + element),
                          ),
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
