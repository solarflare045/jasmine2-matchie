(function() {
  beforeEach(function() {
    return jasmine.addCustomEqualityTester(function(first, second) {
      if (!(_.isFunction(second) && second.path)) {
        return;
      }
      return matchie(first, second);
    });
  });
}).call(this);
