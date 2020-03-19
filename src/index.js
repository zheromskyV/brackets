module.exports = function check(str, bracketsConfig) {
	if (str.length % 2) {
		return false;
	}

	let brOpen = [], brClose = [];
	bracketsConfig.forEach(config => {
		config.forEach((element, index) => {
			if (index % 2 === 0) {
				brOpen.push(element);
			} else {
				brClose.push(element);
			}
		});
	});

	for (let i = 0; i < bracketsConfig.length; i++) {
        while (true) {
			let pair = brOpen[i] + brClose[i];
            if (str.includes(pair)) {
                str = str.replace(pair, "");
                i = 0;
            } else { 
				break; 
			}
        }
    }

    return str.length === 0;
}
