// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Amount, AmountT } from '../../../milky/model/amount';
import { Quote, QuoteT } from '../../../milky/model/quote';
import { Time, TimeT } from '../../../milky/model/time';
import { DealDirection } from '../../../milky/model/deal/deal-direction';
import { DealId, DealIdT } from '../../../milky/model/deal/deal-id';
import { DealType } from '../../../milky/model/deal/deal-type';
import { LabelProperties, LabelPropertiesT } from '../../../milky/model/deal/label-properties';
import { ProgressBarType } from '../../../milky/model/deal/progress-bar-type';
import { TooltipProperties, TooltipPropertiesT } from '../../../milky/model/deal/tooltip-properties';
import { TradingMechanics } from '../../../milky/model/deal/trading-mechanics';


export class DealModel {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DealModel {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDealModel(bb:flatbuffers.ByteBuffer, obj?:DealModel):DealModel {
  return (obj || new DealModel()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDealModel(bb:flatbuffers.ByteBuffer, obj?:DealModel):DealModel {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DealModel()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:DealId):DealId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealId()).__init(this.bb_pos + offset, this.bb!) : null;
}

type():DealType {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : DealType.CommonRound_v3;
}

dealDirection():DealDirection {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : DealDirection.Uninitialized;
}

openQuote(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

openTime(obj?:Time):Time|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Time()).__init(this.bb_pos + offset, this.bb!) : null;
}

closeTime(obj?:Time):Time|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new Time()).__init(this.bb_pos + offset, this.bb!) : null;
}

amount(obj?:Amount):Amount|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new Amount()).__init(this.bb_pos + offset, this.bb!) : null;
}

tradingMechanics():TradingMechanics {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : TradingMechanics.Forex;
}

labelsProperties(index: number, obj?:LabelProperties):LabelProperties|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new LabelProperties()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

labelsPropertiesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

tooltipProperties(obj?:TooltipProperties):TooltipProperties|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new TooltipProperties()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

progressBar():ProgressBarType {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : ProgressBarType.No;
}

groupId():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : -1;
}

isNeedAttractToChart():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

isSelectable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
}

static startDealModel(builder:flatbuffers.Builder) {
  builder.startObject(14);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, idOffset, 0);
}

static addType(builder:flatbuffers.Builder, type:DealType) {
  builder.addFieldInt32(1, type, DealType.CommonRound_v3);
}

static addDealDirection(builder:flatbuffers.Builder, dealDirection:DealDirection) {
  builder.addFieldInt32(2, dealDirection, DealDirection.Uninitialized);
}

static addOpenQuote(builder:flatbuffers.Builder, openQuoteOffset:flatbuffers.Offset) {
  builder.addFieldStruct(3, openQuoteOffset, 0);
}

static addOpenTime(builder:flatbuffers.Builder, openTimeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(4, openTimeOffset, 0);
}

static addCloseTime(builder:flatbuffers.Builder, closeTimeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(5, closeTimeOffset, 0);
}

static addAmount(builder:flatbuffers.Builder, amountOffset:flatbuffers.Offset) {
  builder.addFieldStruct(6, amountOffset, 0);
}

static addTradingMechanics(builder:flatbuffers.Builder, tradingMechanics:TradingMechanics) {
  builder.addFieldInt32(7, tradingMechanics, TradingMechanics.Forex);
}

static addLabelsProperties(builder:flatbuffers.Builder, labelsPropertiesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, labelsPropertiesOffset, 0);
}

static createLabelsPropertiesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startLabelsPropertiesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addTooltipProperties(builder:flatbuffers.Builder, tooltipPropertiesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, tooltipPropertiesOffset, 0);
}

static addProgressBar(builder:flatbuffers.Builder, progressBar:ProgressBarType) {
  builder.addFieldInt32(10, progressBar, ProgressBarType.No);
}

static addGroupId(builder:flatbuffers.Builder, groupId:number) {
  builder.addFieldInt32(11, groupId, -1);
}

static addIsNeedAttractToChart(builder:flatbuffers.Builder, isNeedAttractToChart:boolean) {
  builder.addFieldInt8(12, +isNeedAttractToChart, +false);
}

static addIsSelectable(builder:flatbuffers.Builder, isSelectable:boolean) {
  builder.addFieldInt8(13, +isSelectable, +true);
}

