// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class ChangeHorizontalZoomBy implements flatbuffers.IUnpackableObject<ChangeHorizontalZoomByT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ChangeHorizontalZoomBy {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsChangeHorizontalZoomBy(bb:flatbuffers.ByteBuffer, obj?:ChangeHorizontalZoomBy):ChangeHorizontalZoomBy {
  return (obj || new ChangeHorizontalZoomBy()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsChangeHorizontalZoomBy(bb:flatbuffers.ByteBuffer, obj?:ChangeHorizontalZoomBy):ChangeHorizontalZoomBy {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ChangeHorizontalZoomBy()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

delta():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startChangeHorizontalZoomBy(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addDelta(builder:flatbuffers.Builder, delta:number) {
  builder.addFieldFloat64(0, delta, 0.0);
}

static endChangeHorizontalZoomBy(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createChangeHorizontalZoomBy(builder:flatbuffers.Builder, delta:number):flatbuffers.Offset {
  ChangeHorizontalZoomBy.startChangeHorizontalZoomBy(builder);
  ChangeHorizontalZoomBy.addDelta(builder, delta);
  return ChangeHorizontalZoomBy.endChangeHorizontalZoomBy(builder);
}

unpack(): ChangeHorizontalZoomByT {
  return new ChangeHorizontalZoomByT(
    this.delta()
  );
}


unpackTo(_o: ChangeHorizontalZoomByT): void {
  _o.delta = this.delta();
}
}

export class ChangeHorizontalZoomByT implements flatbuffers.IGeneratedObject {
constructor(
  public delta: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ChangeHorizontalZoomBy.createChangeHorizontalZoomBy(builder,
    this.delta
  );
}
}
