class Logger {
  constructor() {
    this.id = Math.floor(Math.random() * 1_000_000);
  }

  log = (value) => {
    console.log(`[Calculator: ${this.id}]:${value}`);
  };
}

module.exports = Logger;
