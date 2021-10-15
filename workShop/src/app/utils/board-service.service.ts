import { Injectable } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS  } from './tetris/constants';

@Injectable({
  providedIn: 'root'
})
export class BoardServiceService {

  constructor() { }
  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

}
