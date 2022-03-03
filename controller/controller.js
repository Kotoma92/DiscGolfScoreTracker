import { Model } from "../model.js";

export const Controller = {
    
   // General stuff
   NewHole(){
      Model.holes.push(Model.holes.length);
      Model.player.forEach(element => {
        element.AddOutOfBounds(null)
        element.AddScore(0)
      });
   },
}

