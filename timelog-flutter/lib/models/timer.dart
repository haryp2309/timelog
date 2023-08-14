import 'dart:async';

import 'package:timelog/helpers/listener_manager.dart';

class TimelogTimer {
  DateTime? _startedTime;
  final _listenerManager = ListenerManager<Duration>();
  Timer? _internalTimer;

  void _sendCurrentUpdates() {
    DateTime? currentStartedTime = _startedTime;
    if (currentStartedTime != null) {
      Duration currentDuration = DateTime.now().difference(currentStartedTime);
      _listenerManager.sendUpdates(currentDuration);
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
    _listenerManager.sendUpdates(Duration.zero);
  }

  bool hasStarted() {
    return _startedTime != null;
  }

  Function() listen(Function(Duration) callback) {
    return _listenerManager.listen(callback);
  }
}
