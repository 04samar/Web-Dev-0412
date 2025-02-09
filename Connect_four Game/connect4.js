class Player {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Game {
    constructor(height = 6, width = 7, p1Color, p2Color) {
      this.height = height;
      this.width = width;
      this.board = [];
      this.players = [new Player(p1Color), new Player(p2Color)];
      this.currPlayer = this.players[0];
      this.gameOver = false;
      this.makeBoard();
      this.makeHtmlBoard();
    }
  
    makeBoard() {
      for (let y = 0; y < this.height; y++) {
        this.board.push(Array.from({ length: this.width }));
      }
    }
  
    makeHtmlBoard() {
      // Clear any existing board
      const board = document.getElementById('board');
      board.innerHTML = '';
  
      // Create the top row for clicking to place pieces
      const top = document.createElement('tr');
      top.setAttribute('id', 'column-top');
      top.addEventListener('click', this.handleClick.bind(this));
  
      for (let x = 0; x < this.width; x++) {
        const headCell = document.createElement('td');
        headCell.setAttribute('id', x);
        top.append(headCell);
      }
  
      board.append(top);
  
      // Create the main part of the board
      for (let y = 0; y < this.height; y++) {
        const row = document.createElement('tr');
  
        for (let x = 0; x < this.width; x++) {
          const cell = document.createElement('td');
          cell.setAttribute('id', `${y}-${x}`);
          row.append(cell);
        }
  
        board.append(row);
      }
    }
  
    handleClick(evt) {
      if (this.gameOver) return;
  
      const x = +evt.target.id;
      const y = this.findSpotForCol(x);
      if (y === null) return;
  
      this.board[y][x] = this.currPlayer;
  
      this.placeInTable(y, x);
  
      if (this.checkForWin()) {
        this.endGame(`Player ${this.currPlayer.color} wins!`);
      }
  
      this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
    }
  
    findSpotForCol(x) {
      for (let y = this.height - 1; y >= 0; y--) {
        if (!this.board[y][x]) {
          return y;
        }
      }
      return null;
    }
  
    placeInTable(y, x) {
      const piece = document.createElement('div');
      piece.classList.add('piece');
      piece.style.backgroundColor = this.currPlayer.color;
  
      const spot = document.getElementById(`${y}-${x}`);
      spot.append(piece);
    }
  
    endGame(msg) {
      this.gameOver = true;
      setTimeout(() => alert(msg), 200);
    }
  
    checkForWin() {
      const _win = cells =>
        cells.every(
          ([y, x]) =>
            y >= 0 &&
            y < this.height &&
            x >= 0 &&
            x < this.width &&
            this.board[y][x] === this.currPlayer
        );
  
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const horiz = [
            [y, x],
            [y, x + 1],
            [y, x + 2],
            [y, x + 3]
          ];
          const vert = [
            [y, x],
            [y + 1, x],
            [y + 2, x],
            [y + 3, x]
          ];
          const diagDR = [
            [y, x],
            [y + 1, x + 1],
            [y + 2, x + 2],
            [y + 3, x + 3]
          ];
          const diagDL = [
            [y, x],
            [y + 1, x - 1],
            [y + 2, x - 2],
            [y + 3, x - 3]
          ];
  
          if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
            return true;
          }
        }
      }
    }
  }
  
  document.getElementById('start-button').addEventListener('click', () => {
    const p1Color = document.getElementById('p1-color').value;
    const p2Color = document.getElementById('p2-color').value;
    new Game(6, 7, p1Color, p2Color);
  });