const ftoc = function(far) {
  //[°C] = ([°F] − 32) × 5⁄9
  var c= (far-32)*(5/9);
  return parseFloat(c.toFixed(1));
};

const ctof = function(cel) {
  //[°F] = [°C] × 9⁄5 + 32
  var f = (cel * (9/5))+32;
  return parseFloat(f.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
