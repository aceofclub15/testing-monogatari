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

// Define the music used in the game.
monogatari.assets ('music', {
	'calm': 'calmmusic.mp3',
	'coffee_music': 'SZA.mp3',
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
    
	'Coffee': [
		'show character minion drinking with fadeIn',
		'show background cafe',
		'minion Coffee sounds great!',
		function() {
			monogatari.storage().happiness_level = 10;
		},
		'jump Lunch',

	],

});