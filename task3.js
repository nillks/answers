const tree = {
	value: 3,
	children: [
		{
			value: 1,
			children: [],
		},
		{
			value: 4,
			children: [],
		},
		{
			value: 3,
			children: [
				{
					value: 8,
					children: [
						{
							value: 2,
							children: [],
						},
						{
							value: 5,
							children: [],
						},
					],
				},
				{
					value: 0,
					children: [],
				},
			],
		},
	],
};

function collectValues(node) {
	let values = [node.value];
	node.children.forEach(child => {
		values = values.concat(collectValues(child));
	});
	return values;
}

const valuesArray = collectValues(tree);

const sumTree = valuesArray
	.filter(i => i % 2 === 0)
	.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);

console.log(sumTree);
