function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando números pares por 0...`);
			array[i] = 0;
		} 
	}
	console.log(array);
}

substituiNumerosPares([2, 6, 3, 5]);