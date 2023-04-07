// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class IndicatorId {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):IndicatorId {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

value():number {
  return this.bb!.readInt32(this.bb_pos);
}

static sizeOf():number {
  return 4;
}

static createIndicatorId(builder:flatbuffers.Builder, value: number):flatbuffers.Offset {
  builder.prep(4, 4);
  builder.writeInt32(value);
  return builder.offset();
}


unpack(): IndicatorIdT {
  return new IndicatorIdT(
    this.value()
  );
}


unpackTo(_o: IndicatorIdT): void {
  _o.value = this.value();
}
}

export class IndicatorIdT {
constructor(
  public value: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return IndicatorId.createIndicatorId(builder,
    this.value
  );
}
}
