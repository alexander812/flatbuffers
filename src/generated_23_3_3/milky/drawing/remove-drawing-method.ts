// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DrawingId, DrawingIdT } from '../../milky/drawing/drawing-id.js';


export class RemoveDrawingMethod implements flatbuffers.IUnpackableObject<RemoveDrawingMethodT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RemoveDrawingMethod {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRemoveDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:RemoveDrawingMethod):RemoveDrawingMethod {
  return (obj || new RemoveDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRemoveDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:RemoveDrawingMethod):RemoveDrawingMethod {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RemoveDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:DrawingId):DrawingId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DrawingId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startRemoveDrawingMethod(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endRemoveDrawingMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // id
  return offset;
}

static createRemoveDrawingMethod(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  RemoveDrawingMethod.startRemoveDrawingMethod(builder);
  RemoveDrawingMethod.addId(builder, idOffset);
  return RemoveDrawingMethod.endRemoveDrawingMethod(builder);
}

unpack(): RemoveDrawingMethodT {
  return new RemoveDrawingMethodT(
    (this.id() !== null ? this.id()!.unpack() : null)
  );
}


unpackTo(_o: RemoveDrawingMethodT): void {
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
}
}

export class RemoveDrawingMethodT implements flatbuffers.IGeneratedObject {
constructor(
  public id: DrawingIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? this.id!.pack(builder) : 0);

  return RemoveDrawingMethod.createRemoveDrawingMethod(builder,
    id
  );
}
}
