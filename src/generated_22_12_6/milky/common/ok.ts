// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class Ok implements flatbuffers.IUnpackableObject<OkT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Ok {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOk(bb:flatbuffers.ByteBuffer, obj?:Ok):Ok {
  return (obj || new Ok()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOk(bb:flatbuffers.ByteBuffer, obj?:Ok):Ok {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Ok()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startOk(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endOk(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOk(builder:flatbuffers.Builder):flatbuffers.Offset {
  Ok.startOk(builder);
  return Ok.endOk(builder);
}

unpack(): OkT {
  return new OkT();
}


unpackTo(_o: OkT): void {}
}

export class OkT implements flatbuffers.IGeneratedObject {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return Ok.createOk(builder);
}
}
