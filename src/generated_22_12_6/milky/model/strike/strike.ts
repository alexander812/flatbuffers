// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Quote, QuoteT } from '../../../milky/model/quote.js';
import { StrikeId, StrikeIdT } from '../../../milky/model/strike/strike-id.js';


export class Strike implements flatbuffers.IUnpackableObject<StrikeT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Strike {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStrike(bb:flatbuffers.ByteBuffer, obj?:Strike):Strike {
  return (obj || new Strike()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStrike(bb:flatbuffers.ByteBuffer, obj?:Strike):Strike {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Strike()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

rateUp():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

rateDown():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

id(obj?:StrikeId):StrikeId|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new StrikeId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

delta(obj?:Quote):Quote|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Quote()).__init(this.bb_pos + offset, this.bb!) : null;
}

selected():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startStrike(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addRateUp(builder:flatbuffers.Builder, rateUp:number) {
  builder.addFieldInt32(0, rateUp, 0);
}

static addRateDown(builder:flatbuffers.Builder, rateDown:number) {
  builder.addFieldInt32(1, rateDown, 0);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, idOffset, 0);
}

static addDelta(builder:flatbuffers.Builder, deltaOffset:flatbuffers.Offset) {
  builder.addFieldStruct(3, deltaOffset, 0);
}

static addSelected(builder:flatbuffers.Builder, selected:boolean) {
  builder.addFieldInt8(4, +selected, +false);
}

static endStrike(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 8) // id
  builder.requiredField(offset, 10) // delta
  return offset;
}


unpack(): StrikeT {
  return new StrikeT(
    this.rateUp(),
    this.rateDown(),
    (this.id() !== null ? this.id()!.unpack() : null),
    (this.delta() !== null ? this.delta()!.unpack() : null),
    this.selected()
  );
}


unpackTo(_o: StrikeT): void {
  _o.rateUp = this.rateUp();
  _o.rateDown = this.rateDown();
  _o.id = (this.id() !== null ? this.id()!.unpack() : null);
  _o.delta = (this.delta() !== null ? this.delta()!.unpack() : null);
  _o.selected = this.selected();
}
}

export class StrikeT implements flatbuffers.IGeneratedObject {
constructor(
  public rateUp: number = 0,
  public rateDown: number = 0,
  public id: StrikeIdT|null = null,
  public delta: QuoteT|null = null,
  public selected: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? this.id!.pack(builder) : 0);

  Strike.startStrike(builder);
  Strike.addRateUp(builder, this.rateUp);
  Strike.addRateDown(builder, this.rateDown);
  Strike.addId(builder, id);
  Strike.addDelta(builder, (this.delta !== null ? this.delta!.pack(builder) : 0));
  Strike.addSelected(builder, this.selected);

  return Strike.endStrike(builder);
}
}
