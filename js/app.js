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

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	//generate a random number for the enemy speed
	let randomSpeed = Math.floor(Math.random() * 400 + 75);

	//multiple the movemnent by the dt parameter
	this.x += randomSpeed * dt;

	if (this.x > 510) {
		//generate a random number for the position of the
		//enemies after they leave the screen
		let enemyPosition = Math.floor(Math.random() * -400 + -100);
		this.x = enemyPosition;
	}
	//reset the player if it collides with the enemy
	if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
		player.reset();
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player class
let Player = function(x, y) {
	this.sprite = 'images/char-boy.png';
	this.x = x;
	this.y = y;
};

Player.prototype.update = function() {
	if (this.y == -25) {
		console.log(`you've won`);
		player.reset();
	}
};

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
};

Player.prototype.reset = function() {
	this.x = 200;
	this.y = 375;
};

// Now instantiate your objects.
//enemy 1 and 2 top row, 3 and 4, middle, 5 lower
let enemy1 = new Enemy(Math.floor(Math.random() * -250 + -25), 55);
let enemy2 = new Enemy(Math.floor(Math.random() * -500 + -355), 55);
let enemy3 = new Enemy(Math.floor(Math.random() * -400 + -355), 140);
let enemy4 = new Enemy(Math.floor(Math.random() * -450 + -300), 140);
let enemy5 = new Enemy(Math.floor(Math.random() * -505 + -75), 225);
let enemy6 = new Enemy(Math.floor(Math.random() * -150 + -75), 225);

console.log(enemy1);
console.log(enemy2);
console.log(enemy3);
console.log(enemy4);

// Place all enemy objects in an array called allEnemies
let allEnemies = [ enemy1, enemy2, enemy3, enemy4, enemy5, enemy6 ];

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
