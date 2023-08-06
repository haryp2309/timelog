String formatDuration(Duration duration) {
  String padTwoDigits(int n) => n.toString().padLeft(2, "0");

  String hoursString = padTwoDigits(duration.inHours);
  String minutesString = padTwoDigits(duration.inMinutes.remainder(60));
  String secondsString = padTwoDigits(duration.inSeconds.remainder(60));

  return "$hoursString:$minutesString:$secondsString";
}
