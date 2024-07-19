///task#2
///использовать метод map

function createCats() {
	let cats = Array.from({ length: 10 }).map((_, i) => {
		return function () {
			console.log(`My index is ${i}`);
		};
	});
	return cats;
}

let animals = createCats();
animals[0]();
animals[5]();

