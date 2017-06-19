let isOn = false;
const interval = 50; // 500 milliseconds = 0.5 seconds
const BTN =  NodeMCU.D2;
const LED = NodeMCU.D4;
const options = {
  repeat: true,
  edge: 'rising'
};

/**
 * The `main` function gets executed when the board is initialized.
 * Development: npm run dev
 * Production: npm run deploy
 */
function main() {
  pinMode(BTN, 'input_pullup');
  setWatch(() => {
    isOn = !isOn;
  }, BTN, options);
  setInterval(() => {
    digitalWrite(D2, isOn); // D2 is the blue LED on the ESP8266 boards
  }, interval);
}

// isOn = !isOn; // Flips the state on or off
