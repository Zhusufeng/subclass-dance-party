var invisibleCatDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("invisibleCatDancer").removeClass("dancer");
};

invisibleCatDancer.prototype = Object.create(makeDancer.prototype);
invisibleCatDancer.prototype.constructor = invisibleCatDancer;

invisibleCatDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node.fadeToggle(500);


};