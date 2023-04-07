// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { LibTypeValues } from '../../milky/config/lib-type-values';


export class LibType {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):LibType {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsLibType(bb:flatbuffers.ByteBuffer, obj?:LibType):LibType {
  return (obj || new LibType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsLibType(bb:flatbuffers.ByteBuffer, obj?:LibType):LibType {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LibType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

libType():LibTypeValues {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : LibTypeValues.Forex;
}

static startLibType(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addLibType(builder:flatbuffers.Builder, libType:LibTypeValues) {
  builder.addFieldInt32(0, libType, LibTypeValues.Forex);
}

static endLibType(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createLibType(builder:flatbuffers.Builder, libType:LibTypeValues):flatbuffers.Offset {
  LibType.startLibType(builder);
  LibType.addLibType(builder, libType);
  return LibType.endLibType(builder);
}

unpack(): LibTypeT {
  return new LibTypeT(
    this.libType()
  );
}


unpackTo(_o: LibTypeT): void {
  _o.libType = this.libType();
}
}

export class LibTypeT {
constructor(
  public libType: LibTypeValues = LibTypeValues.Forex
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return LibType.createLibType(builder,
    this.libType
  );
}
}