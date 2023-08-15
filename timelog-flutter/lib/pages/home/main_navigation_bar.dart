import 'package:flutter/material.dart';
import 'package:timelog/pages/home/home_navigation_view.dart';

class MainNavigationBar extends StatelessWidget {
  final void Function(HomeNavigationView) onCurrentViewChange;
  final HomeNavigationView currentView;
  const MainNavigationBar({
    super.key,
    required this.onCurrentViewChange,
    required this.currentView,
  });

  NavigationDestination getNavigationDestination(HomeNavigationView page) {
    switch (page) {
      case HomeNavigationView.timer:
        return const NavigationDestination(
          icon: Icon(Icons.timer_rounded),
          label: "Timer",
        );
      case HomeNavigationView.overview:
        return const NavigationDestination(
          icon: Icon(Icons.analytics_rounded),
          label: "Overview",
        );

      case HomeNavigationView.settings:
        return const NavigationDestination(
          icon: Icon(Icons.settings_rounded),
          label: "Settings",
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      destinations:
          HomeNavigationView.values.map(getNavigationDestination).toList(),
      onDestinationSelected: (i) => onCurrentViewChange(
        HomeNavigationView.values[i],
      ),
      selectedIndex: HomeNavigationView.values.indexOf(currentView),
    );
  }
}
