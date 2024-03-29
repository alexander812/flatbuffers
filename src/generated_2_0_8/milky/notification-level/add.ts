// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../milky/model/quote';
import { NotificationLevelId, NotificationLevelIdT } from '../../milky/notification-level/notification-level-id';


export class Add {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Add {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAdd(bb:flatbuffers.ByteBuffer, obj?:Add):Add {
  return (obj || new Add()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAdd(bb:flatbuffers.ByteBuffer, obj?:Add):Add {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Add()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id(obj?:NotificationLevelId):NotificationLevelId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new NotificationLevelId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

quote(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startAdd(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addQuote(builder:flatbuffers.Builder, quoteOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, quoteOffset, 0);
}

static endAdd(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // id
  builder.requiredField(offset, 6) // quote
  return offset;
}


unpack(): AddT {
  return new AddT(
    (this.id() !== null ? this.id()!.unpack() : null),
    (this.quote() !== null ? this.quote()!.unpack() : null)
  );
}


unpackTo(_o: AddT): void {
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
  _o.quote = (this.quote() !== null ? this.quote()!.unpack() : null);
}
}

export class AddT {
constructor(
  public id: NotificationLevelIdT|null = null,
  public quote: QuoteT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? this.id!.pack(builder) : 0);

  Add.startAdd(builder);
  Add.addId(builder, id);
  Add.addQuote(builder, (this.quote !== null ? this.quote!.pack(builder) : 0));

  return Add.endAdd(builder);
}
}
