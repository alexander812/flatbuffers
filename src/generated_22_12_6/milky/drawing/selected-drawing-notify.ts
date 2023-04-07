// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DrawingId, DrawingIdT } from '../../milky/drawing/drawing-id.js';


export class SelectedDrawingNotify implements flatbuffers.IUnpackableObject<SelectedDrawingNotifyT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SelectedDrawingNotify {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSelectedDrawingNotify(bb:flatbuffers.ByteBuffer, obj?:SelectedDrawingNotify):SelectedDrawingNotify {
  return (obj || new SelectedDrawingNotify()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSelectedDrawingNotify(bb:flatbuffers.ByteBuffer, obj?:SelectedDrawingNotify):SelectedDrawingNotify {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SelectedDrawingNotify()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:DrawingId):DrawingId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DrawingId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startSelectedDrawingNotify(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endSelectedDrawingNotify(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // id
  return offset;
}

static createSelectedDrawingNotify(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  SelectedDrawingNotify.startSelectedDrawingNotify(builder);
  SelectedDrawingNotify.addId(builder, idOffset);
  return SelectedDrawingNotify.endSelectedDrawingNotify(builder);
}

unpack(): SelectedDrawingNotifyT {
  return new SelectedDrawingNotifyT(
    (this.id() !== null ? this.id()!.unpack() : null)
  );
}


unpackTo(_o: SelectedDrawingNotifyT): void {
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
}
}

export class SelectedDrawingNotifyT implements flatbuffers.IGeneratedObject {
constructor(
  public id: DrawingIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? this.id!.pack(builder) : 0);

  return SelectedDrawingNotify.createSelectedDrawingNotify(builder,
    id
  );
}
}
