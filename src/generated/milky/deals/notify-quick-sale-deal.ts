// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { DealIdT } from '../../milky/model/deal/deal-id.js';
import { DealId } from '../../milky/model/deal/deal-id.js';

export class NotifyQuickSaleDeal implements flatbuffers.IUnpackableObject<NotifyQuickSaleDealT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): NotifyQuickSaleDeal {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsNotifyQuickSaleDeal(bb: flatbuffers.ByteBuffer, obj?: NotifyQuickSaleDeal): NotifyQuickSaleDeal {
    return (obj || new NotifyQuickSaleDeal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsNotifyQuickSaleDeal(
    bb: flatbuffers.ByteBuffer,
    obj?: NotifyQuickSaleDeal,
  ): NotifyQuickSaleDeal {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new NotifyQuickSaleDeal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  id(obj?: DealId): DealId | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new DealId()).__init(this.bb_pos + offset, this.bb!) : null;
  }

  static startNotifyQuickSaleDeal(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset) {
    builder.addFieldStruct(0, idOffset, 0);
  }

  static endNotifyQuickSaleDeal(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // id
    return offset;
  }

  static createNotifyQuickSaleDeal(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): flatbuffers.Offset {
    NotifyQuickSaleDeal.startNotifyQuickSaleDeal(builder);
    NotifyQuickSaleDeal.addId(builder, idOffset);
    return NotifyQuickSaleDeal.endNotifyQuickSaleDeal(builder);
  }

  unpack(): NotifyQuickSaleDealT {
    return new NotifyQuickSaleDealT(this.id() !== null ? this.id()!.unpack() : null);
  }

  unpackTo(_o: NotifyQuickSaleDealT): void {
    _o.id = this.id() !== null ? this.id()!.unpack() : null;
  }
}

export class NotifyQuickSaleDealT implements flatbuffers.IGeneratedObject {
  constructor(public id: DealIdT | null = null) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return NotifyQuickSaleDeal.createNotifyQuickSaleDeal(builder, this.id !== null ? this.id.pack(builder) : 0);
  }
}
