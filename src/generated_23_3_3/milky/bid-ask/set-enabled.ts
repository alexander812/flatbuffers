// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class SetEnabled implements flatbuffers.IUnpackableObject<SetEnabledT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetEnabled {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetEnabled(bb:flatbuffers.ByteBuffer, obj?:SetEnabled):SetEnabled {
  return (obj || new SetEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetEnabled(bb:flatbuffers.ByteBuffer, obj?:SetEnabled):SetEnabled {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetEnabled()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

enable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startSetEnabled(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addEnable(builder:flatbuffers.Builder, enable:boolean) {
  builder.addFieldInt8(0, +enable, +false);
}

static endSetEnabled(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSetEnabled(builder:flatbuffers.Builder, enable:boolean):flatbuffers.Offset {
  SetEnabled.startSetEnabled(builder);
  SetEnabled.addEnable(builder, enable);
  return SetEnabled.endSetEnabled(builder);
}

unpack(): SetEnabledT {
  return new SetEnabledT(
    this.enable()
  );
}


unpackTo(_o: SetEnabledT): void {
  _o.enable = this.enable();
}
}

export class SetEnabledT implements flatbuffers.IGeneratedObject {
constructor(
  public enable: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return SetEnabled.createSetEnabled(builder,
    this.enable
  );
}
}