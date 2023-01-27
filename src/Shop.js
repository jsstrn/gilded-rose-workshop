const { AGED_BRIE, BACKSTAGE_PASS, SULFURAS } = require("./constants")
const { AgedBrie } = require("./items")
const { AGED_BRIE_FEATURE } = require("./features")

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        return this.items.map(item => {
            if (AGED_BRIE_FEATURE && item.name == AGED_BRIE) {
                item = new AgedBrie(item.sellIn, item.quality)
                item.update()
            } else {
                this.update(item)
            }

            return item
        })


    }

    update(item) {
        if (
            item.name != AGED_BRIE &&
            item.name != BACKSTAGE_PASS
        ) {
            if (item.quality > 0) {
                if (item.name != SULFURAS) {
                    item.quality = item.quality - 1;
                }
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
                if (
                    item.name == BACKSTAGE_PASS
                ) {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                }
            }
        }
        if (item.name != SULFURAS) {
            item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
            if (item.name != AGED_BRIE) {
                if (
                    item.name != BACKSTAGE_PASS
                ) {
                    if (item.quality > 0) {
                        if (item.name != SULFURAS) {
                            item.quality = item.quality - 1;
                        }
                    }
                } else {
                    item.quality =
                        item.quality - item.quality;
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                }
            }
        }

        return item
    }
}

module.exports = Shop;
