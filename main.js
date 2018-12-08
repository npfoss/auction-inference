
var utilities = [5, 3, 6];
var bottle3 = [1150, true, false];
var bottle4 = [1200, false, true];

// utility of a bottle (list of attributes) with the given utilities (list of weights)
var util_f = function(bottle, utils) {
  // utility from volume
  var v_u = (bottle[0] - 700.0)/(1500-700) * (utils[0] - 1) + 1;
  // utility from opacity
  var o_u = bottle[1] ? utils[1] : 1;
  // utility from having water in it already
  var w_u = bottle[2] ? utils[2] : 1;
  return v_u + o_u + w_u;
};

// uses util_f to find the utility of a list of bottles
var util_many = function(bottles, utils){
  // note: [[1,2], [2,], [3,4]].reduce((a, b) => a + b[0], 0) -> 6
  var sum = bottles.reduce((s, b) => s + util_f(b, utils), 0);
  console.log('reduce_many: ', bottles, utils, sum);
  return sum;
}

// takes a list of bottles and a utility function with some number of 0s.
//  tests all values 1-7 for the 0s and prints them
var test_params = function(bottles, util) {
  var ranges = [
    (util[0] < 1 ? [1,2,3,4,5,6,7] : [util[0],]),
    (util[1] < 1 ? [1,2,3,4,5,6,7] : [util[2],]),
    (util[2] < 1 ? [1,2,3,4,5,6,7] : [util[2],]),
  ]
  console.log(ranges)
  ranges[0].forEach(function(u0){
    ranges[1].forEach(function(u1){
      ranges[2].forEach(function(u2){
        console.log([u0,u1,u2], " : ", util_many(bottles, [u0,u1,u2]));
      })
    })
  })
};

console.log(util_f(bottle3, utilities))

test_params([bottle3,bottle4], [5,4,0])
