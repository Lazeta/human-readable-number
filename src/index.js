module.exports = function toReadable(numbers) {
    let array_1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let array_2 = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

    // numbers from 1 to 19
    if (numbers >= 0 && numbers < 20) {
        return array_1[numbers];
    }

    // numbers from 20 to 99
    if (numbers >= 20 && numbers < 100) {
        let b_1 = Math.floor(numbers / 10);
        if (numbers % 10 != 0) {
            return `${array_2[b_1]} ${array_1[numbers % 10]}`;
        }
        else {
            return array_2[b_1];
        }
    } // numbers from 99 to 999
    else if (numbers > 99 && numbers < 1000) {
        let b_1 = Math.floor(numbers / 100);
        let b_2 = Math.floor(numbers % 100 / 10);
        let b_3 = numbers % 10;

        if (b_2 != 0 && b_3 != 0) {
            if (b_2 == 1) {
                return `${array_1[b_1]} ${array_2[0]} ${array_1[[b_3 + 10]]}`;
            }
            else {
                return `${array_1[b_1]} ${array_2[0]} ${array_2[b_2]} ${array_1[b_3]}`;
            };
        };
        if (b_2 == 0 && b_3 != 0) { 
            return `${array_1[b_1]} ${array_2[0]} ${array_1[b_3]}` 
        };
        if (b_2 != 0 && b_3 == 0) { 
            return `${array_1[b_1]} ${array_2[0]} ${array_2[b_2]}` 
        };
        if (b_2 == 0 && b_3 == 0) { 
            return `${array_1[b_1]} ${array_2[0]}` 
        };
    }
}