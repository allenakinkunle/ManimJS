import { ArrowLine } from './mobjects.js'
import { vecCoords2GridCoords } from './helpers.js'

export class Vector extends ArrowLine {
    constructor(ctx, args) {
        let gridCoords = vecCoords2GridCoords(args.coords, args.grid.spacing);
        let ax = {
            'x1': 0, 'y1': 0,
            'x2': gridCoords[0], 'y2': gridCoords[1],
            'color': args.color || 'white',
            'strokeWeight': args.strokeWeight || 2,
            'scale': args.scale
        }
        super(ctx, ax);
    }

    show() {
        super.show();
    }
}

export class UnitCircle {
    constructor(ctx, args) {
        this.p5 = ctx;
        this.grid = args.grid;
        this.color = args.color || 255;
    }

    show() {
        this.p5.push();
        this.p5.stroke(this.color);
        this.p5.noFill();
        this.p5.ellipse(0, 0, this.grid.spacing * 2, this.grid.spacing * 2);
        this.p5.pop();
    }
}