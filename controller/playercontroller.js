// NewPlayer deklarasjon blir private, men playerobjektet ertilgjengelig via player.GetValues
const NewPlayer = (name) => {
  return {
    name,
    holeScore: [],
    holeparscore: [],
    outOfBounds: [],
    totalScore: 0,
  };
};

export const CreatePlayer = (name) => {
  const player = NewPlayer(name);
  return {
    GetValues() {
      return player;
    },

    GetName() {
      return player.name;
    },

    GetHoleScore(hole) {
      const score = player.holeScore[hole];
      if (typeof score === "undefined") return "";
      return score;
    },

    //Ikke i bruk enda
    GetOutOfBounds() {
      return player.outOfBounds;
    },

    GetTotalScore() {
      let result = 0;
      player.holeScore.forEach((element) => {
        result = result + element;
      });
      player.totalScore = result;
      return player.totalScore;
    },

    GetParScore(hole, holePar) {
      const playerScore = player.holeScore[hole];

      if (playerScore == null) {
        return (player.holeparscore[hole] = 0);
      } else if (holePar == null) {
        player.holeparscore[hole] = playerScore;
      } else {
        if (holePar > playerScore) {
          player.holeparscore[hole] = Math.abs(holePar - playerScore) * -1;
        } else {
          player.holeparscore[hole] = Math.abs(holePar - playerScore);
        }
      }
      return player.holeparscore[hole];
    },

    AddScore(value) {
      player.holeScore.push(value);
    },

    //Ikke i bruk enda
    AddOutOfBounds(value) {
      player.outOfBounds.push(value);
    },

    ChangeScore(holeNr, newscore) {
      player.holeScore[holeNr] = newscore;
    },

    //Ikke i bruk enda
    ChangeOutOfBounds(holeNr, outOfBounds) {
      player.outOfBounds[holeNr] = outOfBounds;
    },

    //Disse to skal brukes for lokal storage etterhvert
    Serialize() {
      return JSON.stringify(player);
    },

    Deserialize(values) {
      player = JSON.parse(values);
    },
  };
};
