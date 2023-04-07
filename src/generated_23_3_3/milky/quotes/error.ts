// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ErrorCode } from '../../milky/quotes/error-code.js';


export class Error implements flatbuffers.IUnpackableObject<ErrorT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Error {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsError(bb:flatbuffers.ByteBuffer, obj?:Error):Error {
  return (obj || new Error()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsError(bb:flatbuffers.ByteBuffer, obj?:Error):Error {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Error()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

code():ErrorCode {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : ErrorCode.Unknown;
}

static startError(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addCode(builder:flatbuffers.Builder, code:ErrorCode) {
  builder.addFieldInt32(0, code, ErrorCode.Unknown);
}

static endError(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createError(builder:flatbuffers.Builder, code:ErrorCode):flatbuffers.Offset {
  Error.startError(builder);
  Error.addCode(builder, code);
  return Error.endError(builder);
}

unpack(): ErrorT {
  return new ErrorT(
    this.code()
  );
}


unpackTo(_o: ErrorT): void {
  _o.code = this.code();
}
}

export class ErrorT implements flatbuffers.IGeneratedObject {
constructor(
  public code: ErrorCode = ErrorCode.Unknown
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return Error.createError(builder,
    this.code
  );
}
}
