import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:timelog/types/tab_config.dart';
import 'package:timelog/views/overview_view.dart';
import 'package:timelog/views/pomodoro_view.dart';

class MyPhonePage extends HookWidget {
  const MyPhonePage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    void handleAdd() {}
    void handleSettings() {}
    void handleStart() {}

    List<TabConfig> tabs = [
      TabConfig(title: "List view", widget: const OverviewView()),
      TabConfig(title: "Pomodoro", widget: const PomodoroView()),
    ];

    return DefaultTabController(
      length: tabs.length,
      child: Scaffold(
        appBar: AppBar(
          title: Text(title),
          bottom: TabBar(
            tabs: tabs.map((config) => Tab(text: config.title)).toList(),
          ),
          actions: [
            IconButton(
              onPressed: handleAdd,
              icon: const Icon(Icons.add_rounded),
            ),
            IconButton(
              onPressed: handleSettings,
              icon: const Icon(Icons.settings),
            ),
          ],
        ),
        body: TabBarView(
          children: tabs.map((config) => config.widget).toList(),
        ),
        persistentFooterButtons: [
          Row(
            children: [
              const Expanded(
                child: SearchBar(
                  hintText: "I'm working on...",
                ),
              ),
              IconButton(
                onPressed: handleStart,
                icon: const Icon(Icons.play_circle_fill_rounded),
                iconSize: 60,
              ),
            ],
          ),
        ],
        bottomNavigationBar: NavigationBar(
          destinations: const [
            Icon(Icons.timer_rounded),
            Icon(Icons.calendar_month_rounded),
            Icon(Icons.analytics_rounded),
          ],
        ),
      ),
    );
  }
}
