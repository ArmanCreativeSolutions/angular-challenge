import { Injectable } from '@angular/core';

const GRID = 15; // 15x15

@Injectable({
  providedIn: 'root',
})
export class SeatMapService {
  constructor() {}

  getSeatMap(mapId: string) {
    return this.generateRandomMap();
  }

  private generateRandomMap(): Array<0 | 1>[] {
    const randomMap: Array<0 | 1>[] = [];
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        const random: 0 | 1 = Math.random() > 0.5 ? 1 : 0;
        if (!Array.isArray(randomMap[i])) randomMap[i] = [];
        randomMap[i].push(random);
      }
    }

    return randomMap;
  }
}
