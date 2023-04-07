// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DealLimits, DealLimitsT } from '../../milky/model/deal-limits/deal-limits';


export class UpdateDealLimits {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UpdateDealLimits {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUpdateDealLimits(bb:flatbuffers.ByteBuffer, obj?:UpdateDealLimits):UpdateDealLimits {
  return (obj || new UpdateDealLimits()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUpdateDealLimits(bb:flatbuffers.ByteBuffer, obj?:UpdateDealLimits):UpdateDealLimits {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UpdateDealLimits()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

limitModel(obj?:DealLimits):DealLimits|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealLimits()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startUpdateDealLimits(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addLimitModel(builder:flatbuffers.Builder, limitModelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, limitModelOffset, 0);
}

static endUpdateDealLimits(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // limit_model
  return offset;
}

static createUpdateDealLimits(builder:flatbuffers.Builder, limitModelOffset:flatbuffers.Offset):flatbuffers.Offset {
  UpdateDealLimits.startUpdateDealLimits(builder);
  UpdateDealLimits.addLimitModel(builder, limitModelOffset);
  return UpdateDealLimits.endUpdateDealLimits(builder);
}

unpack(): UpdateDealLimitsT {
  return new UpdateDealLimitsT(
    (this.limitModel() !== null ? this.limitModel()!.unpack() : null)
  );
}


unpackTo(_o: UpdateDealLimitsT): void {
  _o.limitModel = (this.limitModel() !== null ? this.limitModel()!.unpack() : null);
}
}

export class UpdateDealLimitsT {
constructor(
  public limitModel: DealLimitsT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const limitModel = (this.limitModel !== null ? this.limitModel!.pack(builder) : 0);

  return UpdateDealLimits.createUpdateDealLimits(builder,
    limitModel
  );
}
}
