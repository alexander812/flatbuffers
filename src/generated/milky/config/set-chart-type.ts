// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ChartType } from '../../milky/config/chart-type.js';

export class SetChartType implements flatbuffers.IUnpackableObject<SetChartTypeT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): SetChartType {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSetChartType(bb: flatbuffers.ByteBuffer, obj?: SetChartType): SetChartType {
    return (obj || new SetChartType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSetChartType(bb: flatbuffers.ByteBuffer, obj?: SetChartType): SetChartType {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SetChartType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  chartType(): ChartType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : ChartType.Unknown;
  }

  static startSetChartType(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addChartType(builder: flatbuffers.Builder, chartType: ChartType) {
    builder.addFieldInt32(0, chartType, ChartType.Unknown);
  }

  static endSetChartType(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createSetChartType(builder: flatbuffers.Builder, chartType: ChartType): flatbuffers.Offset {
    SetChartType.startSetChartType(builder);
    SetChartType.addChartType(builder, chartType);
    return SetChartType.endSetChartType(builder);
  }

  unpack(): SetChartTypeT {
    return new SetChartTypeT(this.chartType());
  }

  unpackTo(_o: SetChartTypeT): void {
    _o.chartType = this.chartType();
  }
}

export class SetChartTypeT implements flatbuffers.IGeneratedObject {
  constructor(public chartType: ChartType = ChartType.Unknown) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return SetChartType.createSetChartType(builder, this.chartType);
  }
}
