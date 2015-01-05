describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });


  describe("board", function() {

    it("should start of empty", function() {
      expect(board.tiles.length).toBe(0);
    });

  });


  describe("#createBoard", function() {

    it("should fill the boards tiles with the 16 dice", function() {
      board.tiles = [];
      expect(board.tiles.length).toBe(0);
      board.createBoard();
      expect(board.tiles.length).toBe(16);
    });
  });


});
