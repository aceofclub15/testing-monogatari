/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'calm': 'calmmusic.mp3',
	'coffee_music': 'SZA.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'test': 'SZA.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'home': 'home.jpg',
	'cafe': 'cafe.jpg',
	'park': 'park.jpg',
});


// Define the Characters
monogatari.characters ({

	'minion': {
        name: 'Minion',
        color: '#ffd902ff',
		directory: 'Minion',
		sprites: {
			happy: "minionhappy.png",
			drinking: "miniondrinkcoffee.png",
		},
    },

});

monogatari.script ({
	// The game starts here.
	'Start' : 
	[
		'play music calm loop',
		'show background home',
		'The sun is shining, and a gentle breeze rustles through the leaves. It\'s a perfect day for a walk.',
		'show character minion happy',
		'minion What a beautiful day, I wonder where should I go?',
		'show character minion happy at custom-pos with fadeIn',
		{'Choice': {
			'Coffee': {
				'Text': 'Coffee',
				'Do': 'jump Coffee'

			},

			'Park': {
				'Text': 'Park',
				'Do': 'jump Park',

			},
		}},


	],

	'Coffee': [
		'show character minion drinking with fadeIn',
		'show background cafe',
		'minion Coffee sounds great!',
		function() {
			monogatari.storage().happiness_level = 10;
		},
		'jump Lunch',

	],

	



	'Lunch': [
		'minion: My current happiness level is: {{happiness_level}}',
		{'Conditional': {
			'Condition': function(){
				return this.storage('happiness_level') + '';
			},
			'4': 'So healthy',
			'10': 'So energized',
		}},
		'stop music calm with fade 3',
		'end'
	]

});