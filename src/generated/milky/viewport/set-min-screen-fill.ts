// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class SetMinScreenFill implements flatbuffers.IUnpackableObject<SetMinScreenFillT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): SetMinScreenFill {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSetMinScreenFill(bb: flatbuffers.ByteBuffer, obj?: SetMinScreenFill): SetMinScreenFill {
    return (obj || new SetMinScreenFill()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSetMinScreenFill(bb: flatbuffers.ByteBuffer, obj?: SetMinScreenFill): SetMinScreenFill {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SetMinScreenFill()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  minimalScreenFeelRate(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
  }

  static startSetMinScreenFill(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addMinimalScreenFeelRate(builder: flatbuffers.Builder, minimalScreenFeelRate: number) {
    builder.addFieldFloat32(0, minimalScreenFeelRate, 0.0);
  }

  static endSetMinScreenFill(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createSetMinScreenFill(builder: flatbuffers.Builder, minimalScreenFeelRate: number): flatbuffers.Offset {
    SetMinScreenFill.startSetMinScreenFill(builder);
    SetMinScreenFill.addMinimalScreenFeelRate(builder, minimalScreenFeelRate);
    return SetMinScreenFill.endSetMinScreenFill(builder);
  }

  unpack(): SetMinScreenFillT {
    return new SetMinScreenFillT(this.minimalScreenFeelRate());
  }

  unpackTo(_o: SetMinScreenFillT): void {
    _o.minimalScreenFeelRate = this.minimalScreenFeelRate();
  }
}

export class SetMinScreenFillT implements flatbuffers.IGeneratedObject {
  constructor(public minimalScreenFeelRate: number = 0.0) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return SetMinScreenFill.createSetMinScreenFill(builder, this.minimalScreenFeelRate);
  }
}
