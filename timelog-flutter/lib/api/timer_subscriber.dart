import 'package:timelog/api/socket_io.dart';
import 'package:timelog/models/timer.dart';

class TimerSubscriber implements TimelogTimer {
  TimerSubscriber({
    required TimelogTimer timelogTimer,
    required SocketIO socketIo,
  }) : _timelogTimer = timelogTimer {
    socketIo.onStartTimer = () => _timelogTimer.start();
    socketIo.onStopTimer = () => _timelogTimer.stop();
    socketIo.onResetTimer = () => _timelogTimer.reset();
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
    SocketIO.main.emitResetTimer();
  }

  @override
  void start() {
    SocketIO.main.emitStartTimer();
  }

  @override
  void stop() {
    SocketIO.main.emitStopTimer();
  }
}
