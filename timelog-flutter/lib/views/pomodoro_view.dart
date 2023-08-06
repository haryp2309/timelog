import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:timelog/api/timer_subscriber.dart';
import 'package:timelog/helpers/duration_helpers.dart';
import 'package:timelog/models/timer.dart';

class PomodoroView extends HookWidget {
  const PomodoroView({super.key});

  @override
  Widget build(BuildContext context) {
    final currentDuration = useState(const Duration());
    final timelogTimer =
        useState(TimerSubscriber(timelogTimer: TimelogTimer()));

    useEffect(
      () {
        timelogTimer.value.listen((duration) {
          currentDuration.value = duration;
        });
        return null;
      },
      [timelogTimer],
    );

    final hasStarted = timelogTimer.value.hasStarted();

    void handleStart() {
      timelogTimer.value.start();
    }

    void handleStop() {
      timelogTimer.value.stop();
    }

    void handleReset() {
      timelogTimer.value.reset();
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
                formatDuration(currentDuration.value),
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
