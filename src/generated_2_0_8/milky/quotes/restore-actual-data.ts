// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class RestoreActualData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RestoreActualData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRestoreActualData(bb:flatbuffers.ByteBuffer, obj?:RestoreActualData):RestoreActualData {
  return (obj || new RestoreActualData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRestoreActualData(bb:flatbuffers.ByteBuffer, obj?:RestoreActualData):RestoreActualData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RestoreActualData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startRestoreActualData(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endRestoreActualData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRestoreActualData(builder:flatbuffers.Builder):flatbuffers.Offset {
  RestoreActualData.startRestoreActualData(builder);
  return RestoreActualData.endRestoreActualData(builder);
}

unpack(): RestoreActualDataT {
  return new RestoreActualDataT();
}


unpackTo(_o: RestoreActualDataT): void {}
}

export class RestoreActualDataT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return RestoreActualData.createRestoreActualData(builder);
}
}
