import { Model } from "../model.js";
import { showView } from "../view.js";
import {CreatePlayer as newPlayer} from "../player.js";

export const PlayerController = {
    CreatePlayer(name){
        if(name){
           Model.player.push(newPlayer(name));
           console.log(Model.player)
           showView();
        }  
     },
    
     ListPlayers(){
        Model.playerList = "";
        for (let i = 0; i < Model.player.length; i++) {
            Model.playerList += `
                <li class="players">
                    <input class="Player${i+1}" type="number" >
                    Navn: ${Model.player[i].GetName()}
                    Hull Score: ${Model.player[i].GetHoleScore(Model.activeHole)}
                    Total Score: ${Model.player[i].TotalScore()}
                </li>
           `;      
        }
        return Model.playerList;
     },
}