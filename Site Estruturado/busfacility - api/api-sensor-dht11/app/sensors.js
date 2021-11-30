function tcrt5000(min, max) {
    min = typeof min == "undefined" ? 18 : min;
    max = typeof max == "undefined" ? 25 : max;
  
    let random = Math.random() * (max - min) + min;
  
    return random;
}
  module.exports = { tcrt5000 };
  