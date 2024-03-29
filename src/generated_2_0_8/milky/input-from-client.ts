// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { RequestFromClient, unionToRequestFromClient, unionListToRequestFromClient } from '../milky/request-from-client';
import { Request as milky_adviser_Request, RequestT as milky_adviser_RequestT } from '../milky/adviser/request';
import { Request as milky_animations_Request, RequestT as milky_animations_RequestT } from '../milky/animations/request';
import { Request as milky_bid_ask_Request, RequestT as milky_bid_ask_RequestT } from '../milky/bid-ask/request';
import { Request as milky_common_requests_Request, RequestT as milky_common_requests_RequestT } from '../milky/common-requests/request';
import { Request as milky_config_Request, RequestT as milky_config_RequestT } from '../milky/config/request';
import { Request as milky_deal_limits_Request, RequestT as milky_deal_limits_RequestT } from '../milky/deal-limits/request';
import { Request as milky_deal_profit_scale_Request, RequestT as milky_deal_profit_scale_RequestT } from '../milky/deal-profit-scale/request';
import { Request as milky_deals_Request, RequestT as milky_deals_RequestT } from '../milky/deals/request';
import { Request as milky_drawing_Request, RequestT as milky_drawing_RequestT } from '../milky/drawing/request';
import { Request as milky_indicator_Request, RequestT as milky_indicator_RequestT } from '../milky/indicator/request';
import { Request as milky_layout_Request, RequestT as milky_layout_RequestT } from '../milky/layout/request';
import { Request as milky_notification_level_Request, RequestT as milky_notification_level_RequestT } from '../milky/notification-level/request';
import { Request as milky_onboarding_Request, RequestT as milky_onboarding_RequestT } from '../milky/onboarding/request';
import { Request as milky_quotes_Request, RequestT as milky_quotes_RequestT } from '../milky/quotes/request';
import { Request as milky_resources_Request, RequestT as milky_resources_RequestT } from '../milky/resources/request';
import { Request as milky_strikes_Request, RequestT as milky_strikes_RequestT } from '../milky/strikes/request';
import { Request as milky_time_intervals_Request, RequestT as milky_time_intervals_RequestT } from '../milky/time-intervals/request';
import { Request, RequestT } from '../milky/version/request';
import { Request as milky_viewport_Request, RequestT as milky_viewport_RequestT } from '../milky/viewport/request';


export class InputFromClient {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):InputFromClient {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsInputFromClient(bb:flatbuffers.ByteBuffer, obj?:InputFromClient):InputFromClient {
  return (obj || new InputFromClient()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsInputFromClient(bb:flatbuffers.ByteBuffer, obj?:InputFromClient):InputFromClient {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new InputFromClient()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

requestType():RequestFromClient {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : RequestFromClient.NONE;
}

request<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

/**
 * Optional (non zero) value, provided by client, to match reply and request.
 */
requestId():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startInputFromClient(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addRequestType(builder:flatbuffers.Builder, requestType:RequestFromClient) {
  builder.addFieldInt8(0, requestType, RequestFromClient.NONE);
}

static addRequest(builder:flatbuffers.Builder, requestOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, requestOffset, 0);
}

static addRequestId(builder:flatbuffers.Builder, requestId:number) {
  builder.addFieldInt32(2, requestId, 0);
}

static endInputFromClient(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createInputFromClient(builder:flatbuffers.Builder, requestType:RequestFromClient, requestOffset:flatbuffers.Offset, requestId:number):flatbuffers.Offset {
  InputFromClient.startInputFromClient(builder);
  InputFromClient.addRequestType(builder, requestType);
  InputFromClient.addRequest(builder, requestOffset);
  InputFromClient.addRequestId(builder, requestId);
  return InputFromClient.endInputFromClient(builder);
}

unpack(): InputFromClientT {
  return new InputFromClientT(
    this.requestType(),
    (() => {
      let temp = unionToRequestFromClient(this.requestType(), this.request.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })(),
    this.requestId()
  );
}


unpackTo(_o: InputFromClientT): void {
  _o.requestType = this.requestType();
  _o.request = (() => {
      let temp = unionToRequestFromClient(this.requestType(), this.request.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
  _o.requestId = this.requestId();
}
}

export class InputFromClientT {
constructor(
  public requestType: RequestFromClient = RequestFromClient.NONE,
  public request: RequestT|milky_adviser_RequestT|milky_animations_RequestT|milky_bid_ask_RequestT|milky_common_requests_RequestT|milky_config_RequestT|milky_deal_limits_RequestT|milky_deal_profit_scale_RequestT|milky_deals_RequestT|milky_drawing_RequestT|milky_indicator_RequestT|milky_layout_RequestT|milky_notification_level_RequestT|milky_onboarding_RequestT|milky_quotes_RequestT|milky_resources_RequestT|milky_strikes_RequestT|milky_time_intervals_RequestT|milky_viewport_RequestT|null = null,
  public requestId: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const request = builder.createObjectOffset(this.request);

  return InputFromClient.createInputFromClient(builder,
    this.requestType,
    request,
    this.requestId
  );
}
}
