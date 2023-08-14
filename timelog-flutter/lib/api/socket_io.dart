import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:timelog/api/api.dart';
import 'package:timelog/api/default_user.dart';
import 'package:timelog/services/app_service.dart';

class SocketIO {
  late final IO.Socket _socket;
  void Function()? onStartTimer;
  void Function()? onStopTimer;
  void Function()? onResetTimer;

  SocketIO() {
    final ioOptions = IO.OptionBuilder()
        .setTransports(['websocket']) // for Flutter or Dart VM
        .setAuth(
      {
        "user": DefaultUser.email,
        "token": DefaultUser.token,
      },
    ).build();
    _socket = IO.io(
      'http://localhost:3000',
      ioOptions,
    );
    _socket.onConnect(handleOnConnect);
  }

  void handleOnConnect(data) {
    _socket.on("update-timerentries", handleUpdateTimerEntries);
    _socket.on('startTimer', handleStartTimer);
    _socket.on('stopTimer', handleStopTimer);
    _socket.on('resetTimer', handleResetTimer);
  }

  handleStartTimer(_) => onStartTimer?.call();
  handleStopTimer(_) => onStopTimer?.call();
  handleResetTimer(_) => onResetTimer?.call();

  void handleUpdateTimerEntries(dynamic data) {
    final List<dynamic>? uncheckedTimerEntryIds = data["timerEntryIds"];
    final List<String>? timerEntryIds =
        uncheckedTimerEntryIds?.map((element) => element as String).toList();

    Api().loadTimeEntries(AppService.main, timerEntryIds: timerEntryIds);
  }

  void emitResetTimer() {
    _socket.emit("emit:resetTimer");
  }

  void emitStartTimer() {
    _socket.emit("emit:startTimer");
  }

  void emitStopTimer() {
    _socket.emit("emit:stopTimer");
  }
}
