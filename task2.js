///task#2
///заменить var на let

function createCats() {
	let cats = [];
	let i = 0;
	while (i < 10) {
			let cat = function() {
					console.log(`My index is ${i}`);
			};
			cats.push(cat);
			i++;
	}
	return cats;
}

let animals = createCats();
animals[0]();
animals[5]();