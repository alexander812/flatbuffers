// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { ColorTableT } from '../../milky/colors/color-table.js';
import { ColorTable } from '../../milky/colors/color-table.js';

export class ColorScheme implements flatbuffers.IUnpackableObject<ColorSchemeT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): ColorScheme {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsColorScheme(bb: flatbuffers.ByteBuffer, obj?: ColorScheme): ColorScheme {
    return (obj || new ColorScheme()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsColorScheme(bb: flatbuffers.ByteBuffer, obj?: ColorScheme): ColorScheme {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new ColorScheme()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  colorTable(obj?: ColorTable): ColorTable | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new ColorTable()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
  }

  borderEnabled(): boolean {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
  }

  static startColorScheme(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addColorTable(builder: flatbuffers.Builder, colorTableOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, colorTableOffset, 0);
  }

  static addBorderEnabled(builder: flatbuffers.Builder, borderEnabled: boolean) {
    builder.addFieldInt8(1, +borderEnabled, +false);
  }

  static endColorScheme(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // color_table
    return offset;
  }

  static createColorScheme(
    builder: flatbuffers.Builder,
    colorTableOffset: flatbuffers.Offset,
    borderEnabled: boolean,
  ): flatbuffers.Offset {
    ColorScheme.startColorScheme(builder);
    ColorScheme.addColorTable(builder, colorTableOffset);
    ColorScheme.addBorderEnabled(builder, borderEnabled);
    return ColorScheme.endColorScheme(builder);
  }

  unpack(): ColorSchemeT {
    return new ColorSchemeT(this.colorTable() !== null ? this.colorTable()!.unpack() : null, this.borderEnabled());
  }

  unpackTo(_o: ColorSchemeT): void {
    _o.colorTable = this.colorTable() !== null ? this.colorTable()!.unpack() : null;
    _o.borderEnabled = this.borderEnabled();
  }
}

export class ColorSchemeT implements flatbuffers.IGeneratedObject {
  constructor(public colorTable: ColorTableT | null = null, public borderEnabled: boolean = false) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const colorTable = this.colorTable !== null ? this.colorTable.pack(builder) : 0;

    return ColorScheme.createColorScheme(builder, colorTable, this.borderEnabled);
  }
}
