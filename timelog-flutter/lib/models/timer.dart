import 'dart:async';

class TimelogTimer {
  DateTime? _startedTime;
  final List<Function(Duration)> _callbacks = [];
  Timer? _internalTimer;

  void _sendCurrentUpdates() {
    DateTime? currentStartedTime = _startedTime;
    if (currentStartedTime != null) {
      Duration currentDuration = DateTime.now().difference(currentStartedTime);
      _sendUpdates(currentDuration);
    }
  }

  void _sendUpdates(Duration duration) {
    for (var callback in _callbacks) {
      callback(duration);
    }
  }

  void start() {
    _startedTime = DateTime.now();
    _internalTimer = Timer.periodic(
      const Duration(seconds: 1),
      (timer) {
        _sendCurrentUpdates();
      },
    );
  }

  void stop() {
    _internalTimer?.cancel();
    _sendCurrentUpdates();
    _startedTime = null;
  }

  void reset() {
    _sendUpdates(Duration.zero);
  }

  bool hasStarted() {
    return _startedTime != null;
  }

  Function() listen(Function(Duration) callback) {
    _callbacks.add(callback);
    return () {
      _callbacks.remove(callback);
    };
  }
}
