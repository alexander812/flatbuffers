// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../../milky/model/quote';
import { DealDirection } from '../../../milky/model/deal/deal-direction';


export class DealProfitScale {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DealProfitScale {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDealProfitScale(bb:flatbuffers.ByteBuffer, obj?:DealProfitScale):DealProfitScale {
  return (obj || new DealProfitScale()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDealProfitScale(bb:flatbuffers.ByteBuffer, obj?:DealProfitScale):DealProfitScale {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DealProfitScale()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dealAmount(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealMultiplier(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealCommission(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealOpenValue(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealStopOut(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealDirection():DealDirection {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : DealDirection.Uninitialized;
}

static startDealProfitScale(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addDealAmount(builder:flatbuffers.Builder, dealAmountOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, dealAmountOffset, 0);
}

static addDealMultiplier(builder:flatbuffers.Builder, dealMultiplierOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, dealMultiplierOffset, 0);
}

static addDealCommission(builder:flatbuffers.Builder, dealCommissionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(2, dealCommissionOffset, 0);
}

static addDealOpenValue(builder:flatbuffers.Builder, dealOpenValueOffset:flatbuffers.Offset) {
  builder.addFieldStruct(3, dealOpenValueOffset, 0);
}

static addDealStopOut(builder:flatbuffers.Builder, dealStopOutOffset:flatbuffers.Offset) {
  builder.addFieldStruct(4, dealStopOutOffset, 0);
}

static addDealDirection(builder:flatbuffers.Builder, dealDirection:DealDirection) {
  builder.addFieldInt32(5, dealDirection, DealDirection.Uninitialized);
}

static endDealProfitScale(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // deal_amount
  builder.requiredField(offset, 6) // deal_multiplier
  builder.requiredField(offset, 8) // deal_commission
  builder.requiredField(offset, 10) // deal_open_value
  builder.requiredField(offset, 12) // deal_stop_out
  return offset;
}


unpack(): DealProfitScaleT {
  return new DealProfitScaleT(
    (this.dealAmount() !== null ? this.dealAmount()!.unpack() : null),
    (this.dealMultiplier() !== null ? this.dealMultiplier()!.unpack() : null),
    (this.dealCommission() !== null ? this.dealCommission()!.unpack() : null),
    (this.dealOpenValue() !== null ? this.dealOpenValue()!.unpack() : null),
    (this.dealStopOut() !== null ? this.dealStopOut()!.unpack() : null),
    this.dealDirection()
  );
}


unpackTo(_o: DealProfitScaleT): void {
  _o.dealAmount = (this.dealAmount() !== null ? this.dealAmount()!.unpack() : null);
  _o.dealMultiplier = (this.dealMultiplier() !== null ? this.dealMultiplier()!.unpack() : null);
  _o.dealCommission = (this.dealCommission() !== null ? this.dealCommission()!.unpack() : null);
  _o.dealOpenValue = (this.dealOpenValue() !== null ? this.dealOpenValue()!.unpack() : null);
  _o.dealStopOut = (this.dealStopOut() !== null ? this.dealStopOut()!.unpack() : null);
  _o.dealDirection = this.dealDirection();
}
}

export class DealProfitScaleT {
constructor(
  public dealAmount: QuoteT|null = null,
  public dealMultiplier: QuoteT|null = null,
  public dealCommission: QuoteT|null = null,
  public dealOpenValue: QuoteT|null = null,
  public dealStopOut: QuoteT|null = null,
  public dealDirection: DealDirection = DealDirection.Uninitialized
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  DealProfitScale.startDealProfitScale(builder);
  DealProfitScale.addDealAmount(builder, (this.dealAmount !== null ? this.dealAmount!.pack(builder) : 0));
  DealProfitScale.addDealMultiplier(builder, (this.dealMultiplier !== null ? this.dealMultiplier!.pack(builder) : 0));
  DealProfitScale.addDealCommission(builder, (this.dealCommission !== null ? this.dealCommission!.pack(builder) : 0));
  DealProfitScale.addDealOpenValue(builder, (this.dealOpenValue !== null ? this.dealOpenValue!.pack(builder) : 0));
  DealProfitScale.addDealStopOut(builder, (this.dealStopOut !== null ? this.dealStopOut!.pack(builder) : 0));
  DealProfitScale.addDealDirection(builder, this.dealDirection);

  return DealProfitScale.endDealProfitScale(builder);
}
}