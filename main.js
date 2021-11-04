let planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

renderPlanets(planets);

//BONUS -- REMOVE PLUTO CHECKBOX
let checkbox = document.getElementById('checked');
//adds checked att to element when checked
document.getElementById('checked').addEventListener('click', function () {
  document.getElementById('checked').toggleAttribute('checked');
  if (checkbox.checked) {
    removePluto();
  } else {
    renderPlanets(planets);
  }
});

function removePluto() {
  let realPlanets = [...planets]
  realPlanets.shift();
  renderPlanets(realPlanets);
}

//BONUS -- ADDING YOUR OWN PLANET
function addPlanet(e){
    let planetName = document.getElementById('planetName').value;
    let weightMultiplier = document.getElementById('weightMultiplier').value;
    planets.push([planetName,parseFloat(weightMultiplier)]);
    renderPlanets(planets)
    document.getElementById('addedOutput').innerHTML = `The planet <span>${planetName}</span> has been added!`;
}

function renderPlanets(planetArray) {
    //wipes all previous options added from the options list
    var x = document.getElementById("planets");
  while (x.length > 0) {
    x.remove(x.length-1);
  }
  planetArray.forEach(element => {
    let planetName = element[0];
    let optionList = document.createElement("option");
    let text = document.createTextNode(planetName);
    optionList.appendChild(text);
    document.getElementById('planets').appendChild(optionList);
  });
}

//takes the user input and find the weight
function calculateWeight(weight, planetName) {
  let planetWeight = 1;
  for (let i = 0; i < planets.length; i++) {
    let currentPlanet = planets[i];
    if (currentPlanet[0] === planetName) {
      planetWeight = currentPlanet[1]
    }
  }
  return weight * planetWeight;
}

//activates when the button is clicked.
function handleClickEvent(e) {
  let userWeight = document.getElementById('user-weight').value;
  let selectedPlanet = document.getElementById('planets').value;
  let result = calculateWeight(userWeight, selectedPlanet);

  document.getElementById('output').innerHTML = `If you were on <span>${selectedPlanet}</span>, you would weigh <span>${result}lbs</span>!`;
}
