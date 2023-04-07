// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../milky/model/quote';
import { NotificationLevelId, NotificationLevelIdT } from '../../milky/notification-level/notification-level-id';


export class OnEdited {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):OnEdited {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOnEdited(bb:flatbuffers.ByteBuffer, obj?:OnEdited):OnEdited {
  return (obj || new OnEdited()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOnEdited(bb:flatbuffers.ByteBuffer, obj?:OnEdited):OnEdited {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new OnEdited()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

quote(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

id(obj?:NotificationLevelId):NotificationLevelId|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new NotificationLevelId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startOnEdited(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addQuote(builder:flatbuffers.Builder, quoteOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, quoteOffset, 0);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, idOffset, 0);
}

static endOnEdited(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // quote
  builder.requiredField(offset, 6) // id
  return offset;
}


unpack(): OnEditedT {
  return new OnEditedT(
    (this.quote() !== null ? this.quote()!.unpack() : null),
    (this.id() !== null ? this.id()!.unpack() : null)
  );
}


unpackTo(_o: OnEditedT): void {
  _o.quote = (this.quote() !== null ? this.quote()!.unpack() : null);
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
}
}

export class OnEditedT {
constructor(
  public quote: QuoteT|null = null,
  public id: NotificationLevelIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? this.id!.pack(builder) : 0);

  OnEdited.startOnEdited(builder);
  OnEdited.addQuote(builder, (this.quote !== null ? this.quote!.pack(builder) : 0));
  OnEdited.addId(builder, id);

  return OnEdited.endOnEdited(builder);
}
}