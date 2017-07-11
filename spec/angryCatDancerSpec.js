describe('angryCatDancer', function() {

  var angryCatDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    angryCatDancer = new makeAngryCatDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(angryCatDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide toggle', function() {
    sinon.spy(angryCatDancer.$node, 'slideToggle');
    angryCatDancer.step();
    expect(angryCatDancer.$node.slideToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(angryCatDancer, 'step');
      expect(angryCatDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      console.log('before equal to 1');
      expect(angryCatDancer.step.callCount).to.be.equal(1);
      console.log('after equal to 1');
      clock.tick(timeBetweenSteps);
      expect(angryCatDancer.step.callCount).to.be.equal(2);
    });
  });
});