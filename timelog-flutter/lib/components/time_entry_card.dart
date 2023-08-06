import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:timelog/helpers/duration_helpers.dart';
import 'package:timelog/models/timer_entry.dart';

class TimeEntryCard extends HookWidget {
  const TimeEntryCard({
    super.key,
    required this.timerEntry,
  });

  final TimerEntry timerEntry;

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(
          Radius.circular(10),
        ),
      ),
      child: SizedBox(
        width: double.infinity,
        child: Container(
          margin: const EdgeInsets.all(10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(
                      timerEntry.description ?? "Missing description...",
                    ),
                  ),
                  Text(
                    formatDuration(timerEntry.getDuration()),
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ],
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                child: Wrap(
                  spacing: 5,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  children: [
                    Icon(
                      Icons.circle,
                      size: 10,
                      color: timerEntry.project.color,
                    ),
                    Text(timerEntry.project.name),
                    const Text("•"),
                    Text(timerEntry.project.client.name)
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
