import 'package:timelog/api/socket_io.dart';
import 'package:timelog/models/timer.dart';

class TimerSubscriber implements TimelogTimer {
  TimerSubscriber({required TimelogTimer timelogTimer})
      : _timelogTimer = timelogTimer {
    /* SocketIO.socket.onConnect((data) {
      SocketIO.socket.onAny((event, data) {
        if (event == "error") {
          print("SOCKET_ERROR: $data");
        }
      heyyyy
      });
      SocketIO.socket.on('startTimer', (data) => _timelogTimer.start());
      SocketIO.socket.on('stopTimer', (data) => _timelogTimer.stop());
      SocketIO.socket.on('resetTimer', (data) => _timelogTimer.reset());
    }); */
  }

  final TimelogTimer _timelogTimer;

  @override
  bool hasStarted() {
    return _timelogTimer.hasStarted();
  }

  @override
  Function() listen(Function(Duration p1) callback) {
    return _timelogTimer.listen(callback);
  }

  @override
  void reset() {
    SocketIO.socket.emit("emit:resetTimer");
  }

  @override
  void start() {
    SocketIO.socket.emit("emit:startTimer");
  }

  @override
  void stop() {
    SocketIO.socket.emit("emit:stopTimer");
  }
}
