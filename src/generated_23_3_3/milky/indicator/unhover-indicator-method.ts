// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class UnhoverIndicatorMethod implements flatbuffers.IUnpackableObject<UnhoverIndicatorMethodT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UnhoverIndicatorMethod {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnhoverIndicatorMethod(bb:flatbuffers.ByteBuffer, obj?:UnhoverIndicatorMethod):UnhoverIndicatorMethod {
  return (obj || new UnhoverIndicatorMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnhoverIndicatorMethod(bb:flatbuffers.ByteBuffer, obj?:UnhoverIndicatorMethod):UnhoverIndicatorMethod {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnhoverIndicatorMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startUnhoverIndicatorMethod(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endUnhoverIndicatorMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUnhoverIndicatorMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  UnhoverIndicatorMethod.startUnhoverIndicatorMethod(builder);
  return UnhoverIndicatorMethod.endUnhoverIndicatorMethod(builder);
}

unpack(): UnhoverIndicatorMethodT {
  return new UnhoverIndicatorMethodT();
}


unpackTo(_o: UnhoverIndicatorMethodT): void {}
}

export class UnhoverIndicatorMethodT implements flatbuffers.IGeneratedObject {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return UnhoverIndicatorMethod.createUnhoverIndicatorMethod(builder);
}
}
