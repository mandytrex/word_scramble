describe("Die", function() {
  var die;

  beforeEach(function() {
    die = new Die();
  });

  it("should start as an empty array", function() {
    expect(die.dice).toBe(null);
  });

 

  describe("#setState", function() {
    beforeEach(function() {
      die.setState();
    });

    it("should create an array of 16 dice", function() {
      expect(die.dice.length).toBe(16);
    });

  });

});