// Enemies our player must avoid
let Enemy = function(x, y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
};

let enemyPosInit = Math.floor(Math.random() * -300 + -55);
console.log(enemyPosInit);

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.

	//generate a random number between 50 and 300 for the enemy speed
	let ranNum = Math.floor(Math.random() * 300 + 50);

	this.x += ranNum * dt;
	if (this.x > 650) {
		//generate a random number between -100 and -300 for the position of the
		//enemies after they leave the screen
		let enemyPosition = Math.floor(Math.random() * -300 + -100);
		this.x = enemyPosition;
		//console.log(this.x);
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
	this.sprite = 'images/char-boy.png';
	this.x = x;
	this.y = y;
};

Player.prototype.update = function() {};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
	if (direction == 'left' && this.x > 0) {
		this.x -= 50;
	}
	if (direction == 'right' && this.x < 400) {
		this.x += 50;
	}
	if (direction == 'up' && this.y > -25) {
		this.y -= 50;
	}
	if (direction == 'down' && this.y < 425) {
		this.y += 50;
	}
	console.log(this.y);
};

// Now instantiate your objects.
let enemy1 = new Enemy(enemyPosInit, 55);
let enemy2 = new Enemy(enemyPosInit, 140);
let enemy3 = new Enemy(enemyPosInit, 225);
let enemy4 = new Enemy(enemyPosInit - 200, 140);

console.log(enemy1);
console.log(enemy2);
console.log(enemy3);
console.log(enemy4);

// Place all enemy objects in an array called allEnemies
let allEnemies = [ enemy1, enemy2, enemy3, enemy4 ];

// Place the player object in a variable called player
let player = new Player(200, 375);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
