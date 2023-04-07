// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class SetAutoHide implements flatbuffers.IUnpackableObject<SetAutoHideT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetAutoHide {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetAutoHide(bb:flatbuffers.ByteBuffer, obj?:SetAutoHide):SetAutoHide {
  return (obj || new SetAutoHide()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetAutoHide(bb:flatbuffers.ByteBuffer, obj?:SetAutoHide):SetAutoHide {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetAutoHide()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

autoHide():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startSetAutoHide(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addAutoHide(builder:flatbuffers.Builder, autoHide:boolean) {
  builder.addFieldInt8(0, +autoHide, +false);
}

static endSetAutoHide(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSetAutoHide(builder:flatbuffers.Builder, autoHide:boolean):flatbuffers.Offset {
  SetAutoHide.startSetAutoHide(builder);
  SetAutoHide.addAutoHide(builder, autoHide);
  return SetAutoHide.endSetAutoHide(builder);
}

unpack(): SetAutoHideT {
  return new SetAutoHideT(
    this.autoHide()
  );
}


unpackTo(_o: SetAutoHideT): void {
  _o.autoHide = this.autoHide();
}
}

export class SetAutoHideT implements flatbuffers.IGeneratedObject {
constructor(
  public autoHide: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return SetAutoHide.createSetAutoHide(builder,
    this.autoHide
  );
}
}
