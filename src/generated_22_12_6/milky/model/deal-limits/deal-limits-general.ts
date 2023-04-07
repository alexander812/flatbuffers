// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../../milky/model/quote.js';
import { DealDirection } from '../../../milky/model/deal/deal-direction.js';
import { DealId, DealIdT } from '../../../milky/model/deal/deal-id.js';
import { StopOrderLimitType } from '../../../milky/model/deal-limits/stop-order-limit-type.js';


export class DealLimitsGeneral implements flatbuffers.IUnpackableObject<DealLimitsGeneralT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DealLimitsGeneral {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDealLimitsGeneral(bb:flatbuffers.ByteBuffer, obj?:DealLimitsGeneral):DealLimitsGeneral {
  return (obj || new DealLimitsGeneral()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDealLimitsGeneral(bb:flatbuffers.ByteBuffer, obj?:DealLimitsGeneral):DealLimitsGeneral {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DealLimitsGeneral()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dealId(obj?:DealId):DealId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealId()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealAmount(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealStopOrderLimitType():StopOrderLimitType {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : StopOrderLimitType.Amount;
}

profitabilityQuote(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

isProfitAreaHigher():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

isTrailing():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

dealStopOut(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealDirection():DealDirection {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : DealDirection.Uninitialized;
}

dealCurrencyLetter():string|null
dealCurrencyLetter(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
dealCurrencyLetter(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

dealOpenValue(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealMultiplier(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

dealCommission(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startDealLimitsGeneral(builder:flatbuffers.Builder) {
  builder.startObject(12);
}

static addDealId(builder:flatbuffers.Builder, dealIdOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, dealIdOffset, 0);
}

static addDealAmount(builder:flatbuffers.Builder, dealAmountOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, dealAmountOffset, 0);
}

static addDealStopOrderLimitType(builder:flatbuffers.Builder, dealStopOrderLimitType:StopOrderLimitType) {
  builder.addFieldInt32(2, dealStopOrderLimitType, StopOrderLimitType.Amount);
}

static addProfitabilityQuote(builder:flatbuffers.Builder, profitabilityQuoteOffset:flatbuffers.Offset) {
  builder.addFieldStruct(3, profitabilityQuoteOffset, 0);
}

static addIsProfitAreaHigher(builder:flatbuffers.Builder, isProfitAreaHigher:boolean) {
  builder.addFieldInt8(4, +isProfitAreaHigher, +false);
}

static addIsTrailing(builder:flatbuffers.Builder, isTrailing:boolean) {
  builder.addFieldInt8(5, +isTrailing, +false);
}

static addDealStopOut(builder:flatbuffers.Builder, dealStopOutOffset:flatbuffers.Offset) {
  builder.addFieldStruct(6, dealStopOutOffset, 0);
}

static addDealDirection(builder:flatbuffers.Builder, dealDirection:DealDirection) {
  builder.addFieldInt32(7, dealDirection, DealDirection.Uninitialized);
}

static addDealCurrencyLetter(builder:flatbuffers.Builder, dealCurrencyLetterOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, dealCurrencyLetterOffset, 0);
}

static addDealOpenValue(builder:flatbuffers.Builder, dealOpenValueOffset:flatbuffers.Offset) {
  builder.addFieldStruct(9, dealOpenValueOffset, 0);
}

static addDealMultiplier(builder:flatbuffers.Builder, dealMultiplierOffset:flatbuffers.Offset) {
  builder.addFieldStruct(10, dealMultiplierOffset, 0);
}

static addDealCommission(builder:flatbuffers.Builder, dealCommissionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(11, dealCommissionOffset, 0);
}

static endDealLimitsGeneral(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // deal_id
  builder.requiredField(offset, 6) // deal_amount
  builder.requiredField(offset, 10) // profitability_quote
  builder.requiredField(offset, 16) // deal_stop_out
  builder.requiredField(offset, 20) // deal_currency_letter
  builder.requiredField(offset, 22) // deal_open_value
  builder.requiredField(offset, 24) // deal_multiplier
  builder.requiredField(offset, 26) // deal_commission
  return offset;
}


unpack(): DealLimitsGeneralT {
  return new DealLimitsGeneralT(
    (this.dealId() !== null ? this.dealId()!.unpack() : null),
    (this.dealAmount() !== null ? this.dealAmount()!.unpack() : null),
    this.dealStopOrderLimitType(),
    (this.profitabilityQuote() !== null ? this.profitabilityQuote()!.unpack() : null),
    this.isProfitAreaHigher(),
    this.isTrailing(),
    (this.dealStopOut() !== null ? this.dealStopOut()!.unpack() : null),
    this.dealDirection(),
    this.dealCurrencyLetter(),
    (this.dealOpenValue() !== null ? this.dealOpenValue()!.unpack() : null),
    (this.dealMultiplier() !== null ? this.dealMultiplier()!.unpack() : null),
    (this.dealCommission() !== null ? this.dealCommission()!.unpack() : null)
  );
}


unpackTo(_o: DealLimitsGeneralT): void {
  _o.dealId = (this.dealId() !== null ? this.dealId()!.unpack() : null);
  _o.dealAmount = (this.dealAmount() !== null ? this.dealAmount()!.unpack() : null);
  _o.dealStopOrderLimitType = this.dealStopOrderLimitType();
  _o.profitabilityQuote = (this.profitabilityQuote() !== null ? this.profitabilityQuote()!.unpack() : null);
  _o.isProfitAreaHigher = this.isProfitAreaHigher();
  _o.isTrailing = this.isTrailing();
  _o.dealStopOut = (this.dealStopOut() !== null ? this.dealStopOut()!.unpack() : null);
  _o.dealDirection = this.dealDirection();
  _o.dealCurrencyLetter = this.dealCurrencyLetter();
  _o.dealOpenValue = (this.dealOpenValue() !== null ? this.dealOpenValue()!.unpack() : null);
  _o.dealMultiplier = (this.dealMultiplier() !== null ? this.dealMultiplier()!.unpack() : null);
  _o.dealCommission = (this.dealCommission() !== null ? this.dealCommission()!.unpack() : null);
}
}

export class DealLimitsGeneralT implements flatbuffers.IGeneratedObject {
constructor(
  public dealId: DealIdT|null = null,
  public dealAmount: QuoteT|null = null,
  public dealStopOrderLimitType: StopOrderLimitType = StopOrderLimitType.Amount,
  public profitabilityQuote: QuoteT|null = null,
  public isProfitAreaHigher: boolean = false,
  public isTrailing: boolean = false,
  public dealStopOut: QuoteT|null = null,
  public dealDirection: DealDirection = DealDirection.Uninitialized,
  public dealCurrencyLetter: string|Uint8Array|null = null,
  public dealOpenValue: QuoteT|null = null,
  public dealMultiplier: QuoteT|null = null,
  public dealCommission: QuoteT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const dealCurrencyLetter = (this.dealCurrencyLetter !== null ? builder.createString(this.dealCurrencyLetter!) : 0);

  DealLimitsGeneral.startDealLimitsGeneral(builder);
  DealLimitsGeneral.addDealId(builder, (this.dealId !== null ? this.dealId!.pack(builder) : 0));
  DealLimitsGeneral.addDealAmount(builder, (this.dealAmount !== null ? this.dealAmount!.pack(builder) : 0));
  DealLimitsGeneral.addDealStopOrderLimitType(builder, this.dealStopOrderLimitType);
  DealLimitsGeneral.addProfitabilityQuote(builder, (this.profitabilityQuote !== null ? this.profitabilityQuote!.pack(builder) : 0));
  DealLimitsGeneral.addIsProfitAreaHigher(builder, this.isProfitAreaHigher);
  DealLimitsGeneral.addIsTrailing(builder, this.isTrailing);
  DealLimitsGeneral.addDealStopOut(builder, (this.dealStopOut !== null ? this.dealStopOut!.pack(builder) : 0));
  DealLimitsGeneral.addDealDirection(builder, this.dealDirection);
  DealLimitsGeneral.addDealCurrencyLetter(builder, dealCurrencyLetter);
  DealLimitsGeneral.addDealOpenValue(builder, (this.dealOpenValue !== null ? this.dealOpenValue!.pack(builder) : 0));
  DealLimitsGeneral.addDealMultiplier(builder, (this.dealMultiplier !== null ? this.dealMultiplier!.pack(builder) : 0));
  DealLimitsGeneral.addDealCommission(builder, (this.dealCommission !== null ? this.dealCommission!.pack(builder) : 0));

  return DealLimitsGeneral.endDealLimitsGeneral(builder);
}
}
