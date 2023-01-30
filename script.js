let setsDone = [];

class Set {
  constructor(name, minutesCount) {
    this.name = name;
    this.minutesCount = minutesCount;
  }
}

function addSet() {
  const minutes = parseInt(document.getElementById("minutes").value);
  const moves   = document.getElementsByName('exercises');
  let selectedMove = "";

  for(let moveNum = 0; moveNum < moves.length; moveNum++) {
    if(moves[moveNum].checked) { 
      selectedMove = moves[moveNum].value; 
    }
  }
  if (selectedMove !== "") {
    setsDone.push(new Set(selectedMove, minutes));
  }
}

function mostBurned() {
  let totalField = document.getElementById("burnedTotal");
  let mostIntenseSet = setsDone[0];
  let mostIntenseSetBurned = caloriesCalculator(mostIntenseSet.name, mostIntenseSet.minutesCount);
  
  for (let setNum = 1; setNum < setsDone.length; setNum++) {
    const totalMins = setsDone[setNum].minutesCount;
    const name = setsDone[setNum].name;
    const thisSetBurned = caloriesCalculator(name, totalMins);
    
    if (thisSetBurned > mostIntenseSetBurned) {
      mostIntenseSet = setsDone[setNum];
      mostIntenseSetBurned = caloriesCalculator(mostIntenseSet.name, mostIntenseSet.minutesCount);
    }
  }

  totalField.value = mostIntenseSet.name + ", " + mostIntenseSetBurned;
}

function showAll() {
  let setsVisible = document.getElementById("reps");
  setsVisible.innerHTML = '';

  for (let setNum = 0; setNum < setsDone.length; setNum++) {
    let setView = document.createElement("li");
    const setData = setsDone[setNum];

    const minutesTotal = " " + setData.minutesCount + " minutes ";
    const caloriesTotal = caloriesCalculator(setData.name, setData.minutesCount) + " calories"; 
    setView.appendChild(document.createTextNode(setData.name + minutesTotal + caloriesTotal));
    setsVisible.appendChild(setView);
  }
}

function caloriesCalculator(move, minutes) {
  const sitUpCalsPerMinute    = 10;
  const pushUpCalsPerMinute   = 15;
  const jumpRopeCalsPerMinute = 18;

  switch(move) {
    case "Sit Ups":
      return sitUpCalsPerMinute    * minutes;
    case "Push Ups":
      return pushUpCalsPerMinute   * minutes;
    case "Jump Rope":
      return jumpRopeCalsPerMinute * minutes;
  }
}