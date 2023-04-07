// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class StopLastCandleAnimation {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StopLastCandleAnimation {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStopLastCandleAnimation(bb:flatbuffers.ByteBuffer, obj?:StopLastCandleAnimation):StopLastCandleAnimation {
  return (obj || new StopLastCandleAnimation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStopLastCandleAnimation(bb:flatbuffers.ByteBuffer, obj?:StopLastCandleAnimation):StopLastCandleAnimation {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StopLastCandleAnimation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startStopLastCandleAnimation(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endStopLastCandleAnimation(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStopLastCandleAnimation(builder:flatbuffers.Builder):flatbuffers.Offset {
  StopLastCandleAnimation.startStopLastCandleAnimation(builder);
  return StopLastCandleAnimation.endStopLastCandleAnimation(builder);
}

unpack(): StopLastCandleAnimationT {
  return new StopLastCandleAnimationT();
}


unpackTo(_o: StopLastCandleAnimationT): void {}
}

export class StopLastCandleAnimationT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return StopLastCandleAnimation.createStopLastCandleAnimation(builder);
}
}
