// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import type { InputFromChartT } from '../milky/input-from-chart.js';
import { InputFromChart } from '../milky/input-from-chart.js';
import type { InputFromClientT } from '../milky/input-from-client.js';
import { InputFromClient } from '../milky/input-from-client.js';
import { MessageType, unionToMessageType, unionListToMessageType } from '../milky/message-type.js';
import type { OutputFromChartT } from '../milky/output-from-chart.js';
import { OutputFromChart } from '../milky/output-from-chart.js';
import type { OutputFromClientT } from '../milky/output-from-client.js';
import { OutputFromClient } from '../milky/output-from-client.js';

export class Message implements flatbuffers.IUnpackableObject<MessageT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Message {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsMessage(bb: flatbuffers.ByteBuffer, obj?: Message): Message {
    return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsMessage(bb: flatbuffers.ByteBuffer, obj?: Message): Message {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean {
    return bb.__has_identifier('MWAY');
  }

  contentType(): MessageType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readUint8(this.bb_pos + offset) : MessageType.NONE;
  }

  content<T extends flatbuffers.Table>(obj: any): any | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
  }

  static startMessage(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addContentType(builder: flatbuffers.Builder, contentType: MessageType) {
    builder.addFieldInt8(0, contentType, MessageType.NONE);
  }

  static addContent(builder: flatbuffers.Builder, contentOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, contentOffset, 0);
  }

  static endMessage(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static finishMessageBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset, 'MWAY');
  }

  static finishSizePrefixedMessageBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset, 'MWAY', true);
  }

  static createMessage(
    builder: flatbuffers.Builder,
    contentType: MessageType,
    contentOffset: flatbuffers.Offset,
  ): flatbuffers.Offset {
    Message.startMessage(builder);
    Message.addContentType(builder, contentType);
    Message.addContent(builder, contentOffset);
    return Message.endMessage(builder);
  }

  unpack(): MessageT {
    return new MessageT(
      this.contentType(),
      (() => {
        const temp = unionToMessageType(this.contentType(), this.content.bind(this));
        if (temp === null) {
          return null;
        }
        return temp.unpack();
      })(),
    );
  }

  unpackTo(_o: MessageT): void {
    _o.contentType = this.contentType();
    _o.content = (() => {
      const temp = unionToMessageType(this.contentType(), this.content.bind(this));
      if (temp === null) {
        return null;
      }
      return temp.unpack();
    })();
  }
}

export class MessageT implements flatbuffers.IGeneratedObject {
  constructor(
    public contentType: MessageType = MessageType.NONE,
    public content: InputFromChartT | InputFromClientT | OutputFromChartT | OutputFromClientT | null = null,
  ) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const content = builder.createObjectOffset(this.content);

    return Message.createMessage(builder, this.contentType, content);
  }
}
