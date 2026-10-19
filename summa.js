// Summerar alla tal i en lista.
function sumlist(list) {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		sum = sum + list[i];
	}
	return sum;
}
