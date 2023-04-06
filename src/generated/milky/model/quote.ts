// automatically generated by the FlatBuffers compiler, do not modify

import type * as flatbuffers from 'flatbuffers';

export class Quote implements flatbuffers.IUnpackableObject<QuoteT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Quote {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  value(): number {
    return this.bb!.readFloat64(this.bb_pos);
  }

  static sizeOf(): number {
    return 8;
  }

  static createQuote(builder: flatbuffers.Builder, value: number): flatbuffers.Offset {
    builder.prep(8, 8);
    builder.writeFloat64(value);
    return builder.offset();
  }

  unpack(): QuoteT {
    return new QuoteT(this.value());
  }

  unpackTo(_o: QuoteT): void {
    _o.value = this.value();
  }
}

export class QuoteT implements flatbuffers.IGeneratedObject {
  constructor(public value: number = 0.0) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return Quote.createQuote(builder, this.value);
  }
}
