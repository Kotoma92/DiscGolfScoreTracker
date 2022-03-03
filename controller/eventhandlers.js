import { Model } from "../model.js";
import { Controller as Cont } from "./controller.js";
import { showView } from "../view.js";

export const Eventhandlers = {
    OnClickAddPlayer(){
        let input = document.querySelector(".addPlayerInput");
        let button = document.querySelector(".addPlayerButton");
        button.addEventListener("click", () =>{Cont.CreatePlayer(input.value)});
     },

     OnClickNextHole(){
        let button = document.querySelector(".nextHole");
        button.addEventListener("click", () =>{
          if(Model.holes[Model.activeHole+1]==null){
            Cont.NewHole()
          }; 
          Model.activeHole = Model.activeHole +1
          showView()
        });
     },
     
     OnClickLastHole(){
        let button = document.querySelector(".lastHole");
        button.addEventListener("click", () =>{
          if(Model.holes[Model.activeHole-1]!=null){
           Model.activeHole = Model.activeHole -1
          }
          showView()
        });
     },

     OnIncrementPlayerScore(){
         let inputs = document.querySelectorAll('[class^="Player"]')
         for (let i = 0; i < inputs.length; i++) {
            const Element = inputs[i]
            Element.value = Model.player[i].GetHoleScore(Model.activeHole);
            Element.addEventListener("change", (e) =>{
              var parseNumber = Number(e.target.value);
              if (parseNumber !== NaN)
                Model.player[i].ChangeScore(Model.activeHole, parseNumber);
              showView();
            })
         }
       },
      
      /*
        [id^='someId'] will match all ids starting with someId.
        [id$='someId'] will match all ids ending with someId.
        [id*='someId'] will match all ids containing someId.
     */
}