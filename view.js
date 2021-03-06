import { Controller as Cont } from "./controller/controller.js";
import { Eventhandlers as Event } from "./controller/eventhandlers.js";
import { Model } from "./model.js";

//Initialisering
const app = document.getElementById("app");
Cont.NewHole();
showView();

//View Funksjoner
export function showView() {
  app.innerHTML = /*HTML*/ `
    <div class="wrap">
        <div class="center">${Model.mainTitle}</div><br>
        <input class="input addPlayerInput" value="" placeholder="Player Name"></input>
        <button class="buttons addPlayerButton">Add Player</button>
    </div>

    <div class="holes">
        <button class="buttons lastHole">Forrige Hull</button>
        <div>Aktivt Hull: ${Model.activeHole + 1}</div>
        <div class="holePar">Par: ${
          Model.holePar[Model.activeHole] != null
            ? Model.holePar[Model.activeHole]
            : ""
        } </div>
        <button class="buttons nextHole">Neste Hull</button>
    </div>

    ${Cont.ListPlayers()}
    <div class="keyboard-container">
        <div class="keyboard">${Cont.MakeOnScreenKeyboard()}</div>
    </div>
    `;
  Event.OnClickAddPlayer();
  Event.OnClickNextHole();
  Event.OnClickLastHole();
  Event.OnClickSetActivePlayer();
  Event.OnClickNumPad();
  Event.OnChangePlayerScore();
  Event.OnClickHolePar();
}

// HUSK Å BYGG FUNKSJONALITET OG VIEW TING FOR "hull Par"
