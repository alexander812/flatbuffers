// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Methods, unionToMethods, unionListToMethods } from '../../milky/bid-ask/methods.js';
import { SetAsk, SetAskT } from '../../milky/bid-ask/set-ask.js';
import { SetBid, SetBidT } from '../../milky/bid-ask/set-bid.js';
import { SetEnabled, SetEnabledT } from '../../milky/bid-ask/set-enabled.js';


export class Request implements flatbuffers.IUnpackableObject<RequestT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Request {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRequest(bb:flatbuffers.ByteBuffer, obj?:Request):Request {
  return (obj || new Request()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRequest(bb:flatbuffers.ByteBuffer, obj?:Request):Request {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Request()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

methodType():Methods {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Methods.NONE;
}

method<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addMethodType(builder:flatbuffers.Builder, methodType:Methods) {
  builder.addFieldInt8(0, methodType, Methods.NONE);
}

static addMethod(builder:flatbuffers.Builder, methodOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, methodOffset, 0);
}

static endRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRequest(builder:flatbuffers.Builder, methodType:Methods, methodOffset:flatbuffers.Offset):flatbuffers.Offset {
  Request.startRequest(builder);
  Request.addMethodType(builder, methodType);
  Request.addMethod(builder, methodOffset);
  return Request.endRequest(builder);
}

unpack(): RequestT {
  return new RequestT(
    this.methodType(),
    (() => {
      const temp = unionToMethods(this.methodType(), this.method.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: RequestT): void {
  _o.methodType = this.methodType();
  _o.method = (() => {
      const temp = unionToMethods(this.methodType(), this.method.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class RequestT implements flatbuffers.IGeneratedObject {
constructor(
  public methodType: Methods = Methods.NONE,
  public method: SetAskT|SetBidT|SetEnabledT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const method = builder.createObjectOffset(this.method);

  return Request.createRequest(builder,
    this.methodType,
    method
  );
}
}
