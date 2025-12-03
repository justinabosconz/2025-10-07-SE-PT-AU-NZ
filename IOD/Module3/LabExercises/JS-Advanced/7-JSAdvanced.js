class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

// a)

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

console.log("\nPrecision Clock (500ms updates):");
const preciseClock = new PrecisionClock("precise clock:", 500);
preciseClock.start();

// b)

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  start() {
    this.displayWithAlarm = this.displayWithAlarm.bind(this);
    this.displayWithAlarm();
    this.timer = setInterval(this.displayWithAlarm, 1000);
  }

  displayWithAlarm() {
    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;

    const currentTimeFormating = `${hours}:${mins}`;

    super.display();

    if (currentTimeFormating === this.wakeupTime) {
      console.log(`Alarm! It's ${this.wakeupTime}!`);
      this.stop();
    }
  }
}
