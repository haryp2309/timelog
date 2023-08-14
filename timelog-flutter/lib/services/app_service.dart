import 'package:timelog/api/socket_io.dart';
import 'package:timelog/services/client_service.dart';
import 'package:timelog/services/project_service.dart';
import 'package:timelog/services/timer_entry_service.dart';

class AppService {
  static final AppService main = AppService();

  final ClientService clientService = ClientService();
  late final ProjectService projectService;
  late final TimerEntryService timerEntryService;

  final socketTmp = SocketIO();

  AppService() {
    projectService = ProjectService(clientService);
    timerEntryService = TimerEntryService(projectService);
  }
}
