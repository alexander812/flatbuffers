// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class RemoveDealLimits {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RemoveDealLimits {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRemoveDealLimits(bb:flatbuffers.ByteBuffer, obj?:RemoveDealLimits):RemoveDealLimits {
  return (obj || new RemoveDealLimits()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRemoveDealLimits(bb:flatbuffers.ByteBuffer, obj?:RemoveDealLimits):RemoveDealLimits {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RemoveDealLimits()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startRemoveDealLimits(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endRemoveDealLimits(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRemoveDealLimits(builder:flatbuffers.Builder):flatbuffers.Offset {
  RemoveDealLimits.startRemoveDealLimits(builder);
  return RemoveDealLimits.endRemoveDealLimits(builder);
}

unpack(): RemoveDealLimitsT {
  return new RemoveDealLimitsT();
}


unpackTo(_o: RemoveDealLimitsT): void {}
}

export class RemoveDealLimitsT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return RemoveDealLimits.createRemoveDealLimits(builder);
}
}
