// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DealProfitScale, DealProfitScaleT } from '../../milky/model/deal-profit-scale/deal-profit-scale.js';


export class ShowProfitScaleForSelectedDeal implements flatbuffers.IUnpackableObject<ShowProfitScaleForSelectedDealT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ShowProfitScaleForSelectedDeal {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsShowProfitScaleForSelectedDeal(bb:flatbuffers.ByteBuffer, obj?:ShowProfitScaleForSelectedDeal):ShowProfitScaleForSelectedDeal {
  return (obj || new ShowProfitScaleForSelectedDeal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsShowProfitScaleForSelectedDeal(bb:flatbuffers.ByteBuffer, obj?:ShowProfitScaleForSelectedDeal):ShowProfitScaleForSelectedDeal {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ShowProfitScaleForSelectedDeal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dealProfitScaleModel(obj?:DealProfitScale):DealProfitScale|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealProfitScale()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startShowProfitScaleForSelectedDeal(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addDealProfitScaleModel(builder:flatbuffers.Builder, dealProfitScaleModelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, dealProfitScaleModelOffset, 0);
}

static endShowProfitScaleForSelectedDeal(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // deal_profit_scale_model
  return offset;
}

static createShowProfitScaleForSelectedDeal(builder:flatbuffers.Builder, dealProfitScaleModelOffset:flatbuffers.Offset):flatbuffers.Offset {
  ShowProfitScaleForSelectedDeal.startShowProfitScaleForSelectedDeal(builder);
  ShowProfitScaleForSelectedDeal.addDealProfitScaleModel(builder, dealProfitScaleModelOffset);
  return ShowProfitScaleForSelectedDeal.endShowProfitScaleForSelectedDeal(builder);
}

unpack(): ShowProfitScaleForSelectedDealT {
  return new ShowProfitScaleForSelectedDealT(
    (this.dealProfitScaleModel() !== null ? this.dealProfitScaleModel()!.unpack() : null)
  );
}


unpackTo(_o: ShowProfitScaleForSelectedDealT): void {
  _o.dealProfitScaleModel = (this.dealProfitScaleModel() !== null ? this.dealProfitScaleModel()!.unpack() : null);
}
}

export class ShowProfitScaleForSelectedDealT implements flatbuffers.IGeneratedObject {
constructor(
  public dealProfitScaleModel: DealProfitScaleT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const dealProfitScaleModel = (this.dealProfitScaleModel !== null ? this.dealProfitScaleModel!.pack(builder) : 0);

  return ShowProfitScaleForSelectedDeal.createShowProfitScaleForSelectedDeal(builder,
    dealProfitScaleModel
  );
}
}
