// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class UnselectedDrawingNotify implements flatbuffers.IUnpackableObject<UnselectedDrawingNotifyT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UnselectedDrawingNotify {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnselectedDrawingNotify(bb:flatbuffers.ByteBuffer, obj?:UnselectedDrawingNotify):UnselectedDrawingNotify {
  return (obj || new UnselectedDrawingNotify()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnselectedDrawingNotify(bb:flatbuffers.ByteBuffer, obj?:UnselectedDrawingNotify):UnselectedDrawingNotify {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnselectedDrawingNotify()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startUnselectedDrawingNotify(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endUnselectedDrawingNotify(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUnselectedDrawingNotify(builder:flatbuffers.Builder):flatbuffers.Offset {
  UnselectedDrawingNotify.startUnselectedDrawingNotify(builder);
  return UnselectedDrawingNotify.endUnselectedDrawingNotify(builder);
}

unpack(): UnselectedDrawingNotifyT {
  return new UnselectedDrawingNotifyT();
}


unpackTo(_o: UnselectedDrawingNotifyT): void {}
}

export class UnselectedDrawingNotifyT implements flatbuffers.IGeneratedObject {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return UnselectedDrawingNotify.createUnselectedDrawingNotify(builder);
}
}
