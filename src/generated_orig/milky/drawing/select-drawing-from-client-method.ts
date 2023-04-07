// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { DrawingIdT } from '../../milky/drawing/drawing-id.js';
import { DrawingId } from '../../milky/drawing/drawing-id.js';

export class SelectDrawingFromClientMethod implements flatbuffers.IUnpackableObject<SelectDrawingFromClientMethodT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): SelectDrawingFromClientMethod {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSelectDrawingFromClientMethod(
    bb: flatbuffers.ByteBuffer,
    obj?: SelectDrawingFromClientMethod,
  ): SelectDrawingFromClientMethod {
    return (obj || new SelectDrawingFromClientMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSelectDrawingFromClientMethod(
    bb: flatbuffers.ByteBuffer,
    obj?: SelectDrawingFromClientMethod,
  ): SelectDrawingFromClientMethod {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SelectDrawingFromClientMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  id(obj?: DrawingId): DrawingId | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new DrawingId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
  }

  static startSelectDrawingFromClientMethod(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, idOffset, 0);
  }

  static endSelectDrawingFromClientMethod(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // id
    return offset;
  }

  static createSelectDrawingFromClientMethod(
    builder: flatbuffers.Builder,
    idOffset: flatbuffers.Offset,
  ): flatbuffers.Offset {
    SelectDrawingFromClientMethod.startSelectDrawingFromClientMethod(builder);
    SelectDrawingFromClientMethod.addId(builder, idOffset);
    return SelectDrawingFromClientMethod.endSelectDrawingFromClientMethod(builder);
  }

  unpack(): SelectDrawingFromClientMethodT {
    return new SelectDrawingFromClientMethodT(this.id() !== null ? this.id()!.unpack() : null);
  }

  unpackTo(_o: SelectDrawingFromClientMethodT): void {
    _o.id = this.id() !== null ? this.id()!.unpack() : null;
  }
}

export class SelectDrawingFromClientMethodT implements flatbuffers.IGeneratedObject {
  constructor(public id: DrawingIdT | null = null) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const id = this.id !== null ? this.id.pack(builder) : 0;

    return SelectDrawingFromClientMethod.createSelectDrawingFromClientMethod(builder, id);
  }
}