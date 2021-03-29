// Write your JavaScript code here!

   window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json)   {
            const div = document.getElementById("missionTarget");
            let planet = json[Math.floor(Math.random() * 6)];
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
            <li>Name: ${planet.name}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Star: ${planet.star}</li>
            <li>Distance from Earth: ${planet.distance}</li>
            <li>Number of Moons: ${planet.moons}</li>
         </ol>
            <img src = "${planet.image}">
            `
         });
      });
      let form = document.querySelector("form");
      form.addEventListener("submit", function(e) {
         e.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
            
         }
         let pilotStatus = document.querySelector("li[id=pilotStatus]");
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         let copilotStatus = document.querySelector("li[id=copilotStatus]");
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         let fuelStatus = document.querySelector("li[id=fuelStatus]");
         let fuelStatusNumber = parseInt(fuelLevel.value);
         let cargoStatus = document.querySelector("li[id=cargoStatus]");
         let cargoStatusNumber = parseInt(cargoMass.value);
         let faultyItems = document.querySelector("div[id=faultyItems]");
         if (!isNaN(parseInt(pilotName.value)) || !isNaN(parseInt(copilotName.value)) || isNaN(fuelStatusNumber) || isNaN(cargoStatusNumber)) {
            alert("Make sure to enter valid information for each field!");
         }
         if (fuelStatusNumber < 10000 || cargoStatusNumber > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red"; 
            if (fuelStatusNumber < 10000) {
               fuelStatus.innerHTML = "Fuel level too low for launch";
            }
            if (cargoStatusNumber > 10000)  {
               cargoStatus.innerHTML = "Cargo mass too high for launch";
            } else {
               fuelStatus.innerHTML = "Fuel level high enough for launch";
               cargoStatus.innerHTML = "Cargo mass low enough for launch";
            }
         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         } 
         
      });
   });


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
