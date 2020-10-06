const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let deep = 1;
        arr.forEach((el) => {
            let currentDeep = 1;
            if (Array.isArray(el)) {
                currentDeep += this.calculateDepth(el);
                if (currentDeep > deep) {
                    deep = currentDeep;
                }
            }
        });
        return deep;
    }
};