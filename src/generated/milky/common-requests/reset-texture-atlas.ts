// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ResetTextureAtlas implements flatbuffers.IUnpackableObject<ResetTextureAtlasT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): ResetTextureAtlas {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsResetTextureAtlas(bb: flatbuffers.ByteBuffer, obj?: ResetTextureAtlas): ResetTextureAtlas {
    return (obj || new ResetTextureAtlas()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsResetTextureAtlas(
    bb: flatbuffers.ByteBuffer,
    obj?: ResetTextureAtlas,
  ): ResetTextureAtlas {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new ResetTextureAtlas()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startResetTextureAtlas(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endResetTextureAtlas(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createResetTextureAtlas(builder: flatbuffers.Builder): flatbuffers.Offset {
    ResetTextureAtlas.startResetTextureAtlas(builder);
    return ResetTextureAtlas.endResetTextureAtlas(builder);
  }

  unpack(): ResetTextureAtlasT {
    return new ResetTextureAtlasT();
  }

  unpackTo(_o: ResetTextureAtlasT): void {}
}

export class ResetTextureAtlasT implements flatbuffers.IGeneratedObject {
  constructor() {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    return ResetTextureAtlas.createResetTextureAtlas(builder);
  }
}