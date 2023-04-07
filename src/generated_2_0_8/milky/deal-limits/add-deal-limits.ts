// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DealLimits, DealLimitsT } from '../../milky/model/deal-limits/deal-limits';


export class AddDealLimits {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AddDealLimits {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAddDealLimits(bb:flatbuffers.ByteBuffer, obj?:AddDealLimits):AddDealLimits {
  return (obj || new AddDealLimits()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAddDealLimits(bb:flatbuffers.ByteBuffer, obj?:AddDealLimits):AddDealLimits {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AddDealLimits()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

limitModel(obj?:DealLimits):DealLimits|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealLimits()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startAddDealLimits(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addLimitModel(builder:flatbuffers.Builder, limitModelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, limitModelOffset, 0);
}

static endAddDealLimits(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // limit_model
  return offset;
}

static createAddDealLimits(builder:flatbuffers.Builder, limitModelOffset:flatbuffers.Offset):flatbuffers.Offset {
  AddDealLimits.startAddDealLimits(builder);
  AddDealLimits.addLimitModel(builder, limitModelOffset);
  return AddDealLimits.endAddDealLimits(builder);
}

unpack(): AddDealLimitsT {
  return new AddDealLimitsT(
    (this.limitModel() !== null ? this.limitModel()!.unpack() : null)
  );
}


unpackTo(_o: AddDealLimitsT): void {
  _o.limitModel = (this.limitModel() !== null ? this.limitModel()!.unpack() : null);
}
}

export class AddDealLimitsT {
constructor(
  public limitModel: DealLimitsT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const limitModel = (this.limitModel !== null ? this.limitModel!.pack(builder) : 0);

  return AddDealLimits.createAddDealLimits(builder,
    limitModel
  );
}
}
