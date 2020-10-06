const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value = "") {
        this.chain.push("( " + value + " )");
        return this;
    },
    removeLink(position) {
        if (this.chain[position - 1]) {
            this.chain.splice((position - 1), 1);
        } else {
            this.chain.length = 0;
            throw new Error;
        }
        return this;
    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        let res = this.chain.join("~~");
        this.chain.length = 0;
        return res;
    }
};

module.exports = chainMaker;