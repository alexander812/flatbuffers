// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../milky/model/quote.js';


export class OnAdded implements flatbuffers.IUnpackableObject<OnAddedT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):OnAdded {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOnAdded(bb:flatbuffers.ByteBuffer, obj?:OnAdded):OnAdded {
  return (obj || new OnAdded()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOnAdded(bb:flatbuffers.ByteBuffer, obj?:OnAdded):OnAdded {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new OnAdded()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

quote(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startOnAdded(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addQuote(builder:flatbuffers.Builder, quoteOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, quoteOffset, 0);
}

static endOnAdded(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // quote
  return offset;
}

static createOnAdded(builder:flatbuffers.Builder, quoteOffset:flatbuffers.Offset):flatbuffers.Offset {
  OnAdded.startOnAdded(builder);
  OnAdded.addQuote(builder, quoteOffset);
  return OnAdded.endOnAdded(builder);
}

unpack(): OnAddedT {
  return new OnAddedT(
    (this.quote() !== null ? this.quote()!.unpack() : null)
  );
}


unpackTo(_o: OnAddedT): void {
  _o.quote = (this.quote() !== null ? this.quote()!.unpack() : null);
}
}

export class OnAddedT implements flatbuffers.IGeneratedObject {
constructor(
  public quote: QuoteT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return OnAdded.createOnAdded(builder,
    (this.quote !== null ? this.quote!.pack(builder) : 0)
  );
}
}