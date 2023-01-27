const { AGED_BRIE } = require("../constants")
const Item = require("../Item")
const updateItemQuality = require("./updateItemQuality")

class AgedBrie extends Item {
    constructor(sellIn, quality) {
        super(AGED_BRIE, sellIn, quality)
        this.incrementBy = updateItemQuality(quality).incrementBy
    }

    update() {
        this.sellIn = this.sellIn - 1

        if (this.sellIn < 0) {
            this.quality = this.incrementBy(2)
        } else {
            this.quality = this.incrementBy(1)
        }
    }
}

module.exports = AgedBrie
