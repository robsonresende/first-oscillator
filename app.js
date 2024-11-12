

function myfunction() {

// create web audio api context
const ctx = new AudioContext();

// create Oscillator node
const osc = ctx.createOscillator();

osc.type = "sine";

osc.frequency.setValueAtTime(440, ctx.currentTime); // Value in hertz
osc.connect(ctx.destination);
osc.start();

setTimeout(() => {
	osc.stop();
}, 1000);

};

