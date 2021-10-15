import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BoardServiceService } from 'src/app/utils/board-service.service';
import { COLS, BLOCK_SIZE, ROWS  } from 'src/app/utils/tetris/constants';
import { IPiece } from 'src/app/utils/tetris/IPiece';
import { KEY  } from 'src/app/utils/tetris/key';
import { Piece } from 'src/app/utils/tetris/Piece';

@Component({
  selector: 'app-tetris-board',
  templateUrl: './tetris-board.component.html',
  styleUrls: ['./tetris-board.component.scss']
})
export class TetrisBoardComponent implements OnInit {

 
  // Get reference to the canvas.
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  points: number;
  lines: number;
  level: number;
  board: number[][];
  piece:Piece;
  // keyBoardInput:number;
  moves = {
    [KEY.LEFT]:  (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]:    (p: IPiece): IPiece => ({ ...p, y: p.y + 1 })
  };

  @HostListener('window:keydown', ['$event'])
keyEvent(event: KeyboardEvent) {
  if (this.moves[event.keyCode]) 
  {
    // console.log(event.keyCode);
    // this.keyBoardInput=event.keyCode;

    // If the keyCode exists in our moves stop the event from bubbling.
    event.preventDefault();
    // Get the next state of the piece.
    const p:IPiece = this.moves[37](this.piece);
    console.log(p.x+"Coordinates"+p.y)
    // Move the piece
    this.piece.move(p);
    // Clear the old position before drawing
    // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    console.log(this.piece.x+"Coordinates of piece"+this.piece.y)
    // Draw the new position.
    this.piece.draw();
    
  }
}
  constructor(private boardService: BoardServiceService) { }

  ngOnInit(): void {
    this.initBoard();
  }

  initBoard() {
    // Get the 2D context that we draw on.

    this.ctx = this.canvas.nativeElement.getContext('2d')! ;
    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  play() {
    this.board = this.boardService.getEmptyBoard();
    this.piece = new Piece(this.ctx);
    this.piece.draw();
    console.table(this.board);
    console.log(this.piece.x+"Coards"+this.piece.y);
    
    
  }
  // valid(p: IPiece): boolean {
  //   return p.shape.every((row, dy) => {
  //     return row.every((value, dx) => {
  //       let x = p.x + dx;
  //       let y = p.y + dy;
  //       return (
  //         this.isEmpty(value) ||
  //        (this.insideWalls(x) &&
  //         this.aboveFloor(y)
  //       );
  //     });
  //   });
  // }
}
