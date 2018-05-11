// Create class ImprovedFighter

import { Fighter } from "./fighter";

export class ImprovedFighter extends Fighter {
  doubleHit(enemy, points) {
    let doublePoints = new Array();
    points.forEach(element => {
      doublePoints.push(element * 2);
    });
    super.hit(enemy, doublePoints);
  }
}
