// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class ExpirationTimeLeftToBuyLimit implements flatbuffers.IUnpackableObject<ExpirationTimeLeftToBuyLimitT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ExpirationTimeLeftToBuyLimit {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsExpirationTimeLeftToBuyLimit(bb:flatbuffers.ByteBuffer, obj?:ExpirationTimeLeftToBuyLimit):ExpirationTimeLeftToBuyLimit {
  return (obj || new ExpirationTimeLeftToBuyLimit()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsExpirationTimeLeftToBuyLimit(bb:flatbuffers.ByteBuffer, obj?:ExpirationTimeLeftToBuyLimit):ExpirationTimeLeftToBuyLimit {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ExpirationTimeLeftToBuyLimit()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

leftToClose():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startExpirationTimeLeftToBuyLimit(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addLeftToClose(builder:flatbuffers.Builder, leftToClose:number) {
  builder.addFieldInt32(0, leftToClose, 0);
}

static endExpirationTimeLeftToBuyLimit(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createExpirationTimeLeftToBuyLimit(builder:flatbuffers.Builder, leftToClose:number):flatbuffers.Offset {
  ExpirationTimeLeftToBuyLimit.startExpirationTimeLeftToBuyLimit(builder);
  ExpirationTimeLeftToBuyLimit.addLeftToClose(builder, leftToClose);
  return ExpirationTimeLeftToBuyLimit.endExpirationTimeLeftToBuyLimit(builder);
}

unpack(): ExpirationTimeLeftToBuyLimitT {
  return new ExpirationTimeLeftToBuyLimitT(
    this.leftToClose()
  );
}


unpackTo(_o: ExpirationTimeLeftToBuyLimitT): void {
  _o.leftToClose = this.leftToClose();
}
}

export class ExpirationTimeLeftToBuyLimitT implements flatbuffers.IGeneratedObject {
constructor(
  public leftToClose: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ExpirationTimeLeftToBuyLimit.createExpirationTimeLeftToBuyLimit(builder,
    this.leftToClose
  );
}
}
