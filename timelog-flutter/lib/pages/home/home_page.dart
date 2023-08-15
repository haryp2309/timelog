import 'package:flutter/material.dart';
import 'package:timelog/pages/home/home_navigation_view.dart';
import 'package:timelog/pages/home/main_navigation_bar.dart';
import 'package:timelog/views/overview_view.dart';
import 'package:timelog/views/pomodoro_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<StatefulWidget> createState() => _HomePageState();
}

class _HomePageState extends State {
  HomeNavigationView currentView = HomeNavigationView.overview;

  void handleAdd() {}
  void handleSettings() {}

  ({String title, List<IconButton> actions, Widget body}) getCurrentConfig(
    HomeNavigationView currentView,
  ) {
    switch (currentView) {
      case HomeNavigationView.overview:
        return (
          title: "Your activities",
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
          body: const OverviewView()
        );
      case HomeNavigationView.timer:
        return (title: "Pomodoro", actions: [], body: const PomodoroView());
      case HomeNavigationView.settings:
        return (title: "Overview", actions: [], body: const OverviewView());
    }
  }

  @override
  Widget build(BuildContext context) {
    final currentConfig = getCurrentConfig(currentView);
    return Scaffold(
      appBar: AppBar(
        title: Text(currentConfig.title),
        actions: currentConfig.actions,
      ),
      body: currentConfig.body,
      bottomNavigationBar: MainNavigationBar(
        onCurrentViewChange: (nextView) => setState(() {
          currentView = nextView;
        }),
        currentView: currentView,
      ),
    );
  }
}
