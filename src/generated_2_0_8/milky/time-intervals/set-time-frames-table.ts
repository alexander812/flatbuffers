// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TimeFrame, TimeFrameT } from '../../milky/time-intervals/time-frame';


export class SetTimeFramesTable {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetTimeFramesTable {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetTimeFramesTable(bb:flatbuffers.ByteBuffer, obj?:SetTimeFramesTable):SetTimeFramesTable {
  return (obj || new SetTimeFramesTable()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetTimeFramesTable(bb:flatbuffers.ByteBuffer, obj?:SetTimeFramesTable):SetTimeFramesTable {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetTimeFramesTable()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

timeFrameTable(index: number, obj?:TimeFrame):TimeFrame|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TimeFrame()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

timeFrameTableLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSetTimeFramesTable(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTimeFrameTable(builder:flatbuffers.Builder, timeFrameTableOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, timeFrameTableOffset, 0);
}

static createTimeFrameTableVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTimeFrameTableVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSetTimeFramesTable(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // time_frame_table
  return offset;
}

static createSetTimeFramesTable(builder:flatbuffers.Builder, timeFrameTableOffset:flatbuffers.Offset):flatbuffers.Offset {
  SetTimeFramesTable.startSetTimeFramesTable(builder);
  SetTimeFramesTable.addTimeFrameTable(builder, timeFrameTableOffset);
  return SetTimeFramesTable.endSetTimeFramesTable(builder);
}

unpack(): SetTimeFramesTableT {
  return new SetTimeFramesTableT(
    this.bb!.createObjList(this.timeFrameTable.bind(this), this.timeFrameTableLength())
  );
}


unpackTo(_o: SetTimeFramesTableT): void {
  _o.timeFrameTable = this.bb!.createObjList(this.timeFrameTable.bind(this), this.timeFrameTableLength());
}
}

export class SetTimeFramesTableT {
constructor(
  public timeFrameTable: (TimeFrameT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const timeFrameTable = SetTimeFramesTable.createTimeFrameTableVector(builder, builder.createObjectOffsetList(this.timeFrameTable));

  return SetTimeFramesTable.createSetTimeFramesTable(builder,
    timeFrameTable
  );
}
}
