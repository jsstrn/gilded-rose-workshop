const { SULFURAS } = require("../constants")
const Item = require("../Item")

class Sulfuras extends Item {
    constructor(sellIn, quality) {
        super(SULFURAS, sellIn, quality)
    }

    isExpired() {
        return this.sellIn < 0
    }

    update() {
        return this
    }
}

module.exports = Sulfuras
