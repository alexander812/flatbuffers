// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class StartLastCandleAnimation {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StartLastCandleAnimation {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStartLastCandleAnimation(bb:flatbuffers.ByteBuffer, obj?:StartLastCandleAnimation):StartLastCandleAnimation {
  return (obj || new StartLastCandleAnimation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStartLastCandleAnimation(bb:flatbuffers.ByteBuffer, obj?:StartLastCandleAnimation):StartLastCandleAnimation {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StartLastCandleAnimation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startStartLastCandleAnimation(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endStartLastCandleAnimation(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStartLastCandleAnimation(builder:flatbuffers.Builder):flatbuffers.Offset {
  StartLastCandleAnimation.startStartLastCandleAnimation(builder);
  return StartLastCandleAnimation.endStartLastCandleAnimation(builder);
}

unpack(): StartLastCandleAnimationT {
  return new StartLastCandleAnimationT();
}


unpackTo(_o: StartLastCandleAnimationT): void {}
}

export class StartLastCandleAnimationT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return StartLastCandleAnimation.createStartLastCandleAnimation(builder);
}
}
