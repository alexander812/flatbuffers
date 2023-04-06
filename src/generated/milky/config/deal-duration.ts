// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { TimeT } from '../../milky/model/time.js';
import { Time } from '../../milky/model/time.js';

export class DealDuration implements flatbuffers.IUnpackableObject<DealDurationT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): DealDuration {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsDealDuration(bb: flatbuffers.ByteBuffer, obj?: DealDuration): DealDuration {
    return (obj || new DealDuration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsDealDuration(bb: flatbuffers.ByteBuffer, obj?: DealDuration): DealDuration {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new DealDuration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  duration(obj?: Time): Time | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new Time()).__init(this.bb_pos + offset, this.bb!) : null;
  }

  static startDealDuration(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addDuration(builder: flatbuffers.Builder, durationOffset: flatbuffers.Offset) {
    builder.addFieldStruct(0, durationOffset, 0);
  }

  static endDealDuration(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // duration
    return offset;
  }

  static createDealDuration(builder: flatbuffers.Builder, durationOffset: flatbuffers.Offset): flatbuffers.Offset {
    DealDuration.startDealDuration(builder);
    DealDuration.addDuration(builder, durationOffset);
    return DealDuration.endDealDuration(builder);
  }

  unpack(): DealDurationT {
    return new DealDurationT(this.duration() !== null ? this.duration()!.unpack() : null);
  }

  unpackTo(_o: DealDurationT): void {
    _o.duration = this.duration() !== null ? this.duration()!.unpack() : null;
  }
}

export class DealDurationT implements flatbuffers.IGeneratedObject {
  constructor(public duration: TimeT | null = null) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return DealDuration.createDealDuration(builder, this.duration !== null ? this.duration.pack(builder) : 0);
  }
}