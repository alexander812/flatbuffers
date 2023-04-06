// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class PrecisionFormat implements flatbuffers.IUnpackableObject<PrecisionFormatT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): PrecisionFormat {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsPrecisionFormat(bb: flatbuffers.ByteBuffer, obj?: PrecisionFormat): PrecisionFormat {
    return (obj || new PrecisionFormat()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsPrecisionFormat(bb: flatbuffers.ByteBuffer, obj?: PrecisionFormat): PrecisionFormat {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new PrecisionFormat()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  whole(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  fractional(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  static startPrecisionFormat(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addWhole(builder: flatbuffers.Builder, whole: number) {
    builder.addFieldInt32(0, whole, 0);
  }

  static addFractional(builder: flatbuffers.Builder, fractional: number) {
    builder.addFieldInt32(1, fractional, 0);
  }

  static endPrecisionFormat(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createPrecisionFormat(builder: flatbuffers.Builder, whole: number, fractional: number): flatbuffers.Offset {
    PrecisionFormat.startPrecisionFormat(builder);
    PrecisionFormat.addWhole(builder, whole);
    PrecisionFormat.addFractional(builder, fractional);
    return PrecisionFormat.endPrecisionFormat(builder);
  }

  unpack(): PrecisionFormatT {
    return new PrecisionFormatT(this.whole(), this.fractional());
  }

  unpackTo(_o: PrecisionFormatT): void {
    _o.whole = this.whole();
    _o.fractional = this.fractional();
  }
}

export class PrecisionFormatT implements flatbuffers.IGeneratedObject {
  constructor(public whole: number = 0, public fractional: number = 0) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return PrecisionFormat.createPrecisionFormat(builder, this.whole, this.fractional);
  }
}
