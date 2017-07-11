var makeAngryCatDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeAngryCatDancer.prototype = Object.create(makeDancer.prototype);
makeAngryCatDancer.prototype.constructor = makeAngryCatDancer;

makeAngryCatDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node.slideToggle();


};