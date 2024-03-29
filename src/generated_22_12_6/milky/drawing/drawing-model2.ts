// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DrawingId, DrawingIdT } from '../../milky/drawing/drawing-id.js';
import { DrawingType } from '../../milky/drawing/drawing-type.js';


export class DrawingModel2 implements flatbuffers.IUnpackableObject<DrawingModel2T> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DrawingModel2 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDrawingModel2(bb:flatbuffers.ByteBuffer, obj?:DrawingModel2):DrawingModel2 {
  return (obj || new DrawingModel2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDrawingModel2(bb:flatbuffers.ByteBuffer, obj?:DrawingModel2):DrawingModel2 {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DrawingModel2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:DrawingId):DrawingId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DrawingId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

type():DrawingType {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : DrawingType.HorizontalLine;
}

color():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

lineWidth():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startDrawingModel2(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addType(builder:flatbuffers.Builder, type:DrawingType) {
  builder.addFieldInt32(1, type, DrawingType.HorizontalLine);
}

static addColor(builder:flatbuffers.Builder, color:number) {
  builder.addFieldInt32(2, color, 0);
}

static addLineWidth(builder:flatbuffers.Builder, lineWidth:number) {
  builder.addFieldFloat32(3, lineWidth, 0.0);
}

static endDrawingModel2(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDrawingModel2(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, type:DrawingType, color:number, lineWidth:number):flatbuffers.Offset {
  DrawingModel2.startDrawingModel2(builder);
  DrawingModel2.addId(builder, idOffset);
  DrawingModel2.addType(builder, type);
  DrawingModel2.addColor(builder, color);
  DrawingModel2.addLineWidth(builder, lineWidth);
  return DrawingModel2.endDrawingModel2(builder);
}

unpack(): DrawingModel2T {
  return new DrawingModel2T(
    (this.id() !== null ? this.id()!.unpack() : null),
    this.type(),
    this.color(),
    this.lineWidth()
  );
}


unpackTo(_o: DrawingModel2T): void {
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
  _o.type = this.type();
  _o.color = this.color();
  _o.lineWidth = this.lineWidth();
}
}

export class DrawingModel2T implements flatbuffers.IGeneratedObject {
constructor(
  public id: DrawingIdT|null = null,
  public type: DrawingType = DrawingType.HorizontalLine,
  public color: number = 0,
  public lineWidth: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? this.id!.pack(builder) : 0);

  return DrawingModel2.createDrawingModel2(builder,
    id,
    this.type,
    this.color,
    this.lineWidth
  );
}
}
