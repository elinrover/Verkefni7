const games = [];
function start() {
  do {
    finished = play();
  } while (finished && confirm("Viltu spila annann leik?"))
  alert(getResults());
}
function play() {
  const random = randomNumber(1, 100);
  let fjoldi = 0
  let x = true;
  while (x) {
    let svar = prompt("Giskaðu á tölu sem er á milli 0 og 100");
    if (svar === null) {
      alert('Hætti í leik');
      return false;
    }
    svar = parseGuess(svar);
    alert(getResponse(svar, random));
    fjoldi++;
    if (svar === random) {
      x = false;
      games.push(fjoldi);
    }
  }
  return true
}
function getResults() {
  fjoldi = games.length;
  if (fjoldi > 0) {
    average = calculateAverage();
    return `þú spilaðir ${fjoldi} leiki \nMeðalfjöldi ágiskana var ${average}`
  } else {
    return 'Þú spilaðir engann leik >_<';
  }
}
function calculateAverage() {
  let summa = 0;
  for (let i = 0; i < games.length; i++) {
    summa += games[i];
  }
  return (summa / games.length).toFixed(2);
}
function parseGuess(input) {
  output = parseInt(input);
  if (isNaN(output)) {
    return null;
  } else {
    return output;
  }
}
function getResponse(guess, correct) {
  if (guess < 0 || guess == null) {
    return "Ekki rétt"
  } else if (guess === correct) {
    return "Rétt"
  } else if (Math.abs(correct - guess) < 5) {
    return "Mjög nálægt"
  } else if (Math.abs(correct - guess) < 10) {
    return "Nálægt"
  } else if (Math.abs(correct - guess) < 20) {
    return "Frekar langt frá"
  } else if (Math.abs(correct - guess) < 50) {
    return "Langt frá"
  } else {
    return "Mjög langt frá"
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
start();
