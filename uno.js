unoCalcScore = function (input) {
    if (input[0] === 'n') {
	return +input.substring(1) || 0;
    }

    var sum = 0;
    input.toLowerCase().split('').forEach(function (c) {
	if (+c > 0 && +c <= 9) {
	    sum += +c;
	}
	else if (c === 'a') {
	    sum += 20;
	}
	else if (c === 'w') {
	    sum += 40;
	}
    });
    
    return sum;
};
