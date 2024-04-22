class Tree {
    constructor(center, size) {
       this.center = center;
       this.size = size; // size of the base
       
    }
 
   
 
    draw(ctx) {
      this.center.draw(ctx, { size: this.size, color: "lightgreen" });

      const top = add(this.center, { x: -40, y: -40 });
      new Segment(this.center, top).draw(ctx);
    }
 }