import 'package:flutter/material.dart';
import 'package:timelog/api/socket_io.dart';
import 'package:timelog/api/timer_subscriber.dart';
import 'package:timelog/helpers/duration_helpers.dart';
import 'package:timelog/models/timer.dart';

class PomodoroView extends StatefulWidget {
  const PomodoroView({super.key});

  @override
  State<PomodoroView> createState() => _PomodoroViewState();
}

class _PomodoroViewState extends State<PomodoroView> {
  var currentDuration = const Duration();
  final timelogTimer = TimerSubscriber(
    timelogTimer: TimelogTimer(),
    socketIo: SocketIO.main,
  );
  List<void Function()> onDisposeFunctions = [];

  @override
  void initState() {
    timelogTimer.listen((duration) {
      setState(() {
        currentDuration = duration;
      });
    });
    super.initState();
  }

  @override
  void dispose() {
    for (var onDispose in onDisposeFunctions) {
      onDispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final hasStarted = timelogTimer.hasStarted();

    void handleStart() {
      timelogTimer.start();
    }

    void handleStop() {
      timelogTimer.stop();
    }

    void handleReset() {
      timelogTimer.reset();
    }

    return Container(
      margin: const EdgeInsets.all(10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                formatDuration(currentDuration),
                style: Theme.of(context).textTheme.displayLarge,
              ),
              const SizedBox(
                height: 40,
              ),
              Row(
                children: hasStarted
                    ? [
                        ElevatedButton(
                          onPressed: handleStop,
                          child: const Text("Stop"),
                        ),
                        const SizedBox(width: 10),
                        ElevatedButton(
                          onPressed: handleStart,
                          child: const Text("Lap"),
                        )
                      ]
                    : [
                        ElevatedButton(
                          onPressed: handleStart,
                          child: const Text("Start"),
                        ),
                        const SizedBox(width: 10),
                        ElevatedButton(
                          onPressed: handleReset,
                          child: const Text("Reset"),
                        )
                      ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
