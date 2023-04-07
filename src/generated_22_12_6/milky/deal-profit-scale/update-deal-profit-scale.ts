// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DealProfitScale, DealProfitScaleT } from '../../milky/model/deal-profit-scale/deal-profit-scale.js';


export class UpdateDealProfitScale implements flatbuffers.IUnpackableObject<UpdateDealProfitScaleT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UpdateDealProfitScale {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUpdateDealProfitScale(bb:flatbuffers.ByteBuffer, obj?:UpdateDealProfitScale):UpdateDealProfitScale {
  return (obj || new UpdateDealProfitScale()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUpdateDealProfitScale(bb:flatbuffers.ByteBuffer, obj?:UpdateDealProfitScale):UpdateDealProfitScale {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UpdateDealProfitScale()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dealProfitScaleModel(obj?:DealProfitScale):DealProfitScale|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealProfitScale()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startUpdateDealProfitScale(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addDealProfitScaleModel(builder:flatbuffers.Builder, dealProfitScaleModelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, dealProfitScaleModelOffset, 0);
}

static endUpdateDealProfitScale(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // deal_profit_scale_model
  return offset;
}

static createUpdateDealProfitScale(builder:flatbuffers.Builder, dealProfitScaleModelOffset:flatbuffers.Offset):flatbuffers.Offset {
  UpdateDealProfitScale.startUpdateDealProfitScale(builder);
  UpdateDealProfitScale.addDealProfitScaleModel(builder, dealProfitScaleModelOffset);
  return UpdateDealProfitScale.endUpdateDealProfitScale(builder);
}

unpack(): UpdateDealProfitScaleT {
  return new UpdateDealProfitScaleT(
    (this.dealProfitScaleModel() !== null ? this.dealProfitScaleModel()!.unpack() : null)
  );
}


unpackTo(_o: UpdateDealProfitScaleT): void {
  _o.dealProfitScaleModel = (this.dealProfitScaleModel() !== null ? this.dealProfitScaleModel()!.unpack() : null);
}
}

export class UpdateDealProfitScaleT implements flatbuffers.IGeneratedObject {
constructor(
  public dealProfitScaleModel: DealProfitScaleT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const dealProfitScaleModel = (this.dealProfitScaleModel !== null ? this.dealProfitScaleModel!.pack(builder) : 0);

  return UpdateDealProfitScale.createUpdateDealProfitScale(builder,
    dealProfitScaleModel
  );
}
}
