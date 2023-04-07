// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Strike, StrikeT } from '../../milky/model/strike/strike.js';


export class SetStrikes implements flatbuffers.IUnpackableObject<SetStrikesT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetStrikes {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetStrikes(bb:flatbuffers.ByteBuffer, obj?:SetStrikes):SetStrikes {
  return (obj || new SetStrikes()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetStrikes(bb:flatbuffers.ByteBuffer, obj?:SetStrikes):SetStrikes {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetStrikes()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

strikes(index: number, obj?:Strike):Strike|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Strike()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

strikesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSetStrikes(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addStrikes(builder:flatbuffers.Builder, strikesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, strikesOffset, 0);
}

static createStrikesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startStrikesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSetStrikes(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // strikes
  return offset;
}

static createSetStrikes(builder:flatbuffers.Builder, strikesOffset:flatbuffers.Offset):flatbuffers.Offset {
  SetStrikes.startSetStrikes(builder);
  SetStrikes.addStrikes(builder, strikesOffset);
  return SetStrikes.endSetStrikes(builder);
}

unpack(): SetStrikesT {
  return new SetStrikesT(
    this.bb!.createObjList<Strike, StrikeT>(this.strikes.bind(this), this.strikesLength())
  );
}


unpackTo(_o: SetStrikesT): void {
  _o.strikes = this.bb!.createObjList<Strike, StrikeT>(this.strikes.bind(this), this.strikesLength());
}
}

export class SetStrikesT implements flatbuffers.IGeneratedObject {
constructor(
  public strikes: (StrikeT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const strikes = SetStrikes.createStrikesVector(builder, builder.createObjectOffsetList(this.strikes));

  return SetStrikes.createSetStrikes(builder,
    strikes
  );
}
}