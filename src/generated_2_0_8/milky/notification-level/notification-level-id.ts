// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class NotificationLevelId {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):NotificationLevelId {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNotificationLevelId(bb:flatbuffers.ByteBuffer, obj?:NotificationLevelId):NotificationLevelId {
  return (obj || new NotificationLevelId()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNotificationLevelId(bb:flatbuffers.ByteBuffer, obj?:NotificationLevelId):NotificationLevelId {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new NotificationLevelId()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startNotificationLevelId(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
}

static endNotificationLevelId(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createNotificationLevelId(builder:flatbuffers.Builder, id:number):flatbuffers.Offset {
  NotificationLevelId.startNotificationLevelId(builder);
  NotificationLevelId.addId(builder, id);
  return NotificationLevelId.endNotificationLevelId(builder);
}

unpack(): NotificationLevelIdT {
  return new NotificationLevelIdT(
    this.id()
  );
}


unpackTo(_o: NotificationLevelIdT): void {
  _o.id = this.id();
}
}

export class NotificationLevelIdT {
constructor(
  public id: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return NotificationLevelId.createNotificationLevelId(builder,
    this.id
  );
}
}