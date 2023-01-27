const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  it("creates a new shop with no items", () => {
    const shop = new Shop();

    expect(shop.items).toEqual([]);
  });

  describe("Regular item", () => {
    const itemName = "Regular item";

    it.each([
      { sellIn: 2, quality: 10, expectedQuality: 9 },
      { sellIn: 0, quality: 10, expectedQuality: 8 },
      { sellIn: 5, quality: 0, expectedQuality: 0 },
    ])(
      `returns quality of $expectedQuality when sellIn is $sellIn and quality is $quality`,
      ({ sellIn, quality, expectedQuality }) => {
        const shop = new Shop([new Item(itemName, sellIn, quality)]);

        const item = shop.updateQuality()[0];

        expect(item.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Aged Brie", () => {
    const itemName = "Aged Brie";

    it.each([
      { sellIn: 1, quality: 3, expectedQuality: 4 },
      { sellIn: 0, quality: 3, expectedQuality: 5 },
      { sellIn: 0, quality: 50, expectedQuality: 50 },
      { sellIn: 30, quality: 50, expectedQuality: 50 },
    ])(
      `returns quality of $expectedQuality when sellIn is $sellIn and quality is $quality`,
      ({ sellIn, quality, expectedQuality }) => {
        const shop = new Shop([new Item(itemName, sellIn, quality)]);

        const agedBrie = shop.updateQuality()[0];

        expect(agedBrie.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Sulfuras", () => {
    const itemName = "Sulfuras, Hand of Ragnaros";

    it.each([
      { sellIn: 10, quality: 20, expectedSellIn: 10, expectedQuality: 20 },
      { sellIn: 0, quality: 0, expectedSellIn: 0, expectedQuality: 0 },
    ])(
      `returns quality of $expectedQuality when sellIn is $sellIn and quality is $quality`,
      ({ sellIn, quality, expectedSellIn, expectedQuality }) => {
        const shop = new Shop([new Item(itemName, sellIn, quality)]);

        const item = shop.updateQuality()[0];

        expect(item.sellIn).toBe(expectedSellIn);
        expect(item.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Backstage Passes", () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";

    it.each([
      { sellIn: 20, quality: 20, expectedQuality: 21 },
      { sellIn: 10, quality: 20, expectedQuality: 22 },
      { sellIn: 5, quality: 20, expectedQuality: 23 },
      { sellIn: 0, quality: 20, expectedQuality: 0 },
      { sellIn: -1, quality: 20, expectedQuality: 0 },
    ])(
      `returns quality of $expectedQuality when sellIn is $sellIn and quality is $quality`,
      ({ sellIn, quality, expectedQuality }) => {
        const shop = new Shop([new Item(itemName, sellIn, quality)]);

        const item = shop.updateQuality()[0];

        expect(item.quality).toBe(expectedQuality);
      }
    );
  });
});
