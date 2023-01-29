function updateItemQuality(quality) {
  MAX_QUALITY = 50

  return {
    incrementBy(value) {
      quality += value
      if (quality > MAX_QUALITY) {
        quality = MAX_QUALITY
      }

      return quality
    },
  }
}

module.exports = updateItemQuality
