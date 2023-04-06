// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class Style implements flatbuffers.IUnpackableObject<StyleT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Style {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsStyle(bb: flatbuffers.ByteBuffer, obj?: Style): Style {
    return (obj || new Style()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsStyle(bb: flatbuffers.ByteBuffer, obj?: Style): Style {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Style()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  value(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  static startStyle(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addValue(builder: flatbuffers.Builder, value: number) {
    builder.addFieldInt32(0, value, 0);
  }

  static endStyle(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createStyle(builder: flatbuffers.Builder, value: number): flatbuffers.Offset {
    Style.startStyle(builder);
    Style.addValue(builder, value);
    return Style.endStyle(builder);
  }

  unpack(): StyleT {
    return new StyleT(this.value());
  }

  unpackTo(_o: StyleT): void {
    _o.value = this.value();
  }
}

export class StyleT implements flatbuffers.IGeneratedObject {
  constructor(public value: number = 0) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return Style.createStyle(builder, this.value);
  }
}
