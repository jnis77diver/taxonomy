var Bee = function() {
  Grub.call(this, 5, 'yellow');
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

Bee.prototype.job = (function() {
 return 'keep on growing';
})();


