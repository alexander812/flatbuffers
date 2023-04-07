// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Time, TimeT } from '../../milky/model/time.js';


export class SetVisibleTimeInterval implements flatbuffers.IUnpackableObject<SetVisibleTimeIntervalT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetVisibleTimeInterval {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetVisibleTimeInterval(bb:flatbuffers.ByteBuffer, obj?:SetVisibleTimeInterval):SetVisibleTimeInterval {
  return (obj || new SetVisibleTimeInterval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetVisibleTimeInterval(bb:flatbuffers.ByteBuffer, obj?:SetVisibleTimeInterval):SetVisibleTimeInterval {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetVisibleTimeInterval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

time(obj?:Time):Time|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Time()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startSetVisibleTimeInterval(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTime(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, timeOffset, 0);
}

static endSetVisibleTimeInterval(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // time
  return offset;
}

static createSetVisibleTimeInterval(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset):flatbuffers.Offset {
  SetVisibleTimeInterval.startSetVisibleTimeInterval(builder);
  SetVisibleTimeInterval.addTime(builder, timeOffset);
  return SetVisibleTimeInterval.endSetVisibleTimeInterval(builder);
}

unpack(): SetVisibleTimeIntervalT {
  return new SetVisibleTimeIntervalT(
    (this.time() !== null ? this.time()!.unpack() : null)
  );
}


unpackTo(_o: SetVisibleTimeIntervalT): void {
  _o.time = (this.time() !== null ? this.time()!.unpack() : null);
}
}

export class SetVisibleTimeIntervalT implements flatbuffers.IGeneratedObject {
constructor(
  public time: TimeT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return SetVisibleTimeInterval.createSetVisibleTimeInterval(builder,
    (this.time !== null ? this.time!.pack(builder) : 0)
  );
}
}