$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var color = $("input#color").val();
    var food = $("input#food").val();
    var sport = $("input#sport").val();
    var classes = $("input#classes").val();

    var all = [color, food, sport, classes];
    // var select = all.pop();
    // var final = all.push();

    var first = all[0];
    var second = all[1];
    var third = all[2];
    // $("#output").text(final);
    $(".first").text(first);
    $(".second").text(second);
    $(".third").text(third);
  });
});
