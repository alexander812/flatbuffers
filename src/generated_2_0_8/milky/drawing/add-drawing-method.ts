// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DrawingModel, DrawingModelT } from '../../milky/drawing/drawing-model';


export class AddDrawingMethod {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AddDrawingMethod {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAddDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:AddDrawingMethod):AddDrawingMethod {
  return (obj || new AddDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAddDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:AddDrawingMethod):AddDrawingMethod {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AddDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

model(obj?:DrawingModel):DrawingModel|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DrawingModel()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startAddDrawingMethod(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addModel(builder:flatbuffers.Builder, modelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, modelOffset, 0);
}

static endAddDrawingMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // model
  return offset;
}

static createAddDrawingMethod(builder:flatbuffers.Builder, modelOffset:flatbuffers.Offset):flatbuffers.Offset {
  AddDrawingMethod.startAddDrawingMethod(builder);
  AddDrawingMethod.addModel(builder, modelOffset);
  return AddDrawingMethod.endAddDrawingMethod(builder);
}

unpack(): AddDrawingMethodT {
  return new AddDrawingMethodT(
    (this.model() !== null ? this.model()!.unpack() : null)
  );
}


unpackTo(_o: AddDrawingMethodT): void {
  _o.model = (this.model() !== null ? this.model()!.unpack() : null);
}
}

export class AddDrawingMethodT {
constructor(
  public model: DrawingModelT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const model = (this.model !== null ? this.model!.pack(builder) : 0);

  return AddDrawingMethod.createAddDrawingMethod(builder,
    model
  );
}
}
