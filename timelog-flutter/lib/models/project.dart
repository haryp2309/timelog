import 'package:flutter/material.dart';
import 'package:timelog/models/client.dart';

class Project {
  Project({
    required this.id,
    required this.name,
    required this.color,
    required this.client,
  });

  final String id;
  final Client client;
  Color color;
  String name;
}
