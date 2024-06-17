import 'package:flutter/material.dart';
import 'package:timelog/helpers/listener_manager.dart';
import 'package:timelog/models/client.dart';
import 'package:timelog/models/project.dart';
import 'package:timelog/services/app_service.dart';
import 'package:timelog/services/client_service.dart';

class ProjectService {
  final _projectListener = ListenerManager<List<Project>>();
  final List<Project> _projects = [];
  final ClientService _clientService;
  late final Project unkownProject;

  ProjectService(this._clientService) {
    unkownProject = Project(
      id: "UNKNOWN",
      name: "UNKNOWN",
      color: Colors.black,
      client: _clientService.unkownClient,
    );
  }

  Project addOrUpdateProject({
    required String projectId,
    required String clientId,
    required Color color,
    required String name,
  }) {
    final existingProject =
        _projects.where((element) => element.id == projectId).firstOrNull;

    Project project;
    if (existingProject == null) {
      project = Project(
        id: projectId,
        name: name,
        color: color,
        client:
            _clientService.getClient(clientId) ?? _clientService.unkownClient,
      );
      _projects.add(project);
    } else {
      existingProject.color = color;
      existingProject.name = name;
      project = existingProject;
    }

    _projectListener.sendUpdates(_projects);

    return project;
  }

  Project? getProject(String projectId) {
    return _projects
        .where(
          (project) => project.id == projectId,
        )
        .firstOrNull;
  }

  Iterable<Project> get iterable {
    return _projects;
  }
}
