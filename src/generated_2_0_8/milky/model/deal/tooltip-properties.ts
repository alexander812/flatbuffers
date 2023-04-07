// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TooltipType } from '../../../milky/model/deal/tooltip-type';


export class TooltipProperties {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TooltipProperties {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTooltipProperties(bb:flatbuffers.ByteBuffer, obj?:TooltipProperties):TooltipProperties {
  return (obj || new TooltipProperties()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTooltipProperties(bb:flatbuffers.ByteBuffer, obj?:TooltipProperties):TooltipProperties {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TooltipProperties()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

type():TooltipType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : TooltipType.No;
}

labelText():string|null
labelText(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
labelText(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

btnText():string|null
btnText(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
btnText(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startTooltipProperties(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addType(builder:flatbuffers.Builder, type:TooltipType) {
  builder.addFieldInt32(0, type, TooltipType.No);
}

static addLabelText(builder:flatbuffers.Builder, labelTextOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, labelTextOffset, 0);
}

static addBtnText(builder:flatbuffers.Builder, btnTextOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, btnTextOffset, 0);
}

static endTooltipProperties(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTooltipProperties(builder:flatbuffers.Builder, type:TooltipType, labelTextOffset:flatbuffers.Offset, btnTextOffset:flatbuffers.Offset):flatbuffers.Offset {
  TooltipProperties.startTooltipProperties(builder);
  TooltipProperties.addType(builder, type);
  TooltipProperties.addLabelText(builder, labelTextOffset);
  TooltipProperties.addBtnText(builder, btnTextOffset);
  return TooltipProperties.endTooltipProperties(builder);
}

unpack(): TooltipPropertiesT {
  return new TooltipPropertiesT(
    this.type(),
    this.labelText(),
    this.btnText()
  );
}


unpackTo(_o: TooltipPropertiesT): void {
  _o.type = this.type();
  _o.labelText = this.labelText();
  _o.btnText = this.btnText();
}
}

export class TooltipPropertiesT {
constructor(
  public type: TooltipType = TooltipType.No,
  public labelText: string|Uint8Array|null = null,
  public btnText: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const labelText = (this.labelText !== null ? builder.createString(this.labelText!) : 0);
  const btnText = (this.btnText !== null ? builder.createString(this.btnText!) : 0);

  return TooltipProperties.createTooltipProperties(builder,
    this.type,
    labelText,
    btnText
  );
}
}