if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Introducing Telescope",
		author: "Greif", 
		url: "http://sachagreif.com/introducing-telescope/"
	}); 

	Posts.insert({
		title: 'Meteor', 
		author: 'Coleman',
		url: "http://meteor.com"
	});

	Posts.insert({
		title: 'The Meteor Book', 
		author: 'Coleman', 
		url: 'http://themeteorbook.com'
	}); 
}