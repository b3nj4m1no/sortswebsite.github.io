async function gnome () {
	let pos = 1;

	while (pos < n) {
		if (pos == 0 || bars[pos].val >= bars[pos - 1].val) {
			pos++;
		} else {
			await swap (pos, pos - 1);
			pos--;
		}
	}
}