import "package:collection/collection.dart";
import 'package:timelog/helpers/listener_manager.dart';
import 'package:timelog/models/project.dart';
import 'package:timelog/models/timer_entry.dart';
import 'package:timelog/services/project_service.dart';

class TimerEntryService {
  final _timerEntryListener = ListenerManager<List<TimerEntry>>();
  final ProjectService _projectService;
  final List<TimerEntry> _timerEntries = [];

  TimerEntryService(this._projectService);

  Future<TimerEntry> addOrUpdateTimerEntry({
    required String timerEntryId,
    required String projectId,
    required DateTime startTime,
    required String? description,
    required DateTime? endTime,
    required Future<Project> Function() onMissingProject,
  }) async {
    final existingTimerEntry = _timerEntries
        .where((element) => element.id == timerEntryId)
        .firstOrNull;

    TimerEntry timerEntry;

    if (existingTimerEntry == null) {
      timerEntry = TimerEntry(
        id: timerEntryId,
        description: description,
        startTime: startTime,
        endTime: endTime,
        project:
            _projectService.getProject(projectId) ?? await onMissingProject(),
      );
      _timerEntries.add(timerEntry);
    } else {
      existingTimerEntry.description = description;
      existingTimerEntry.endTime = endTime;
      existingTimerEntry.startTime = startTime;
      timerEntry = existingTimerEntry;
    }

    _timerEntryListener.sendUpdates(_timerEntries);

    return timerEntry;
  }

  void Function() listenTimerEntry(void Function(List<TimerEntry>) callback) {
    final unsubscriber = _timerEntryListener.listen(callback);
    callback(_timerEntries);
    return unsubscriber;
  }
}
