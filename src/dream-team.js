const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = "";
    if (Array.isArray(members)) {

        members.forEach((el) => {
            if (typeof el === "string") {
                result += el.trim()[0].toUpperCase();
            }
        });

        return result.split("").sort().join("");
    }
    return false;

};