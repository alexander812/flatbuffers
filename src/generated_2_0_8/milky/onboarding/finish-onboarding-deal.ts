// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class FinishOnboardingDeal {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):FinishOnboardingDeal {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFinishOnboardingDeal(bb:flatbuffers.ByteBuffer, obj?:FinishOnboardingDeal):FinishOnboardingDeal {
  return (obj || new FinishOnboardingDeal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFinishOnboardingDeal(bb:flatbuffers.ByteBuffer, obj?:FinishOnboardingDeal):FinishOnboardingDeal {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FinishOnboardingDeal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

profit():string|null
profit(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
profit(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startFinishOnboardingDeal(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addProfit(builder:flatbuffers.Builder, profitOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, profitOffset, 0);
}

static endFinishOnboardingDeal(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createFinishOnboardingDeal(builder:flatbuffers.Builder, profitOffset:flatbuffers.Offset):flatbuffers.Offset {
  FinishOnboardingDeal.startFinishOnboardingDeal(builder);
  FinishOnboardingDeal.addProfit(builder, profitOffset);
  return FinishOnboardingDeal.endFinishOnboardingDeal(builder);
}

unpack(): FinishOnboardingDealT {
  return new FinishOnboardingDealT(
    this.profit()
  );
}


unpackTo(_o: FinishOnboardingDealT): void {
  _o.profit = this.profit();
}
}

export class FinishOnboardingDealT {
constructor(
  public profit: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const profit = (this.profit !== null ? builder.createString(this.profit!) : 0);

  return FinishOnboardingDeal.createFinishOnboardingDeal(builder,
    profit
  );
}
}
