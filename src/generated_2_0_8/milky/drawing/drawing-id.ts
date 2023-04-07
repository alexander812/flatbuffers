// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class DrawingId {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DrawingId {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDrawingId(bb:flatbuffers.ByteBuffer, obj?:DrawingId):DrawingId {
  return (obj || new DrawingId()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDrawingId(bb:flatbuffers.ByteBuffer, obj?:DrawingId):DrawingId {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DrawingId()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

value():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startDrawingId(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addValue(builder:flatbuffers.Builder, value:bigint) {
  builder.addFieldInt64(0, value, BigInt('0'));
}

static endDrawingId(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDrawingId(builder:flatbuffers.Builder, value:bigint):flatbuffers.Offset {
  DrawingId.startDrawingId(builder);
  DrawingId.addValue(builder, value);
  return DrawingId.endDrawingId(builder);
}

unpack(): DrawingIdT {
  return new DrawingIdT(
    this.value()
  );
}


unpackTo(_o: DrawingIdT): void {
  _o.value = this.value();
}
}

export class DrawingIdT {
constructor(
  public value: bigint = BigInt('0')
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return DrawingId.createDrawingId(builder,
    this.value
  );
}
}