import { Controller as Cont } from "./controller/controller.js";
import { Eventhandlers as Event } from "./controller/eventhandlers.js";
import { Model } from "./model.js";

//Initialisering
const app = document.getElementById('app');
Cont.NewHole();
showView();

//View Funksjoner
export function showView(){
    app.innerHTML = /*HTML*/`
    <div>${Model.mainTitle}</div><br>
    <input class='addPlayerInput' value=""></input><button class='addPlayerButton' >Add Player</button>
    <div>Aktivt Hull: ${Model.activeHole+1}</div>
    <button class='lastHole'>Forrige Hull</button><button class='nextHole'>Neste Hull</button>
    ${Cont.ListPlayers()}
    `
    Event.OnClickAddPlayer();
    Event.OnClickNextHole();
    Event.OnClickLastHole();
    Event.OnIncrementPlayerScore()
}