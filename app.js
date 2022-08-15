var activePlayer, scores, roundScore;
var isGameOver;
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne
initGame();

// New Game
function initGame() {
  // Togloom ehellee gedeg tolovt oruulna.
  isNewGame = true;
  // Toglogchiin eeljiig hadgalah huvisagch, Player#1 = 0 Player#2 = 1
  activePlayer = 0;

  // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
  roundScore = 0;

  /* Shoonii ali talaaraa buusaniig hadgalah huvisagch heregtei, 
1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ogno */

  //programm ehlehed beltgeh
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1 - 6 dotorh sanamsargui toog gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zuragiig display deer gargaj irne
    diceDom.style.display = "block";

    // Buusan sanamsargui zuragiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    // Buusan too ni 1 ees ylgaatai bol idvehtei toglogchiin eeljiin onoog nemegduulne
    if (diceNumber !== 1) {
      //1 -ees ylgaatai too buulaa. Buusan toog toglogchid nemne
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duussan baina");
  }
});

// Hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Ug toglogch hojson esehiig shalgah (100 aas ih boloh)
    // Delgetsdeer onoog oorchlono
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // Togloomiig duussan tolovt oruulna;
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Toglogchiin eeljiig solino
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duussan baina");
  }

  // Eeljiin onoog 0 bolgono
});

// Daraagiin toglogchruu shiljih funkts
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Toglogchiin eeljiig nogoo toglogchruu shiljuulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

// Shineer ehluuleh event

document.querySelector(".btn-new").addEventListener("click", initGame);
