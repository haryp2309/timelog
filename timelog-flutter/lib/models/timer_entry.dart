import 'package:timelog/models/project.dart';

class TimerEntry {
  TimerEntry({
    required this.id,
    required this.description,
    required this.startTime,
    required this.endTime,
    required this.project,
  });

  final String id;
  final Project project;
  DateTime startTime;
  String? description;
  DateTime? endTime;

  Duration getDuration() {
    return (endTime ?? DateTime.now()).difference(startTime);
  }
}
