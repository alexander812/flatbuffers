// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Notifies, unionToNotifies, unionListToNotifies } from '../../milky/deals/notifies';
import { NotifyCancelOrder, NotifyCancelOrderT } from '../../milky/deals/notify-cancel-order';
import { NotifyQuickSaleDeal, NotifyQuickSaleDealT } from '../../milky/deals/notify-quick-sale-deal';
import { NotifySelectDeal, NotifySelectDealT } from '../../milky/deals/notify-select-deal';
import { NotifySelectOrder, NotifySelectOrderT } from '../../milky/deals/notify-select-order';
import { NotifyUnselectDeal, NotifyUnselectDealT } from '../../milky/deals/notify-unselect-deal';
import { NotifyUnselectOrder, NotifyUnselectOrderT } from '../../milky/deals/notify-unselect-order';


export class Notify {
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
      let temp = unionToNotifies(this.methodType(), this.method.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: NotifyT): void {
  _o.methodType = this.methodType();
  _o.method = (() => {
      let temp = unionToNotifies(this.methodType(), this.method.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class NotifyT {
constructor(
  public methodType: Notifies = Notifies.NONE,
  public method: NotifyCancelOrderT|NotifyQuickSaleDealT|NotifySelectDealT|NotifySelectOrderT|NotifyUnselectDealT|NotifyUnselectOrderT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const method = builder.createObjectOffset(this.method);

  return Notify.createNotify(builder,
    this.methodType,
    method
  );
}
}
