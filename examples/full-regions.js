var keyboard = require('../')();

keyboard.color('left', {
	color: 'red',
	intensity: 'med'
});
keyboard.color('middle', {
	color: 'red',
	intensity: 'med'
});
keyboard.color('right', {
	color: 'red',
	intensity: 'med'
});
keyboard.color('logo', {
	color: 'blue',
	intensity: 'med'
});
keyboard.color('trackpad', {
	color: 'blue',
	intensity: 'med'
});
keyboard.color('front-left-panel', {
	color: 'red',
	intensity: 'med'
});
keyboard.color('front-right-panel', {
	color: 'red',
	intensity: 'med'
});

//keyboard.blink(750);
//keyboard.blink(['left','right'], 750);

//TODO: breathe is not properly working, will need a fix on setMode.js directly
//keyboard.mode('breathe', 'green', 'red', 'yellow');
//TODO: wave is not properly working, will need a fix on setMode.js directly
//keyboard.mode('wave', 'blue');
