function updateStatusBar(current_test, total_tests) {
  var labelText = "Test "+current_test+" of "+total_tests;
  document.getElementById("progress-bar-label").value = labelText;

  var percent = current_test / total_tests;
  document.getElementById("progress-bar").value = percent;
}

function updateLog(msg) {
}

function cancel() {
}
