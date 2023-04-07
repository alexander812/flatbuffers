// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class VerticalZoomEnabled implements flatbuffers.IUnpackableObject<VerticalZoomEnabledT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):VerticalZoomEnabled {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsVerticalZoomEnabled(bb:flatbuffers.ByteBuffer, obj?:VerticalZoomEnabled):VerticalZoomEnabled {
  return (obj || new VerticalZoomEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsVerticalZoomEnabled(bb:flatbuffers.ByteBuffer, obj?:VerticalZoomEnabled):VerticalZoomEnabled {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new VerticalZoomEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

enable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startVerticalZoomEnabled(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addEnable(builder:flatbuffers.Builder, enable:boolean) {
  builder.addFieldInt8(0, +enable, +false);
}

static endVerticalZoomEnabled(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createVerticalZoomEnabled(builder:flatbuffers.Builder, enable:boolean):flatbuffers.Offset {
  VerticalZoomEnabled.startVerticalZoomEnabled(builder);
  VerticalZoomEnabled.addEnable(builder, enable);
  return VerticalZoomEnabled.endVerticalZoomEnabled(builder);
}

unpack(): VerticalZoomEnabledT {
  return new VerticalZoomEnabledT(
    this.enable()
  );
}


unpackTo(_o: VerticalZoomEnabledT): void {
  _o.enable = this.enable();
}
}

export class VerticalZoomEnabledT implements flatbuffers.IGeneratedObject {
constructor(
  public enable: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return VerticalZoomEnabled.createVerticalZoomEnabled(builder,
    this.enable
  );
}
}
