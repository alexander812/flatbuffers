// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class Point2 {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Point2 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

time():number {
  return this.bb!.readFloat32(this.bb_pos);
}

quote():number {
  return this.bb!.readFloat32(this.bb_pos + 4);
}

static sizeOf():number {
  return 8;
}

static createPoint2(builder:flatbuffers.Builder, time: number, quote: number):flatbuffers.Offset {
  builder.prep(4, 8);
  builder.writeFloat32(quote);
  builder.writeFloat32(time);
  return builder.offset();
}


unpack(): Point2T {
  return new Point2T(
    this.time(),
    this.quote()
  );
}


unpackTo(_o: Point2T): void {
  _o.time = this.time();
  _o.quote = this.quote();
}
}

export class Point2T {
constructor(
  public time: number = 0.0,
  public quote: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return Point2.createPoint2(builder,
    this.time,
    this.quote
  );
}
}
