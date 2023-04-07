// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Rect, RectT } from '../../../milky/model/rect';


export class ChartArea {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ChartArea {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsChartArea(bb:flatbuffers.ByteBuffer, obj?:ChartArea):ChartArea {
  return (obj || new ChartArea()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsChartArea(bb:flatbuffers.ByteBuffer, obj?:ChartArea):ChartArea {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ChartArea()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sentimentWidth():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

quoteAxisWidth():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 * Optional: <candle_info> для зонного графика не будет (?? Может пока совсем убрать)
 */
candleInfo(obj?:Rect):Rect|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Rect()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startChartArea(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addSentimentWidth(builder:flatbuffers.Builder, sentimentWidth:number) {
  builder.addFieldFloat32(0, sentimentWidth, 0.0);
}

static addQuoteAxisWidth(builder:flatbuffers.Builder, quoteAxisWidth:number) {
  builder.addFieldFloat32(1, quoteAxisWidth, 0.0);
}

static addCandleInfo(builder:flatbuffers.Builder, candleInfoOffset:flatbuffers.Offset) {
  builder.addFieldStruct(2, candleInfoOffset, 0);
}

static endChartArea(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): ChartAreaT {
  return new ChartAreaT(
    this.sentimentWidth(),
    this.quoteAxisWidth(),
    (this.candleInfo() !== null ? this.candleInfo()!.unpack() : null)
  );
}


unpackTo(_o: ChartAreaT): void {
  _o.sentimentWidth = this.sentimentWidth();
  _o.quoteAxisWidth = this.quoteAxisWidth();
  _o.candleInfo = (this.candleInfo() !== null ? this.candleInfo()!.unpack() : null);
}
}

export class ChartAreaT {
constructor(
  public sentimentWidth: number = 0.0,
  public quoteAxisWidth: number = 0.0,
  public candleInfo: RectT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  ChartArea.startChartArea(builder);
  ChartArea.addSentimentWidth(builder, this.sentimentWidth);
  ChartArea.addQuoteAxisWidth(builder, this.quoteAxisWidth);
  ChartArea.addCandleInfo(builder, (this.candleInfo !== null ? this.candleInfo!.pack(builder) : 0));

  return ChartArea.endChartArea(builder);
}
}
