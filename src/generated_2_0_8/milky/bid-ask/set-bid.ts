// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../milky/model/quote';


export class SetBid {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetBid {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetBid(bb:flatbuffers.ByteBuffer, obj?:SetBid):SetBid {
  return (obj || new SetBid()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetBid(bb:flatbuffers.ByteBuffer, obj?:SetBid):SetBid {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetBid()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

quote(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startSetBid(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addQuote(builder:flatbuffers.Builder, quoteOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, quoteOffset, 0);
}

static endSetBid(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // quote
  return offset;
}

static createSetBid(builder:flatbuffers.Builder, quoteOffset:flatbuffers.Offset):flatbuffers.Offset {
  SetBid.startSetBid(builder);
  SetBid.addQuote(builder, quoteOffset);
  return SetBid.endSetBid(builder);
}

unpack(): SetBidT {
  return new SetBidT(
    (this.quote() !== null ? this.quote()!.unpack() : null)
  );
}


unpackTo(_o: SetBidT): void {
  _o.quote = (this.quote() !== null ? this.quote()!.unpack() : null);
}
}

export class SetBidT {
constructor(
  public quote: QuoteT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return SetBid.createSetBid(builder,
    (this.quote !== null ? this.quote!.pack(builder) : 0)
  );
}
}
