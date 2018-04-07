var crystalVal = [7, 8, 9, 10, 11];
var increment = crystalVal[Math.round(Math.random() * 5)];
var targetNum = [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
var randomNum = targetNum[Math.round(Math.random() * 11)];
var counter = 0;
var wins = 0;
var loss = 0

$("#computer-choice").text(randomNum);

$("#buttons").on("click", ".img", function() {

    counter += increment;

    $("#score").text(counter);

    if (counter === randomNum) {
      alert("you win!");
      wins++
    } else if (counter >= randomNum) {
      alert("you lose!");
      loss++
    }

    var html =
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + loss + "</p>";

    document.querySelector("#win-loss").innerHTML = html

  });
 