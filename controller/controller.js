import { Model } from "../model.js";
import { showView } from "../view.js";
import { CreatePlayer as newPlayer } from "./playercontroller.js";

export const Controller = {
    
   //General stuff
   NewHole(){
      Model.holes.push(Model.holes.length);
      Model.player.forEach(player => {
         player.AddOutOfBounds(null);
         //player.AddScore(0);
      });
   },

   CreatePlayer(name){
      if(name){
         Model.player.push(newPlayer(name));
         console.log(Model.player);
         showView();
      }
   },
  
   ListPlayers(){
      Model.playerList = '';
      for (let i = 0; i < Model.player.length; i++) {
          Model.playerList += `
          <div class="players">
               <div>${i+1}. ${Model.player[i].GetName()}</div>
               <div>Hull Score: <input class="Player${i+1}" min="0" type="number" placeholder="0" value="${Model.player[i].GetHoleScore(Model.activeHole)}">
               Total Score: ${Model.player[i].GetTotalScore()}</div>
            </div>
         `;
      }
      return Model.playerList;
   },

   // Keyboard(){
   //    Model.keyboard.buttons = '';
   //    // loop up to X numbers of keys on keyboard
   //    for (let i = 0; i < 9; i++) {
   //       let first = i % 3 == 0 ? 'class="first"' : '';
   //       Model.keyboard.buttons += /*HTML*/`
   //          <div ${first}>
   //             <button>${Model.keyboard.layout[i]}</button>
   //          </div>
   //       `;
   //    }
   //    return Model.keyboard.buttons;
   // }
}
