const NewPlayer = (name) => {
    return {
        name,
        holeScore : [],
        outOfBounds : [],
        totalScore : 0
    }
};

export const CreatePlayer = (name) => { 
    const player = NewPlayer(name);
    return  { 

        GetName(){
            return player.name;
        },

        GetValues () {
            return player;
        },

        Serialize(){
            return JSON.stringify(player);
        },
        
        Deserialize (values) {
            player = JSON.parse(values);
        },

        AddScore(score){
            player.holeScore.push(score)
        },

        GetHoleScore(hole){
            const score = player.holeScore[hole];
            if(typeof score === 'undefined')
                return 0
            return score;
        },

        ChangeScore(holeNr, newscore){
            player.holeScore[holeNr] = newscore
        },

        AddOutOfBounds(score){
            player.outOfBounds.push(score)  
        },
        
        ChangeOutOfBounds(holeNr, outOfBounds){
            player.outOfBounds[holeNr] = outOfBounds
        },

        TotalScore(){
            let result = 0;
            player.holeScore.forEach(element => {
                result = result + element;
            });
            player.totalScore = result;
            return player.totalScore;
        }
    }
}

