// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { IndicatorIdT } from '../../../milky/model/indicator/indicator-id.js';
import { IndicatorId } from '../../../milky/model/indicator/indicator-id.js';
import { IndicatorType } from '../../../milky/model/indicator/indicator-type.js';

export class OscillatorArea implements flatbuffers.IUnpackableObject<OscillatorAreaT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): OscillatorArea {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsOscillatorArea(bb: flatbuffers.ByteBuffer, obj?: OscillatorArea): OscillatorArea {
    return (obj || new OscillatorArea()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsOscillatorArea(bb: flatbuffers.ByteBuffer, obj?: OscillatorArea): OscillatorArea {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new OscillatorArea()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  indicatorId(obj?: IndicatorId): IndicatorId | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new IndicatorId()).__init(this.bb_pos + offset, this.bb!) : null;
  }

  indicatorType(): IndicatorType {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : IndicatorType.Undefined;
  }

  quoteAxisWidth(): number {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
  }

  static startOscillatorArea(builder: flatbuffers.Builder) {
    builder.startObject(3);
  }

  static addIndicatorId(builder: flatbuffers.Builder, indicatorIdOffset: flatbuffers.Offset) {
    builder.addFieldStruct(0, indicatorIdOffset, 0);
  }

  static addIndicatorType(builder: flatbuffers.Builder, indicatorType: IndicatorType) {
    builder.addFieldInt8(1, indicatorType, IndicatorType.Undefined);
  }

  static addQuoteAxisWidth(builder: flatbuffers.Builder, quoteAxisWidth: number) {
    builder.addFieldFloat32(2, quoteAxisWidth, 0.0);
  }

  static endOscillatorArea(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // indicator_id
    return offset;
  }

  static createOscillatorArea(
    builder: flatbuffers.Builder,
    indicatorIdOffset: flatbuffers.Offset,
    indicatorType: IndicatorType,
    quoteAxisWidth: number,
  ): flatbuffers.Offset {
    OscillatorArea.startOscillatorArea(builder);
    OscillatorArea.addIndicatorId(builder, indicatorIdOffset);
    OscillatorArea.addIndicatorType(builder, indicatorType);
    OscillatorArea.addQuoteAxisWidth(builder, quoteAxisWidth);
    return OscillatorArea.endOscillatorArea(builder);
  }

  unpack(): OscillatorAreaT {
    return new OscillatorAreaT(
      this.indicatorId() !== null ? this.indicatorId()!.unpack() : null,
      this.indicatorType(),
      this.quoteAxisWidth(),
    );
  }

  unpackTo(_o: OscillatorAreaT): void {
    _o.indicatorId = this.indicatorId() !== null ? this.indicatorId()!.unpack() : null;
    _o.indicatorType = this.indicatorType();
    _o.quoteAxisWidth = this.quoteAxisWidth();
  }
}

export class OscillatorAreaT implements flatbuffers.IGeneratedObject {
  constructor(
    public indicatorId: IndicatorIdT | null = null,
    public indicatorType: IndicatorType = IndicatorType.Undefined,
    public quoteAxisWidth: number = 0.0,
  ) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return OscillatorArea.createOscillatorArea(
      builder,
      this.indicatorId !== null ? this.indicatorId.pack(builder) : 0,
      this.indicatorType,
      this.quoteAxisWidth,
    );
  }
}
