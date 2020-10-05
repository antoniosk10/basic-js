const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let subStr = "";
    let resArr = [],
        subArr = [];
    let { repeatTimes, separator = "+", addition = "", additionRepeatTimes, additionSeparator = "|" } = options;
    let i = 0,
        j = 0;

    do {
        subArr.push(addition + "");
        i++;
    }
    while (i < additionRepeatTimes);


    subStr = subArr.join(additionSeparator);

    do {
        resArr.push(str + subStr);
        j++;
    }
    while (j < repeatTimes);


    return resArr.join(separator);
};