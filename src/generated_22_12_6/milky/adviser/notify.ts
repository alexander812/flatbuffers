// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { AdviserPosition, AdviserPositionT } from '../../milky/adviser/adviser-position.js';
import { AdviserSignal, AdviserSignalT } from '../../milky/adviser/adviser-signal.js';
import { Notifies, unionToNotifies, unionListToNotifies } from '../../milky/adviser/notifies.js';


export class Notify implements flatbuffers.IUnpackableObject<NotifyT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Notify {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNotify(bb:flatbuffers.ByteBuffer, obj?:Notify):Notify {
  return (obj || new Notify()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNotify(bb:flatbuffers.ByteBuffer, obj?:Notify):Notify {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Notify()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

methodType():Notifies {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Notifies.NONE;
}

method<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startNotify(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addMethodType(builder:flatbuffers.Builder, methodType:Notifies) {
  builder.addFieldInt8(0, methodType, Notifies.NONE);
}

static addMethod(builder:flatbuffers.Builder, methodOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, methodOffset, 0);
}

static endNotify(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createNotify(builder:flatbuffers.Builder, methodType:Notifies, methodOffset:flatbuffers.Offset):flatbuffers.Offset {
  Notify.startNotify(builder);
  Notify.addMethodType(builder, methodType);
  Notify.addMethod(builder, methodOffset);
  return Notify.endNotify(builder);
}

unpack(): NotifyT {
  return new NotifyT(
    this.methodType(),
    (() => {
      const temp = unionToNotifies(this.methodType(), this.method.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: NotifyT): void {
  _o.methodType = this.methodType();
  _o.method = (() => {
      const temp = unionToNotifies(this.methodType(), this.method.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class NotifyT implements flatbuffers.IGeneratedObject {
constructor(
  public methodType: Notifies = Notifies.NONE,
  public method: AdviserPositionT|AdviserSignalT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const method = builder.createObjectOffset(this.method);

  return Notify.createNotify(builder,
    this.methodType,
    method
  );
}
}
