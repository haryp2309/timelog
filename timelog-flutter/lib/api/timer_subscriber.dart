import 'package:timelog/api/socket_io.dart';
import 'package:timelog/models/timer.dart';

class TimerSubscriber implements TimelogTimer {
  final TimelogTimer _timelogTimer;
  final SocketIO _socketIo;

  TimerSubscriber({
    required TimelogTimer timelogTimer,
    required SocketIO socketIo,
  })  : _socketIo = socketIo,
        _timelogTimer = timelogTimer {
    _socketIo.onStartTimer = () => _timelogTimer.start();
    _socketIo.onStopTimer = () => _timelogTimer.stop();
    _socketIo.onResetTimer = () => _timelogTimer.reset();
  }

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
    _socketIo.emitResetTimer();
  }

  @override
  void start() {
    _socketIo.emitStartTimer();
  }

  @override
  void stop() {
    _socketIo.emitStopTimer();
  }
}
