// 1. Require your node modules

const mongoose = require('mongoose');

const db = mongoose.connection;

// 2. Require your model (and possibly your extra data source);

const Vampire = require('./models/vampire');

// 3. Connect your database and collection name

mongoose.connect('mongodb://localhost:27017/vampire_LAB_GA', {useNewUrlParser: true});

// 4. Open your mongoose connection

db.on('error', (err) => {
	console.log(err, ' this is the error message');
});


db.on('connected', () => {
	console.log('mongoose is connected to mongoDB');
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

const VampireArray = require('./populateVampires');


// Vampire.create(VampireArray, (err, response) => {
// 	if(err) {
// 		console.log(err, ' There was an error');
// 	} else {
// 		console.log(response, ' Success!');
// 	}
// })


// ### Add some new vampire data

const hairColorArray = ['black', 'blue', , 'red'];
const lovesArray = [['blood', 'vampire bats'], 
			  ['flying', 'scaring people', 'base jumping', 'red'],
			  ['poker', 'peach schnaps'],
			  ['history', 'King Edward II']];

const nameArray = ['Francisco Orange', 'Machisimo', 'Colin Powders', 'Barnfield Broker'];
const dobArray = ['September 14, 1745', 'March 30, 1230', 'December 9, 1946', 'February 2, 1900'];
const eye_colorArray = ['green', 'hazel', 'peach', 'gray'];
const locationArray = ['Maputo, Mozambique', 'New Taipei City, Taiwan', 'Minsk, Belarus', 'Ahmedabad, India'];
const genderArray = ['m' , 'f', 'f', 'm'];
const victimsArray = [22, 849, 49, 29291];


// for(i = 0; i < 4; i ++){
// 	Vampire.create({
// 		hair_color: hairColorArray[i],
// 		loves: lovesArray[i],
// 		name: nameArray[i],
// 		dob: dobArray[i],
// 		eye_color: eye_colorArray[i], 
// 		location: locationArray[i],
// 		gender: genderArray[i],
// 		victims: victimsArray[i],
// 	}, (err, response) => {
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			console.log(response);
// 		}
// 	})
// }

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Vampire.find({gender: 'f'}, (err, response) => {
// 	if(err) {
// 		console.log(err)
// 	} else {
// 		console.log('Gender F'response)
// 	}
// });

// Vampire.find(
// 	{victims: 
// 		{$gt: 500}
// 	}
// , (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('GT 500'response);
// 	}
// });




// Vampire.find({
// 	victims: {
// 		$lte: 150
// 	}
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('LTE 150', response);
// 	}
// });

// Vampire.find({
// 	victims: {
// 		$ne: 210234
// 	}
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('!=210234', response);
// 	}
// })


// Vampire.find({
// 	victims: {
// 		$gt: 150,
// 		$lt: 500
// 	}
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('GT 150 && LT 500', response);
// 	}
// })




/////////////////////////////////////////////////
// ### Select by exists or does not exist



// Vampire.find({
// 	title: {$exists: true}
// }, (err, response) => {
// 	if(err) {
// 		console.log('title exists', err)
// 	} else {
// 		console.log(response)
// 	}
// })

// Vampire.find({
// 	victims: {$exists: false}
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("victims don't exist", response);
// 	}
// })


// Vampire.find({
// 	victims: {$exists: false},
// 	title: {$exists: true}
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("have title and no victims", response);
// 	}
// })

// Vampire.find({
// 	victims: {$exists: true, $gt: 1000}
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("have victims and victims GT 1000", response);
// 	}
// })




/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({
// 	$or: [{
// 		location: 'New York, New York, US'
// 	}, {
// 		location: 'New Orleans, Louisiana, US'
// 	}]
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('live in NOLA or NYC', response);
// 	}
// });


// Vampire.find({
// 	$or: [{
// 		loves: 'brooding'
// 	}, {
// 		loves: 'being tragic'
// 	}]
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("loves brooding or being tragic", response);
// 	}
// })

// Vampire.find({
// 	$or: [{
// 		loves: 'marshmallows'
// 	}, {
// 		victims: {$gt: 1000}
// 	}]
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("loves marshmallows or victims GT 1000", response);
// 	}
// })


// Vampire.find({
// 	$or: [{
// 		hair_color: 'red'
// 	}, {
// 		eye_color: 'green'
// 	}]
// }, (err, response) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("have red hair or green eyes", response);
// 	}
// })


/////////////////////////////////////////////////
//### Select objects that match one of several values


Vampire.find({
	$or: [{
		loves: 'frilly shirtsleeves'
	}, {
		loves: 'frilly collars'
	}]
}, (err, response) => {
	if(err) {
		console.log(err);
	} else {
		console.log("loves frilly shirts or collars", response)
	}
})


Vampire.find({
	loves: 'brooding'
}, (err, response) => {
	if(err) {
		console.log(err);
	} else {
		console.log("loves brooding", response);
	}
})



Vampire.find({
	$or: [{
		loves: 'appearing innocent'
	}, {
		loves: 'trickery'
	}, {
		loves: 'lurking in rotting mansions'
	}, {
		loves: 'R&B music'
	}]
}, (err, response) => {
	if(err) {
		console.log(err);
	} else {
		console.log("loves one of many things", response)
	}
})


Vampire.find({
	$and: [{
		loves: 'fancy cloaks'
	}, {
		loves: {$nin: ['top hats', 'virgin blood']}
	}]
}, (err, response) => {
	if(err) {
		console.log(err);
	} else {
		console.log("Loves fancy cloaks but not other things", response)
	}
});

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
