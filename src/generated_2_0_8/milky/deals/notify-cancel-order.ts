// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DealId, DealIdT } from '../../milky/model/deal/deal-id';


export class NotifyCancelOrder {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):NotifyCancelOrder {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNotifyCancelOrder(bb:flatbuffers.ByteBuffer, obj?:NotifyCancelOrder):NotifyCancelOrder {
  return (obj || new NotifyCancelOrder()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNotifyCancelOrder(bb:flatbuffers.ByteBuffer, obj?:NotifyCancelOrder):NotifyCancelOrder {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new NotifyCancelOrder()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:DealId):DealId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DealId()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startNotifyCancelOrder(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, idOffset, 0);
}

static endNotifyCancelOrder(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // id
  return offset;
}

static createNotifyCancelOrder(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  NotifyCancelOrder.startNotifyCancelOrder(builder);
  NotifyCancelOrder.addId(builder, idOffset);
  return NotifyCancelOrder.endNotifyCancelOrder(builder);
}

unpack(): NotifyCancelOrderT {
  return new NotifyCancelOrderT(
    (this.id() !== null ? this.id()!.unpack() : null)
  );
}


unpackTo(_o: NotifyCancelOrderT): void {
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
}
}

export class NotifyCancelOrderT {
constructor(
  public id: DealIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return NotifyCancelOrder.createNotifyCancelOrder(builder,
    (this.id !== null ? this.id!.pack(builder) : 0)
  );
}
}
