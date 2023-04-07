// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DrawingModel, DrawingModelT } from '../../milky/drawing/drawing-model.js';


export class CreateDrawingMethod implements flatbuffers.IUnpackableObject<CreateDrawingMethodT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CreateDrawingMethod {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCreateDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:CreateDrawingMethod):CreateDrawingMethod {
  return (obj || new CreateDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCreateDrawingMethod(bb:flatbuffers.ByteBuffer, obj?:CreateDrawingMethod):CreateDrawingMethod {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CreateDrawingMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

model(obj?:DrawingModel):DrawingModel|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DrawingModel()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startCreateDrawingMethod(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addModel(builder:flatbuffers.Builder, modelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, modelOffset, 0);
}

static endCreateDrawingMethod(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // model
  return offset;
}

static createCreateDrawingMethod(builder:flatbuffers.Builder, modelOffset:flatbuffers.Offset):flatbuffers.Offset {
  CreateDrawingMethod.startCreateDrawingMethod(builder);
  CreateDrawingMethod.addModel(builder, modelOffset);
  return CreateDrawingMethod.endCreateDrawingMethod(builder);
}

unpack(): CreateDrawingMethodT {
  return new CreateDrawingMethodT(
    (this.model() !== null ? this.model()!.unpack() : null)
  );
}


unpackTo(_o: CreateDrawingMethodT): void {
  _o.model = (this.model() !== null ? this.model()!.unpack() : null);
}
}

export class CreateDrawingMethodT implements flatbuffers.IGeneratedObject {
constructor(
  public model: DrawingModelT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const model = (this.model !== null ? this.model!.pack(builder) : 0);

  return CreateDrawingMethod.createCreateDrawingMethod(builder,
    model
  );
}
}
