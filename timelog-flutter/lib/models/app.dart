import 'package:flutter/material.dart';
import 'package:timelog/helpers/listener_manager.dart';
import 'package:timelog/models/client.dart';
import 'package:timelog/models/project.dart';
import 'package:timelog/models/timer_entry.dart';

class App {
  static final App main = App();

  final clientListener = ListenerManager<List<Client>>();
  final projectListener = ListenerManager<List<Project>>();
  final _timerEntryListener = ListenerManager<List<TimerEntry>>();

  List<Client> clients = [];
  List<Project> projects = [];
  List<TimerEntry> timerEntries = [];

  Client addOrUpdateClient({required String clientId, required String name}) {
    final existingClient =
        clients.where((element) => element.id == clientId).firstOrNull;

    Client client;

    if (existingClient == null) {
      client = Client(id: clientId, name: name);
      clients.add(client);
      return client;
    } else {
      existingClient.name = name;
      client = existingClient;
    }

    clientListener.sendUpdates(clients);

    return client;
  }

  Future<Project> addOrUpdateProject({
    required String projectId,
    required String clientId,
    required Color color,
    required String name,
    required Future<Client> Function() onMissingClient,
  }) async {
    final existingProject =
        projects.where((element) => element.id == projectId).firstOrNull;

    Project project;
    if (existingProject == null) {
      project = Project(
        id: projectId,
        name: name,
        color: color,
        client: clients
                .where(
                  (client) => client.id == clientId,
                )
                .firstOrNull ??
            await onMissingClient(),
      );
      projects.add(project);
    } else {
      existingProject.color = color;
      existingProject.name = name;
      project = existingProject;
    }

    projectListener.sendUpdates(projects);

    return project;
  }

  Future<TimerEntry> addOrUpdateTimerEntry({
    required String timerEntryId,
    required String projectId,
    required DateTime startTime,
    required String? description,
    required DateTime? endTime,
    required Future<Project> Function() onMissingProject,
  }) async {
    final existingTimerEntry =
        timerEntries.where((element) => element.id == timerEntryId).firstOrNull;

    TimerEntry timerEntry;

    if (existingTimerEntry == null) {
      timerEntry = TimerEntry(
        id: timerEntryId,
        description: description,
        startTime: startTime,
        endTime: endTime,
        project: projects
                .where(
                  (project) => project.id == projectId,
                )
                .firstOrNull ??
            await onMissingProject(),
      );
      timerEntries.add(timerEntry);
    } else {
      existingTimerEntry.description = description;
      existingTimerEntry.endTime = endTime;
      existingTimerEntry.startTime = startTime;
      timerEntry = existingTimerEntry;
    }

    _timerEntryListener.sendUpdates(timerEntries);

    return timerEntry;
  }

  void Function() listenTimerEntry(void Function(List<TimerEntry>) callback) {
    final unsubscriber = _timerEntryListener.listen(callback);
    callback(timerEntries);
    return unsubscriber;
  }
}
