// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class SentimentValue {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SentimentValue {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSentimentValue(bb:flatbuffers.ByteBuffer, obj?:SentimentValue):SentimentValue {
  return (obj || new SentimentValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSentimentValue(bb:flatbuffers.ByteBuffer, obj?:SentimentValue):SentimentValue {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SentimentValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

value():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startSentimentValue(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addValue(builder:flatbuffers.Builder, value:number) {
  builder.addFieldFloat32(0, value, 0.0);
}

static endSentimentValue(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSentimentValue(builder:flatbuffers.Builder, value:number):flatbuffers.Offset {
  SentimentValue.startSentimentValue(builder);
  SentimentValue.addValue(builder, value);
  return SentimentValue.endSentimentValue(builder);
}

unpack(): SentimentValueT {
  return new SentimentValueT(
    this.value()
  );
}


unpackTo(_o: SentimentValueT): void {
  _o.value = this.value();
}
}

export class SentimentValueT {
constructor(
  public value: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return SentimentValue.createSentimentValue(builder,
    this.value
  );
}
}
