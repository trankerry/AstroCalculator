//default planets
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

//renders planets on load
renderPlanets(planets);

function renderPlanets(planetArray) {
    //wipes all previous options added from the options list, needed to reset the list when removing/adding pluto planet
    var x = document.getElementById("planets");
  while (x.length > 0) {
    x.remove(x.length-1);
  }
  //for each planet in the array...
  planetArray.forEach(element => {
    //get the name part only
    let planetName = element[0];
    //create an option element
    let optionList = document.createElement("option");
    //create a the textNode with the planet's name
    let text = document.createTextNode(planetName);
    //append the text to the option element
    optionList.appendChild(text);
    //append the option element to the select element named 'planets'
    document.getElementById('planets').appendChild(optionList);
  });
}

//takes the user input and find the weight
function calculateWeight(weight, planetName) {
  let planetWeight = 1;
  //loop through the planet array to find the matching name and assign it to planetWeight
  for (let i = 0; i < planets.length; i++) {
    let currentPlanet = planets[i];
    if (currentPlanet[0] === planetName) {
      planetWeight = currentPlanet[1]
    }
  }
  return (weight * planetWeight).toFixed(2);
}

//activates when the button is clicked.
function handleClickEvent(e) {
  //get the user's weight from the input value
  let userWeight = document.getElementById('user-weight').value;
  //get the planet selection 
  let selectedPlanet = document.getElementById('planets').value;
  let result = calculateWeight(userWeight, selectedPlanet);
  //get 'output' id and add inside the message
  document.getElementById('output').innerHTML = `If you were on <span>${selectedPlanet}</span>, you would weigh <span>${result} lbs</span>!`;
}

//BONUS -- REMOVE PLUTO CHECKBOX
let checkbox = document.getElementById('checked');
//adds 'checked' att to input when checked
document.getElementById('checked').addEventListener('click', function () {
  document.getElementById('checked').toggleAttribute('checked');
  //if the input has the 'checked' att ...
  if (checkbox.checked) {
    removePluto();
  } else {
    renderPlanets(planets);
  }
});

function removePluto() {
  //copy planets array then shift() the first index
  let realPlanets = [...planets]
  realPlanets.shift();
  renderPlanets(realPlanets);
}

//BONUS -- ADDING YOUR OWN PLANET
function addPlanet(e){
    //get new planet name and weightMultiplier from user input
    let planetName = document.getElementById('planetName').value;
    let weightMultiplier = document.getElementById('weightMultiplier').value;
    //push the planet name and weight to the end of the planet array
    planets.push([planetName,parseFloat(weightMultiplier)]);
    //re-render the planets with the new planet added
    renderPlanets(planets)
    //provide feedback to user
    document.getElementById('addedOutput').innerHTML = `The planet <span>${planetName}</span> has been added!`;
}
