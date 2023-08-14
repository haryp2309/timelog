class ListenerManager<T> {
  final List<Function(T)> _callbacks = [];

  void sendUpdates(T obj) {
    for (var callback in _callbacks) {
      callback(obj);
    }
  }

  void Function() listen(void Function(T) callback) {
    _callbacks.add(callback);
    return () {
      _callbacks.remove(callback);
    };
  }
}
