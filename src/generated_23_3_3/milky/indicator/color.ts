// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class Color implements flatbuffers.IUnpackableObject<ColorT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Color {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsColor(bb:flatbuffers.ByteBuffer, obj?:Color):Color {
  return (obj || new Color()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsColor(bb:flatbuffers.ByteBuffer, obj?:Color):Color {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Color()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

value(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

valueLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

valueArray():Int32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Int32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startColor(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addValue(builder:flatbuffers.Builder, valueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, valueOffset, 0);
}

static createValueVector(builder:flatbuffers.Builder, data:number[]|Int32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createValueVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createValueVector(builder:flatbuffers.Builder, data:number[]|Int32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startValueVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endColor(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createColor(builder:flatbuffers.Builder, valueOffset:flatbuffers.Offset):flatbuffers.Offset {
  Color.startColor(builder);
  Color.addValue(builder, valueOffset);
  return Color.endColor(builder);
}

unpack(): ColorT {
  return new ColorT(
    this.bb!.createScalarList<number>(this.value.bind(this), this.valueLength())
  );
}


unpackTo(_o: ColorT): void {
  _o.value = this.bb!.createScalarList<number>(this.value.bind(this), this.valueLength());
}
}

export class ColorT implements flatbuffers.IGeneratedObject {
constructor(
  public value: (number)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const value = Color.createValueVector(builder, this.value);

  return Color.createColor(builder,
    value
  );
}
}
