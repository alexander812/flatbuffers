// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ReplyFromClient, unionToReplyFromClient, unionListToReplyFromClient } from '../milky/reply-from-client';
import { Reply, ReplyT } from '../milky/common/reply';
import { ClientReply, ClientReplyT } from '../milky/resources/client-reply';


export class OutputFromClient {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):OutputFromClient {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOutputFromClient(bb:flatbuffers.ByteBuffer, obj?:OutputFromClient):OutputFromClient {
  return (obj || new OutputFromClient()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOutputFromClient(bb:flatbuffers.ByteBuffer, obj?:OutputFromClient):OutputFromClient {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new OutputFromClient()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

replyType():ReplyFromClient {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : ReplyFromClient.NONE;
}

reply<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startOutputFromClient(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addReplyType(builder:flatbuffers.Builder, replyType:ReplyFromClient) {
  builder.addFieldInt8(0, replyType, ReplyFromClient.NONE);
}

static addReply(builder:flatbuffers.Builder, replyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, replyOffset, 0);
}

static endOutputFromClient(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOutputFromClient(builder:flatbuffers.Builder, replyType:ReplyFromClient, replyOffset:flatbuffers.Offset):flatbuffers.Offset {
  OutputFromClient.startOutputFromClient(builder);
  OutputFromClient.addReplyType(builder, replyType);
  OutputFromClient.addReply(builder, replyOffset);
  return OutputFromClient.endOutputFromClient(builder);
}

unpack(): OutputFromClientT {
  return new OutputFromClientT(
    this.replyType(),
    (() => {
      let temp = unionToReplyFromClient(this.replyType(), this.reply.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: OutputFromClientT): void {
  _o.replyType = this.replyType();
  _o.reply = (() => {
      let temp = unionToReplyFromClient(this.replyType(), this.reply.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class OutputFromClientT {
constructor(
  public replyType: ReplyFromClient = ReplyFromClient.NONE,
  public reply: ClientReplyT|ReplyT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const reply = builder.createObjectOffset(this.reply);

  return OutputFromClient.createOutputFromClient(builder,
    this.replyType,
    reply
  );
}
}