static endDealModel(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // id
  builder.requiredField(offset, 10) // open_quote
  builder.requiredField(offset, 12) // open_time
  builder.requiredField(offset, 20) // labels_properties
  builder.requiredField(offset, 22) // tooltip_properties
  return offset;
}


unpack(): DealModelT {
  return new DealModelT(
    (this.id() !== null ? this.id()!.unpack() : null),
    this.type(),
    this.dealDirection(),
    (this.openQuote() !== null ? this.openQuote()!.unpack() : null),
    (this.openTime() !== null ? this.openTime()!.unpack() : null),
    (this.closeTime() !== null ? this.closeTime()!.unpack() : null),
    (this.amount() !== null ? this.amount()!.unpack() : null),
    this.tradingMechanics(),
    this.bb!.createObjList(this.labelsProperties.bind(this), this.labelsPropertiesLength()),
    (this.tooltipProperties() !== null ? this.tooltipProperties()!.unpack() : null),
    this.progressBar(),
    this.groupId(),
    this.isNeedAttractToChart(),
    this.isSelectable()
  );
}


unpackTo(_o: DealModelT): void {
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
  _o.type = this.type();
  _o.dealDirection = this.dealDirection();
  _o.openQuote = (this.openQuote() !== null ? this.openQuote()!.unpack() : null);
  _o.openTime = (this.openTime() !== null ? this.openTime()!.unpack() : null);
  _o.closeTime = (this.closeTime() !== null ? this.closeTime()!.unpack() : null);
  _o.amount = (this.amount() !== null ? this.amount()!.unpack() : null);
  _o.tradingMechanics = this.tradingMechanics();
  _o.labelsProperties = this.bb!.createObjList(this.labelsProperties.bind(this), this.labelsPropertiesLength());
  _o.tooltipProperties = (this.tooltipProperties() !== null ? this.tooltipProperties()!.unpack() : null);
  _o.progressBar = this.progressBar();
  _o.groupId = this.groupId();
  _o.isNeedAttractToChart = this.isNeedAttractToChart();
  _o.isSelectable = this.isSelectable();
}
}

export class DealModelT {
constructor(
  public id: DealIdT|null = null,
  public type: DealType = DealType.CommonRound_v3,
  public dealDirection: DealDirection = DealDirection.Uninitialized,
  public openQuote: QuoteT|null = null,
  public openTime: TimeT|null = null,
  public closeTime: TimeT|null = null,
  public amount: AmountT|null = null,
  public tradingMechanics: TradingMechanics = TradingMechanics.Forex,
  public labelsProperties: (LabelPropertiesT)[] = [],
  public tooltipProperties: TooltipPropertiesT|null = null,
  public progressBar: ProgressBarType = ProgressBarType.No,
  public groupId: number = -1,
  public isNeedAttractToChart: boolean = false,
  public isSelectable: boolean = true
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const labelsProperties = DealModel.createLabelsPropertiesVector(builder, builder.createObjectOffsetList(this.labelsProperties));
  const tooltipProperties = (this.tooltipProperties !== null ? this.tooltipProperties!.pack(builder) : 0);

  DealModel.startDealModel(builder);
  DealModel.addId(builder, (this.id !== null ? this.id!.pack(builder) : 0));
  DealModel.addType(builder, this.type);
  DealModel.addDealDirection(builder, this.dealDirection);
  DealModel.addOpenQuote(builder, (this.openQuote !== null ? this.openQuote!.pack(builder) : 0));
  DealModel.addOpenTime(builder, (this.openTime !== null ? this.openTime!.pack(builder) : 0));
  DealModel.addCloseTime(builder, (this.closeTime !== null ? this.closeTime!.pack(builder) : 0));
  DealModel.addAmount(builder, (this.amount !== null ? this.amount!.pack(builder) : 0));
  DealModel.addTradingMechanics(builder, this.tradingMechanics);
  DealModel.addLabelsProperties(builder, labelsProperties);
  DealModel.addTooltipProperties(builder, tooltipProperties);
  DealModel.addProgressBar(builder, this.progressBar);
  DealModel.addGroupId(builder, this.groupId);
  DealModel.addIsNeedAttractToChart(builder, this.isNeedAttractToChart);
  DealModel.addIsSelectable(builder, this.isSelectable);

  return DealModel.endDealModel(builder);
}
}
