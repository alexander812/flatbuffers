// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class UnhoverDrawingMethod {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UnhoverDrawingMethod {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnhoverDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:UnhoverDrawingMethod):UnhoverDrawingMethod {
  return (obj || new UnhoverDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnhoverDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:UnhoverDrawingMethod):UnhoverDrawingMethod {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnhoverDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startUnhoverDrawingMethod(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endUnhoverDrawingMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUnhoverDrawingMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  UnhoverDrawingMethod.startUnhoverDrawingMethod(builder);
  return UnhoverDrawingMethod.endUnhoverDrawingMethod(builder);
}

unpack(): UnhoverDrawingMethodT {
  return new UnhoverDrawingMethodT();
}


unpackTo(_o: UnhoverDrawingMethodT): void {}
}

export class UnhoverDrawingMethodT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return UnhoverDrawingMethod.createUnhoverDrawingMethod(builder);
}
}
