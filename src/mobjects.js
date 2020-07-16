export class Line {
    constructor(ctx, args) {
        this.p5 = ctx;
        this.x1 = args.x1;
        this.y1 = args.y1;
        this.x2 = args.x2;
        this.y2 = args.y2;
        this.color = args.color || 255;
        this.strokeWeight = args.strokeWeight || 0.6;
    }

    show() {
        this.p5.push();
        this.p5.stroke(this.color);
        this.p5.strokeWeight(this.strokeWeight);
        this.p5.line(this.x1, this.y1, this.x2, this.y2);
        this.p5.pop();
    }
}

export class ArrowLine extends Line {
    constructor(ctx, args) {
        super(ctx, args);
        this.headSize = args.headSize || 10;
        this.lineAngle = this.p5.atan2(this.y2 - this.y1, this.x2 - this.x1); 
    }

    show() {
        super.show();
        this.p5.push();
        this.p5.fill(this.color);
        this.p5.translate(this.x2, this.y2);
        this.p5.rotate(this.lineAngle + this.p5.HALF_PI);
        this.p5.triangle(-this.headSize * 0.5, this.headSize, this.headSize * 0.5,
                         this.headSize, 0, -this.headSize / 4);
        this.p5.pop();
    }
}

export class Grid {
    constructor(ctx, args) {
        this.p5 = ctx;
        this.width = args.width;
        this.height = args.height;
        this.mid_width = this.width / 2;
        this.mid_height = this.height / 2;
        this.numXBoxes = args.numXBoxes || 10;
        this.numYBoxes = args.numYBoxes || 14 ;
        this.spacing = this.width / this.numYBoxes;
        this.axesColor = args.axesColor || 'hsl(180, 0%, 80%)';
        this.lineColor = args.lineColor || 'hsl(202, 44%, 40%)';
        this.subLineColor = args.subLineColor || 'hsl(180, 0%, 5%)';
    }

    show() {
        // X Lines
        for (let i = 0; i <= this.numXBoxes; i++) {
            new Line(this.p5, {
                'x1': 0, 'y1': this.spacing * i,
                'x2': this.width, 'y2': this.spacing * i,
                'color': this.lineColor
            }).show();
        }

        // Y Lines
        for (let i = 0; i <= this.numYBoxes; i++) {
            new Line(this.p5, {
                'x1': this.spacing * i, 'y1': 0,
                'x2': this.spacing * i, 'y2': this.height,
                'color': this.lineColor
            }).show();
        }

        // X Sublines
        for (let i = 1; i <= this.numXBoxes * 2; i++) {
            new Line(this.p5, {
                'x1': 0, 'y1': this.spacing / 2 * i,
                'x2': this.width, 'y2': this.spacing / 2 * i,
                'color': this.subLineColor
            }).show();
        }

        // Y Sublines
        for (let i = 1; i <= this.numYBoxes * 2; i++) {
            new Line(this.p5, {
                'x1': this.spacing / 2 * i, 'y1': 0,
                'x2': this.spacing / 2 * i, 'y2': this.height,
                'color': this.subLineColor
            }).show();
        }

        // X-Axis
        new Line(this.p5, {
            'x1': 0, 'y1': this.mid_height,
            'x2': this.width, 'y2': this.mid_height,
            'color': this.axesColor
        }).show();

        // Y-Axis
        new Line(this.p5, {
            'x1': this.mid_width, 'y1': this.height,
            'x2': this.mid_width, 'y2': 0,
            'color': this.axesColor
        }).show();
    }
}