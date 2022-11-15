export function getPercents(percent, number) {
    let result;
    if(isNaN(percent) || isNaN(number)) {
        result = 'данные не число';
    } else {
        result = percent * number / 100;
    }
    return result;
}

getPercents(120, 300)