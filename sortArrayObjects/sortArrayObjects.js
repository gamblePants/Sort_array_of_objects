// create array of objects
var animals = [
	{
		type: "Dog",
		legs: 4
	},
	{
		type: "Mouse",
		legs: 4
	},
	{
		type: "Goldfish",
		legs: 0
	},
	{
		type: "Centipede",
		legs: 100
	},
	{
		type: "Huntsman",
		legs: 8
	},
];		

// creates string displaying contents of array
function makeString(array)
{
	var str = "";			
	var a;
	for (a in array)
	{
		str += array[a].type + " = " + array[a].legs + " legs, ";
	}
	return str;
}

// show initial array
alert(makeString(animals));

// create 2 more animals and add to array
var fly = { type: "Fly", legs: 6 };
var human = { type: "Human", legs: 2};

animals.push(fly);
animals.push(human);

// sort function - sorts array mathematically by number of legs
const sortedByLegs = animals.sort(function (a, b){
	return a.legs - b.legs;
});

// display
alert(makeString(sortedByLegs));

// sort function - sorts array alphabetically by animal type
const sortedByName = animals.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0));

// display
alert(makeString(sortedByName));