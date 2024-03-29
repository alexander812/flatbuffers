// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Resource, ResourceT } from '../../milky/resources/resource';


export class ClientReply {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ClientReply {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsClientReply(bb:flatbuffers.ByteBuffer, obj?:ClientReply):ClientReply {
  return (obj || new ClientReply()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsClientReply(bb:flatbuffers.ByteBuffer, obj?:ClientReply):ClientReply {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ClientReply()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

resource(obj?:Resource):Resource|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Resource()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startClientReply(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addResource(builder:flatbuffers.Builder, resourceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, resourceOffset, 0);
}

static endClientReply(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // resource
  return offset;
}

static createClientReply(builder:flatbuffers.Builder, resourceOffset:flatbuffers.Offset):flatbuffers.Offset {
  ClientReply.startClientReply(builder);
  ClientReply.addResource(builder, resourceOffset);
  return ClientReply.endClientReply(builder);
}

unpack(): ClientReplyT {
  return new ClientReplyT(
    (this.resource() !== null ? this.resource()!.unpack() : null)
  );
}


unpackTo(_o: ClientReplyT): void {
  _o.resource = (this.resource() !== null ? this.resource()!.unpack() : null);
}
}

export class ClientReplyT {
constructor(
  public resource: ResourceT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const resource = (this.resource !== null ? this.resource!.pack(builder) : 0);

  return ClientReply.createClientReply(builder,
    resource
  );
}
}
