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

planets.forEach(element => {
    
    let planetName = element[0];
    let optionList = document.createElement("option");
    let text = document.createTextNode(planetName);
    optionList.appendChild(text);
    document.getElementById("planets").appendChild(optionList);
});

function calulateWeight(weight, planetName) {
    let planetWeight = 1;
    for(let i = 0; i < planets.length; i++){
        let currentPlanet = planets[i];
        if(currentPlanet[0] === planetName){
            planetWeight = currentPlanet[1]
        }
    }
    return weight * planetWeight;
}


function handleClickEvent(e) {
    let userWeight = document.getElementById('user-weight').value;
    let selectedPlanet = document.getElementById('planets').value;
    let result = calulateWeight(userWeight, selectedPlanet);
    
    document.getElementById('output').innerHTML = `If you were on <span>${selectedPlanet}</span>, you would weigh <span>${result}lbs</span>!`;
}