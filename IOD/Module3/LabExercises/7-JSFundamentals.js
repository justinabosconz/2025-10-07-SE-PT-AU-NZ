const basketballGame = {
  score: 0,
  fouls: 0, // c)
  freeThrow() {
    this.score++;
    return this; // a)
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    console.log("Foul count is " + this.fouls);
    return this;
  },
  fullTimeFinalScore() {
    // b)
    console.log(`Final score is ${this.score}`);
    console.log(`Foul count is ${this.foul}`);
    return this;
  },
  foulCount() {
    this.fouls++;
    return this;
  },
};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();
