// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class NotificationLevelsEnabled implements flatbuffers.IUnpackableObject<NotificationLevelsEnabledT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):NotificationLevelsEnabled {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNotificationLevelsEnabled(bb:flatbuffers.ByteBuffer, obj?:NotificationLevelsEnabled):NotificationLevelsEnabled {
  return (obj || new NotificationLevelsEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNotificationLevelsEnabled(bb:flatbuffers.ByteBuffer, obj?:NotificationLevelsEnabled):NotificationLevelsEnabled {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new NotificationLevelsEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

enable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startNotificationLevelsEnabled(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addEnable(builder:flatbuffers.Builder, enable:boolean) {
  builder.addFieldInt8(0, +enable, +false);
}

static endNotificationLevelsEnabled(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createNotificationLevelsEnabled(builder:flatbuffers.Builder, enable:boolean):flatbuffers.Offset {
  NotificationLevelsEnabled.startNotificationLevelsEnabled(builder);
  NotificationLevelsEnabled.addEnable(builder, enable);
  return NotificationLevelsEnabled.endNotificationLevelsEnabled(builder);
}

unpack(): NotificationLevelsEnabledT {
  return new NotificationLevelsEnabledT(
    this.enable()
  );
}


unpackTo(_o: NotificationLevelsEnabledT): void {
  _o.enable = this.enable();
}
}

export class NotificationLevelsEnabledT implements flatbuffers.IGeneratedObject {
constructor(
  public enable: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return NotificationLevelsEnabled.createNotificationLevelsEnabled(builder,
    this.enable
  );
}
}
