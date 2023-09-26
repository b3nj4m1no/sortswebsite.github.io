class Bar {
	constructor (val, ind) {
		this.val = val;
		this.height = Math.floor (this.val * 500 / n);
		this.width = Math.floor (1000 / n) - 1;
		this.left = ind * (this.width + 1) + 1;
		this.top = 501 - this.height;

		this.el = document.createElement ("div");
		this.el.classList = "bar";
		this.el.setAttribute ("style", 
			"width: " + this.width + "px; " + 
			"height: " + this.height + "px; " +
			"left: " + this.left + "px; " + 
			"top: " + this.top + "px;"
		);
	}

	async move (to, shuffle = false) {
		this.el.style.left = (to * (this.width + 1) + 1) + "px";
		if (!shuffle) {
			this.el.style.zIndex = 2;
			this.el.style.backgroundColor = "rgb(255, 0, 0)";
			await new Promise (r => setTimeout (r, speed));
			this.el.style.zIndex = 1;
			this.el.style.backgroundColor = "rgb(255, 255, 255)";
		}
	}

	async insert (value) {
		this.val = value;
		this.height = Math.floor (this.val * 500 / n);
		
		this.el.style.zIndex = 2;
		this.el.style.backgroundColor = "rgb(255, 0, 0)";
		this.el.style.height = this.height + "px";
		this.el.style.top = (501 - this.height) + "px";
		await new Promise (r => setTimeout (r, speed));
		this.el.style.zIndex = 1;
		this.el.style.backgroundColor = "rgb(255, 255, 255)";
	}
}