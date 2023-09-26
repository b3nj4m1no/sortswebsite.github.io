var barsContainer;
var bars;
var n;

var algorithm;
var is_sorting;

var speed = 30;

function init() {
	barsContainer = document.getElementById ("bars-container");
	algorithm = document.getElementById ("algorithms");
	bars = [];
	n = 100;

	for (let i = 0; i < n; i++) {
		let bar = new Bar (i + 1, i);
		bars.push (bar);
		barsContainer.appendChild (bar.el);
	}

	is_sorting = false;
}
init();

function shuffle () {
	if (!is_sorting) {
		for (let i = 0; i < n; i++) {
			swap (i, Math.floor (Math.random() * n), true);
		}
	}
}

async function sort () {
	if (!is_sorting && algorithm.value != "none") {
		is_sorting = true;
		await eval (algorithm.value + "()");
		is_sorting = false;
	}
}

async function swap (ind1, ind2, shuffle = false) {
	if (ind1 != ind2) {
		if (!shuffle) {
			await Promise.all ([
				bars[ind1].move (ind2),
				bars[ind2].move (ind1)
			]);
		} else {
			bars[ind1].move (ind2, true);
			bars[ind2].move (ind1, true);
		}
		let c = bars[ind1].val;
		bars[ind1].val = bars[ind2].val;
		bars[ind2].val = c;

		c = bars[ind1].el;
		bars[ind1].el = bars[ind2].el;
		bars[ind2].el = c;
	}
}
async function insert (ind, value) {
	if (bars[ind].val != value)
		await bars[ind].insert (value);
}

function reverse () {
	barsContainer.innerHTML = "";
	bars = [];

	for (let i = 0; i < n; i++) {
		let bar = new Bar (n - i, i);
		bars.push (bar);
		barsContainer.appendChild (bar.el);
	}
}