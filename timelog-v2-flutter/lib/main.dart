import 'package:flutter/material.dart';
import 'package:timelog_v2/components/timelog_button.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: ["00", "00"]
                    .map(
                      (e) => Container(
                        padding: const EdgeInsets.all(32),
                        margin: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: Theme.of(context).colorScheme.primaryContainer,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          e,
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 56,
                          ),
                        ),
                      ),
                    )
                    .toList(),
              ),
              SizedBox(
                height: 32,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Wrap(
                    spacing: 8,
                    children: [
                      TimelogButton(
                        label: "Start",
                        mode: TimelogButtonMode.primary,
                      ),
                      TimelogButton(
                        label: "End",
                        mode: TimelogButtonMode.secondary,
                      ),
                      TimelogButton(
                        label: "+",
                        mode: TimelogButtonMode.tertiary,
                      ),
                    ],
                  )
                ],
              )
            ],
          )),
    );
  }
}
