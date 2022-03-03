import { Controller as Cont } from "./controller/controller.js";
import { Eventhandlers as Event } from "./controller/eventhandlers.js";
import { PlayerController as PCont } from "./controller/playercontroller.js";
import { Model } from "./model.js";

var app = document.getElementById('app');

showView();
export function showView(){
    app.innerHTML = /*HTML*/`
    <div>${Model.mainTitle}</div><br>
    <input class='addPlayerInput' value=""></input><button class='addPlayerButton' >Add Player</button>
    <div>Aktivt Hull ${Model.activeHole+1}</div>
    <button class='lastHole'>Forrige Hull</button><button class='nextHole'>Neste Hull</button>
    <ul>${PCont.ListPlayers()}</ul>
    `
    Event.OnClickAddPlayer();
    Event.OnClickNextHole();
    Event.OnClickLastHole();
    Event.OnIncrementPlayerScore()
}
Cont.NewHole();

//${Controller.onClickAddPlayer(this, this.value)}  
//<div>${Model.player[0]!= null ? Model.player[0].GetName(): "No player added"}</div>