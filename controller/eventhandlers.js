import { Model } from "../model.js";
import { Controller as Cont } from "./controller.js";
import { showView } from "../view.js";

export const Eventhandlers = {
  OnClickAddPlayer() {
    let input = document.querySelector(".addPlayerInput");
    let button = document.querySelector(".addPlayerButton");
    button.addEventListener("click", () => {
      Cont.CreatePlayer(input.value);
    });
  },

  OnClickNextHole() {
    let button = document.querySelector(".nextHole");
    button.addEventListener("click", () => {
      if (Model.holes[Model.activeHole + 1] == null) {
        Cont.NewHole();
      }
      Model.activeHole = Model.activeHole + 1;
      showView();
    });
  },

  OnClickLastHole() {
    let button = document.querySelector(".lastHole");
    button.addEventListener("click", () => {
      if (Model.holes[Model.activeHole - 1] != null) {
        Model.activeHole = Model.activeHole - 1;
      }
      showView();
    });
  },

  OnClickSetActivePlayer() {
    let playerDivs = document.querySelectorAll('[class^="ListedPlayer"]');
    for (let i = 0; i < playerDivs.length; i++) {
      const player = playerDivs[i];
      player.addEventListener("click", (e) => {
        const playerNum = parseInt(
          e.target.classList[0].replace("ListedPlayer", "")
        );
        Model.activePlayer = playerNum - 1;
        showView();
      });
    }
  },

  OnClickKeyBoard() {
    let keys = document.querySelectorAll('[id^="key"]');
    for (let i = 0; i < keys.length; i++) {
      const Element = keys[i];
      Element.addEventListener("click", (e) => {
        const ConcatParseNum = Number(
          Model.player[Model.activePlayer].GetHoleScore(Model.activeHole) +
            e.target.value
        );
        if (ConcatParseNum !== NaN) {
          if (ConcatParseNum < 20) {
            Model.player[Model.activePlayer].ChangeScore(
              Model.activeHole,
              ConcatParseNum
            );
          } else {
            Model.player[Model.activePlayer].ChangeScore(Model.activeHole, 0);
          }
        }
        showView();
      });
    }
  },

  OnChangePlayerScore() {
    let inputs = document.querySelectorAll('[class^="PlayerInput"]');
    for (let i = 0; i < inputs.length; i++) {
      const Element = inputs[i];
      Element.value = Model.player[i].GetHoleScore(Model.activeHole);
      Element.addEventListener("change", (e) => {
        let parseNumber = Number(e.target.value);
        if (parseNumber !== NaN)
          Model.player[i].ChangeScore(Model.activeHole, parseNumber);
        showView();
      });
    }
  },
  /*
        [id^='someId'] will match all ids starting with someId.
        [id$='someId'] will match all ids ending with someId.
        [id*='someId'] will match all ids containing someId.
  */

  OnClickHolePar() {
    let divHolePar = document.querySelector(".holePar");
    divHolePar.addEventListener("click", () => {
      divHolePar.innerHTML = "Par: <input type='number' class='holeParInput'>";
      let InputHolePar = document.querySelector(".holeParInput");
      InputHolePar.focus();
      InputHolePar.addEventListener("change", (e) => {
        Model.holePar[Model.activeHole] = e.target.value;
        showView();
      });
    });
  },

  OnClickConsoleLogButton() {
    let clogButton = document.querySelector(".cLog");
    clogButton.addEventListener("click", () => {
      console.log(Model.activePlayer);
      console.log(Model.player);
      console.log(Model.player[Model.activePlayer]);
      console.log(Model);
    });
  },
};
