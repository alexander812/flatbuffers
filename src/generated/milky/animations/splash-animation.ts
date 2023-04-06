// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { BaseAnimationT } from '../../milky/animations/base-animation.js';
import { BaseAnimation } from '../../milky/animations/base-animation.js';

export class SplashAnimation implements flatbuffers.IUnpackableObject<SplashAnimationT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): SplashAnimation {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSplashAnimation(bb: flatbuffers.ByteBuffer, obj?: SplashAnimation): SplashAnimation {
    return (obj || new SplashAnimation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSplashAnimation(bb: flatbuffers.ByteBuffer, obj?: SplashAnimation): SplashAnimation {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SplashAnimation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  baseModel(obj?: BaseAnimation): BaseAnimation | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? (obj || new BaseAnimation()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
  }

  static startSplashAnimation(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addBaseModel(builder: flatbuffers.Builder, baseModelOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, baseModelOffset, 0);
  }

  static endSplashAnimation(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // base_model
    return offset;
  }

  static createSplashAnimation(builder: flatbuffers.Builder, baseModelOffset: flatbuffers.Offset): flatbuffers.Offset {
    SplashAnimation.startSplashAnimation(builder);
    SplashAnimation.addBaseModel(builder, baseModelOffset);
    return SplashAnimation.endSplashAnimation(builder);
  }

  unpack(): SplashAnimationT {
    return new SplashAnimationT(this.baseModel() !== null ? this.baseModel()!.unpack() : null);
  }

  unpackTo(_o: SplashAnimationT): void {
    _o.baseModel = this.baseModel() !== null ? this.baseModel()!.unpack() : null;
  }
}

export class SplashAnimationT implements flatbuffers.IGeneratedObject {
  constructor(public baseModel: BaseAnimationT | null = null) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const baseModel = this.baseModel !== null ? this.baseModel.pack(builder) : 0;

    return SplashAnimation.createSplashAnimation(builder, baseModel);
  }
}
