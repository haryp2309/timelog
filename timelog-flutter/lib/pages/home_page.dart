import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:timelog/helpers/duration_helpers.dart';

class MyHomePage extends HookWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    final startedTime = useState<DateTime?>(null);
    final currentDuration = useState(const Duration());

    final hasStarted = startedTime.value != null;

    void updateDuration(DateTime currentStartedTime) {
      currentDuration.value = DateTime.now().difference(currentStartedTime);
    }

    useEffect(
      () {
        final currentStartedTime = startedTime.value;
        Timer? timer;
        if (currentStartedTime != null) {
          updateDuration(currentStartedTime);
          timer = Timer.periodic(
            const Duration(seconds: 1),
            (timer) => updateDuration(currentStartedTime),
          );
        }

        return () => timer?.cancel();
      },
      [startedTime.value],
    );

    void handleStart() {
      startedTime.value = DateTime.now();
    }

    void handleStop() {
      startedTime.value = null;
    }

    return Scaffold(
      body: Center(
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    margin: const EdgeInsets.all(20),
                    child: Text(
                      "Timelog",
                      style: Theme.of(context).textTheme.headlineLarge,
                    ),
                  )
                ],
              ),
            ),
            VerticalDivider(
              color: Theme.of(context).dividerColor,
              indent: 20,
              endIndent: 20,
            ),
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Wrap(
                    direction: Axis.vertical,
                    crossAxisAlignment: WrapCrossAlignment.center,
                    spacing: 20,
                    children: <Widget>[
                      Text(
                        formatDuration(currentDuration.value),
                        style: Theme.of(context).textTheme.headlineLarge,
                      ),
                      Wrap(
                        spacing: 10,
                        children: hasStarted
                            ? [
                                ElevatedButton(
                                  onPressed: handleStop,
                                  child: const Text("Stop"),
                                ),
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
                                ElevatedButton(
                                  onPressed: handleStart,
                                  child: const Text("Reset"),
                                )
                              ],
                      ),
                      const SizedBox(
                        width: 400,
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: "Tell me what you are working on",
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
