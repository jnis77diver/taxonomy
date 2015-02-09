var HoneyMakerBee = function(honeyPot) {
  Bee.call(this);
  this.age = 10;
  this.honeyPot = honeyPot || 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.job = (function() {
  return 'make honey';
})();

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot -= 1;
};




