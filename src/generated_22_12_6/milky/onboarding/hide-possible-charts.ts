// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class HidePossibleCharts implements flatbuffers.IUnpackableObject<HidePossibleChartsT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HidePossibleCharts {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHidePossibleCharts(bb:flatbuffers.ByteBuffer, obj?:HidePossibleCharts):HidePossibleCharts {
  return (obj || new HidePossibleCharts()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHidePossibleCharts(bb:flatbuffers.ByteBuffer, obj?:HidePossibleCharts):HidePossibleCharts {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HidePossibleCharts()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startHidePossibleCharts(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endHidePossibleCharts(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHidePossibleCharts(builder:flatbuffers.Builder):flatbuffers.Offset {
  HidePossibleCharts.startHidePossibleCharts(builder);
  return HidePossibleCharts.endHidePossibleCharts(builder);
}

unpack(): HidePossibleChartsT {
  return new HidePossibleChartsT();
}


unpackTo(_o: HidePossibleChartsT): void {}
}

export class HidePossibleChartsT implements flatbuffers.IGeneratedObject {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return HidePossibleCharts.createHidePossibleCharts(builder);
}
}
