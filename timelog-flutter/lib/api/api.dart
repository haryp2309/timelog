import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:timelog/api/default_user.dart';
import 'package:timelog/extensions/hex_color.dart';
import 'package:timelog/models/app.dart';
import 'package:timelog/models/client.dart';
import 'package:timelog/models/project.dart';
import 'package:timelog/models/timer_entry.dart';

class Api {
  String hostname = "localhost:3000";
  String user = DefaultUser.email;
  String token = DefaultUser.token;

  Future<http.Response> get(
    String path, {
    Map<String, dynamic> queryParams = const {},
  }) {
    return http.get(
      Uri.http(
        hostname,
        path,
        queryParams,
      ),
      headers: {
        "x-access-token": token,
        "x-access-user": user,
      },
    );
  }

  Future<Client> loadClient({
    required App app,
    required String clientId,
  }) async {
    final response = await get("/api/client/get/$clientId");
    final Map<String, dynamic> body = jsonDecode(response.body);
    return app.addOrUpdateClient(
      clientId: body["id"],
      name: body["name"],
    );
  }

  Future<Project> loadProject({
    required App app,
    required String projectId,
  }) async {
    final response = await get("/api/project/get/$projectId");
    final Map<String, dynamic> body = jsonDecode(response.body);
    final clientId = body["clientId"];
    return app.addOrUpdateProject(
      projectId: body["id"],
      clientId: clientId,
      color: HexColor.fromHex(body["color"]),
      name: body["name"],
      onMissingClient: () => loadClient(app: app, clientId: clientId),
    );
  }

  Future<List<TimerEntry>> loadTimeEntries(
    App app, {
    List<String>? timerEntryIds,
  }) async {
    final Map<String, dynamic> queryParams = {};
    if (timerEntryIds != null) {
      queryParams.addAll({"timerEntryIds": timerEntryIds});
    }
    final value = await get(
      "/api/user/timeentries",
      queryParams: queryParams,
    );
    final List<dynamic> body = jsonDecode(value.body);
    final timerEntriesFutures = body.map((obj) {
      return app.addOrUpdateTimerEntry(
        timerEntryId: obj["id"],
        projectId: obj["project"]["id"],
        startTime: DateTime.parse(obj["startTime"]),
        endTime: obj["endTime"] != null ? DateTime.parse(obj["endTime"]) : null,
        description: obj["description"],
        onMissingProject: () async =>
            loadProject(app: app, projectId: obj["project"]["id"]),
      );
    }).toList();
    final timerEntries = await Future.wait(timerEntriesFutures);
    return timerEntries;
  }
}
