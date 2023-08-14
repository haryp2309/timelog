import 'package:timelog/helpers/listener_manager.dart';
import 'package:timelog/models/client.dart';

class ClientService {
  final _clientListener = ListenerManager<List<Client>>();
  final List<Client> _clients = [];

  Client addOrUpdateClient({required String clientId, required String name}) {
    final existingClient =
        _clients.where((element) => element.id == clientId).firstOrNull;

    Client client;

    if (existingClient == null) {
      client = Client(id: clientId, name: name);
      _clients.add(client);
      return client;
    } else {
      existingClient.name = name;
      client = existingClient;
    }

    _clientListener.sendUpdates(_clients);

    return client;
  }

  Client? getClient(String clientId) {
    return _clients
        .where(
          (client) => client.id == clientId,
        )
        .firstOrNull;
  }
}
