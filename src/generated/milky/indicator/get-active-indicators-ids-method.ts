// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class GetActiveIndicatorsIdsMethod implements flatbuffers.IUnpackableObject<GetActiveIndicatorsIdsMethodT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): GetActiveIndicatorsIdsMethod {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsGetActiveIndicatorsIdsMethod(
    bb: flatbuffers.ByteBuffer,
    obj?: GetActiveIndicatorsIdsMethod,
  ): GetActiveIndicatorsIdsMethod {
    return (obj || new GetActiveIndicatorsIdsMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsGetActiveIndicatorsIdsMethod(
    bb: flatbuffers.ByteBuffer,
    obj?: GetActiveIndicatorsIdsMethod,
  ): GetActiveIndicatorsIdsMethod {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new GetActiveIndicatorsIdsMethod()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startGetActiveIndicatorsIdsMethod(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endGetActiveIndicatorsIdsMethod(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createGetActiveIndicatorsIdsMethod(builder: flatbuffers.Builder): flatbuffers.Offset {
    GetActiveIndicatorsIdsMethod.startGetActiveIndicatorsIdsMethod(builder);
    return GetActiveIndicatorsIdsMethod.endGetActiveIndicatorsIdsMethod(builder);
  }

  unpack(): GetActiveIndicatorsIdsMethodT {
    return new GetActiveIndicatorsIdsMethodT();
  }

  unpackTo(_o: GetActiveIndicatorsIdsMethodT): void {}
}

export class GetActiveIndicatorsIdsMethodT implements flatbuffers.IGeneratedObject {
  constructor() {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return GetActiveIndicatorsIdsMethod.createGetActiveIndicatorsIdsMethod(builder);
  }
}