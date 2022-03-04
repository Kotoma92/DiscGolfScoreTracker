import { Model } from "../model.js";
import { showView } from "../view.js";
import { CreatePlayer as newPlayer } from "./playercontroller.js";

export const Controller = {
    
   //General stuff
   NewHole(){
      Model.holes.push(Model.holes.length);
      Model.player.forEach(player => {
         player.AddOutOfBounds(null);
         player.AddScore(0);
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
      Model.playerList = "";
      for (let i = 0; i < Model.player.length; i++) {
          Model.playerList += `
              <div class="players">
                  <div class="left">${i+1}. ${Model.player[i].GetName()}</div>
                  <div class="right">Hull Score: <input class="Player${i+1}" min="0" type="number" value="${Model.player[i].GetHoleScore(Model.activeHole)}">
                  Total Score: ${Model.player[i].GetTotalScore()}</div>
              </div>
         `;      
      }
      return Model.playerList;
   },
}

