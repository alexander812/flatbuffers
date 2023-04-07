// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { AdviserIdT } from '../../milky/model/adviser/adviser-id.js';
import { AdviserId } from '../../milky/model/adviser/adviser-id.js';

export class RemoveAdviserMethod implements flatbuffers.IUnpackableObject<RemoveAdviserMethodT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): RemoveAdviserMethod {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRemoveAdviserMethod(bb: flatbuffers.ByteBuffer, obj?: RemoveAdviserMethod): RemoveAdviserMethod {
    return (obj || new RemoveAdviserMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsRemoveAdviserMethod(
    bb: flatbuffers.ByteBuffer,
    obj?: RemoveAdviserMethod,
  ): RemoveAdviserMethod {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RemoveAdviserMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  id(obj?: AdviserId): AdviserId | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new AdviserId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
  }

  static startRemoveAdviserMethod(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, idOffset, 0);
  }

  static endRemoveAdviserMethod(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // id
    return offset;
  }

  static createRemoveAdviserMethod(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): flatbuffers.Offset {
    RemoveAdviserMethod.startRemoveAdviserMethod(builder);
    RemoveAdviserMethod.addId(builder, idOffset);
    return RemoveAdviserMethod.endRemoveAdviserMethod(builder);
  }

  unpack(): RemoveAdviserMethodT {
    return new RemoveAdviserMethodT(this.id() !== null ? this.id()!.unpack() : null);
  }

  unpackTo(_o: RemoveAdviserMethodT): void {
    _o.id = this.id() !== null ? this.id()!.unpack() : null;
  }
}

export class RemoveAdviserMethodT implements flatbuffers.IGeneratedObject {
  constructor(public id: AdviserIdT | null = null) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const id = this.id !== null ? this.id.pack(builder) : 0;

    return RemoveAdviserMethod.createRemoveAdviserMethod(builder, id);
  }
}