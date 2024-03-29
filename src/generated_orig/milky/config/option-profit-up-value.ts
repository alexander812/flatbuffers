// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class OptionProfitUpValue implements flatbuffers.IUnpackableObject<OptionProfitUpValueT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): OptionProfitUpValue {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsOptionProfitUpValue(bb: flatbuffers.ByteBuffer, obj?: OptionProfitUpValue): OptionProfitUpValue {
    return (obj || new OptionProfitUpValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsOptionProfitUpValue(
    bb: flatbuffers.ByteBuffer,
    obj?: OptionProfitUpValue,
  ): OptionProfitUpValue {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new OptionProfitUpValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  value(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  static startOptionProfitUpValue(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addValue(builder: flatbuffers.Builder, value: number) {
    builder.addFieldInt32(0, value, 0);
  }

  static endOptionProfitUpValue(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createOptionProfitUpValue(builder: flatbuffers.Builder, value: number): flatbuffers.Offset {
    OptionProfitUpValue.startOptionProfitUpValue(builder);
    OptionProfitUpValue.addValue(builder, value);
    return OptionProfitUpValue.endOptionProfitUpValue(builder);
  }

  unpack(): OptionProfitUpValueT {
    return new OptionProfitUpValueT(this.value());
  }

  unpackTo(_o: OptionProfitUpValueT): void {
    _o.value = this.value();
  }
}

export class OptionProfitUpValueT implements flatbuffers.IGeneratedObject {
  constructor(public value: number = 0) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return OptionProfitUpValue.createOptionProfitUpValue(builder, this.value);
  }
}
