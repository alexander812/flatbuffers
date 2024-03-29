// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class IconType implements flatbuffers.IUnpackableObject<IconTypeT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):IconType {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsIconType(bb:flatbuffers.ByteBuffer, obj?:IconType):IconType {
  return (obj || new IconType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsIconType(bb:flatbuffers.ByteBuffer, obj?:IconType):IconType {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new IconType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

type():string|null
type(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
type(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startIconType(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addType(builder:flatbuffers.Builder, typeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, typeOffset, 0);
}

static endIconType(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createIconType(builder:flatbuffers.Builder, typeOffset:flatbuffers.Offset):flatbuffers.Offset {
  IconType.startIconType(builder);
  IconType.addType(builder, typeOffset);
  return IconType.endIconType(builder);
}

unpack(): IconTypeT {
  return new IconTypeT(
    this.type()
  );
}


unpackTo(_o: IconTypeT): void {
  _o.type = this.type();
}
}

export class IconTypeT implements flatbuffers.IGeneratedObject {
constructor(
  public type: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const type = (this.type !== null ? builder.createString(this.type!) : 0);

  return IconType.createIconType(builder,
    type
  );
}
}
