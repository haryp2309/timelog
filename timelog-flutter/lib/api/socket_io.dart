import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:timelog/api/default_user.dart';

class SocketIO {
  static final socket = IO.io(
    'http://localhost:3000',
    IO.OptionBuilder().setTransports(['websocket']) // for Flutter or Dart VM
        .setAuth(
      {"user": DefaultUser.email, "token": DefaultUser.token},
    ).build(),
  );
}
