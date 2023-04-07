// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class ProfitScaleDealCommission {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ProfitScaleDealCommission {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsProfitScaleDealCommission(bb:flatbuffers.ByteBuffer, obj?:ProfitScaleDealCommission):ProfitScaleDealCommission {
  return (obj || new ProfitScaleDealCommission()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsProfitScaleDealCommission(bb:flatbuffers.ByteBuffer, obj?:ProfitScaleDealCommission):ProfitScaleDealCommission {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ProfitScaleDealCommission()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

commission():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startProfitScaleDealCommission(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addCommission(builder:flatbuffers.Builder, commission:number) {
  builder.addFieldFloat64(0, commission, 0.0);
}

static endProfitScaleDealCommission(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createProfitScaleDealCommission(builder:flatbuffers.Builder, commission:number):flatbuffers.Offset {
  ProfitScaleDealCommission.startProfitScaleDealCommission(builder);
  ProfitScaleDealCommission.addCommission(builder, commission);
  return ProfitScaleDealCommission.endProfitScaleDealCommission(builder);
}

unpack(): ProfitScaleDealCommissionT {
  return new ProfitScaleDealCommissionT(
    this.commission()
  );
}


unpackTo(_o: ProfitScaleDealCommissionT): void {
  _o.commission = this.commission();
}
}

export class ProfitScaleDealCommissionT {
constructor(
  public commission: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ProfitScaleDealCommission.createProfitScaleDealCommission(builder,
    this.commission
  );
}
}
