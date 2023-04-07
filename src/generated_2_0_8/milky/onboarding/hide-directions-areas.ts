// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class HideDirectionsAreas {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HideDirectionsAreas {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHideDirectionsAreas(bb:flatbuffers.ByteBuffer, obj?:HideDirectionsAreas):HideDirectionsAreas {
  return (obj || new HideDirectionsAreas()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHideDirectionsAreas(bb:flatbuffers.ByteBuffer, obj?:HideDirectionsAreas):HideDirectionsAreas {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HideDirectionsAreas()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startHideDirectionsAreas(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endHideDirectionsAreas(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHideDirectionsAreas(builder:flatbuffers.Builder):flatbuffers.Offset {
  HideDirectionsAreas.startHideDirectionsAreas(builder);
  return HideDirectionsAreas.endHideDirectionsAreas(builder);
}

unpack(): HideDirectionsAreasT {
  return new HideDirectionsAreasT();
}


unpackTo(_o: HideDirectionsAreasT): void {}
}

export class HideDirectionsAreasT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return HideDirectionsAreas.createHideDirectionsAreas(builder);
}
}
