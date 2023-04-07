// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class TrailingStopLossEnabled implements flatbuffers.IUnpackableObject<TrailingStopLossEnabledT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TrailingStopLossEnabled {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTrailingStopLossEnabled(bb:flatbuffers.ByteBuffer, obj?:TrailingStopLossEnabled):TrailingStopLossEnabled {
  return (obj || new TrailingStopLossEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTrailingStopLossEnabled(bb:flatbuffers.ByteBuffer, obj?:TrailingStopLossEnabled):TrailingStopLossEnabled {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TrailingStopLossEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

enable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startTrailingStopLossEnabled(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addEnable(builder:flatbuffers.Builder, enable:boolean) {
  builder.addFieldInt8(0, +enable, +false);
}

static endTrailingStopLossEnabled(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTrailingStopLossEnabled(builder:flatbuffers.Builder, enable:boolean):flatbuffers.Offset {
  TrailingStopLossEnabled.startTrailingStopLossEnabled(builder);
  TrailingStopLossEnabled.addEnable(builder, enable);
  return TrailingStopLossEnabled.endTrailingStopLossEnabled(builder);
}

unpack(): TrailingStopLossEnabledT {
  return new TrailingStopLossEnabledT(
    this.enable()
  );
}


unpackTo(_o: TrailingStopLossEnabledT): void {
  _o.enable = this.enable();
}
}

export class TrailingStopLossEnabledT implements flatbuffers.IGeneratedObject {
constructor(
  public enable: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return TrailingStopLossEnabled.createTrailingStopLossEnabled(builder,
    this.enable
  );
}
}
