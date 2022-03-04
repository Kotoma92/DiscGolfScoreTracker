import { Model } from "../model.js";
import { showView } from "../view.js";
import { CreatePlayer as newPlayer } from "./playercontroller.js";

export const Controller = {
  //General stuff
  NewHole() {
    Model.holes.push(Model.holes.length);
    Model.player.forEach((player) => {
      player.AddOutOfBounds(null);
      //player.AddScore(0);
    });
  },

  CreatePlayer(name) {
    if (name) {
      Model.player.push(newPlayer(name));
      console.log(Model.player);
      showView();
    }
  },

  ListPlayers() {
    Model.playerList = "";
    for (let i = 0; i < Model.player.length; i++) {
      Model.playerList += `
        <div class="ListedPlayer${i + 1}" id='${
        Model.activePlayer == i ? "activePlayer" : ""
      }'>
            <div class="PNumName">${i + 1}. ${Model.player[i].GetName()}</div>
            <div class="PScore">
              Hull Score: 
              <input 
                class="PlayerInput${i + 1}"
                min="0"
                type="number"
                placeholder="0"
                value="${Model.player[i].GetHoleScore(Model.activeHole)}"
              >
              Total Score: ${Model.player[i].GetTotalScore()}
            </div>
        </div>
      `;
    }
    return Model.playerList;
  },
  MakeOnScreenKeyboard() {
    Model.keyBoard = "";
    for (let i = 0; i < 10; i++) {
      Model.keyBoard += `<div id='key${i}'><button value='${i}'>${i}</button></div>`;
    }
    return Model.keyBoard;
  },
};
