// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class ZoomToMax {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ZoomToMax {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsZoomToMax(bb:flatbuffers.ByteBuffer, obj?:ZoomToMax):ZoomToMax {
  return (obj || new ZoomToMax()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsZoomToMax(bb:flatbuffers.ByteBuffer, obj?:ZoomToMax):ZoomToMax {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ZoomToMax()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startZoomToMax(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endZoomToMax(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createZoomToMax(builder:flatbuffers.Builder):flatbuffers.Offset {
  ZoomToMax.startZoomToMax(builder);
  return ZoomToMax.endZoomToMax(builder);
}

unpack(): ZoomToMaxT {
  return new ZoomToMaxT();
}


unpackTo(_o: ZoomToMaxT): void {}
}

export class ZoomToMaxT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ZoomToMax.createZoomToMax(builder);
}
}
