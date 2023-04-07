// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class TimeFrame {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TimeFrame {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTimeFrame(bb:flatbuffers.ByteBuffer, obj?:TimeFrame):TimeFrame {
  return (obj || new TimeFrame()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTimeFrame(bb:flatbuffers.ByteBuffer, obj?:TimeFrame):TimeFrame {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TimeFrame()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

timeFrame():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

timeInterval():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startTimeFrame(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addTimeFrame(builder:flatbuffers.Builder, timeFrame:number) {
  builder.addFieldInt32(0, timeFrame, 0);
}

static addTimeInterval(builder:flatbuffers.Builder, timeInterval:number) {
  builder.addFieldInt32(1, timeInterval, 0);
}

static endTimeFrame(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTimeFrame(builder:flatbuffers.Builder, timeFrame:number, timeInterval:number):flatbuffers.Offset {
  TimeFrame.startTimeFrame(builder);
  TimeFrame.addTimeFrame(builder, timeFrame);
  TimeFrame.addTimeInterval(builder, timeInterval);
  return TimeFrame.endTimeFrame(builder);
}

unpack(): TimeFrameT {
  return new TimeFrameT(
    this.timeFrame(),
    this.timeInterval()
  );
}


unpackTo(_o: TimeFrameT): void {
  _o.timeFrame = this.timeFrame();
  _o.timeInterval = this.timeInterval();
}
}

export class TimeFrameT {
constructor(
  public timeFrame: number = 0,
  public timeInterval: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return TimeFrame.createTimeFrame(builder,
    this.timeFrame,
    this.timeInterval
  );
}
}