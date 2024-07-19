///task#1
///задать setInterval для задержки

function addDelay() {
	return new Promise(resolve => setTimeout(resolve, 300));
}

async function logWithDelay(text) {
	await addDelay();
	console.log(text);
}

async function logArrayInfo(array) {
	array.forEach(async (item) => {
			await logWithDelay(item);
	});

	setTimeout(() => {
		console.log('Done!')
	}
, 1000)

}

logArrayInfo([1, 2, 3]);