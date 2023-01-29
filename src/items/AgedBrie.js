const { AGED_BRIE } = require("../constants")
const Item = require("../Item")
const updateItemQuality = require("./updateItemQuality")

class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super(AGED_BRIE, sellIn, quality)
    this.incrementBy = updateItemQuality(quality).incrementBy
  }

  isExpired() {
    return this.sellIn < 0
  }

  update() {
    this.sellIn = this.sellIn - 1
    this.quality = this.isExpired() ? this.incrementBy(2) : this.incrementBy(1)
    return this
  }
}

module.exports = AgedBrie
