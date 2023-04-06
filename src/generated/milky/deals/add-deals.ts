// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { DealModelT } from '../../milky/model/deal/deal-model.js';
import { DealModel } from '../../milky/model/deal/deal-model.js';

export class AddDeals implements flatbuffers.IUnpackableObject<AddDealsT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): AddDeals {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsAddDeals(bb: flatbuffers.ByteBuffer, obj?: AddDeals): AddDeals {
    return (obj || new AddDeals()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsAddDeals(bb: flatbuffers.ByteBuffer, obj?: AddDeals): AddDeals {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new AddDeals()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  deals(index: number, obj?: DealModel): DealModel | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset
      ? (obj || new DealModel()).__init(
          this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4),
          this.bb!,
        )
      : null;
  }

  dealsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  static startAddDeals(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addDeals(builder: flatbuffers.Builder, dealsOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, dealsOffset, 0);
  }

  static createDealsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startDealsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static endAddDeals(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // deals
    return offset;
  }

  static createAddDeals(builder: flatbuffers.Builder, dealsOffset: flatbuffers.Offset): flatbuffers.Offset {
    AddDeals.startAddDeals(builder);
    AddDeals.addDeals(builder, dealsOffset);
    return AddDeals.endAddDeals(builder);
  }

  unpack(): AddDealsT {
    return new AddDealsT(this.bb!.createObjList<DealModel, DealModelT>(this.deals.bind(this), this.dealsLength()));
  }

  unpackTo(_o: AddDealsT): void {
    _o.deals = this.bb!.createObjList<DealModel, DealModelT>(this.deals.bind(this), this.dealsLength());
  }
}

export class AddDealsT implements flatbuffers.IGeneratedObject {
  constructor(public deals: DealModelT[] = []) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const deals = AddDeals.createDealsVector(builder, builder.createObjectOffsetList(this.deals));

    return AddDeals.createAddDeals(builder, deals);
  }
}
