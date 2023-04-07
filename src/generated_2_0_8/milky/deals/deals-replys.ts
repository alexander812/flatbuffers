// automatically generated by the FlatBuffers compiler, do not modify

import { Ok, OkT } from '../../milky/common/ok';
import { Error, ErrorT } from '../../milky/deals/error';


export enum DealsReplys {
  NONE = 0,
  common_Ok = 1,
  Error = 2
}

export function unionToDealsReplys(
  type: DealsReplys,
  accessor: (obj:Error|Ok) => Error|Ok|null
): Error|Ok|null {
  switch(DealsReplys[type]) {
    case 'NONE': return null; 
    case 'common_Ok': return accessor(new Ok())! as Ok;
    case 'Error': return accessor(new Error())! as Error;
    default: return null;
  }
}

export function unionListToDealsReplys(
  type: DealsReplys, 
  accessor: (index: number, obj:Error|Ok) => Error|Ok|null, 
  index: number
): Error|Ok|null {
  switch(DealsReplys[type]) {
    case 'NONE': return null; 
    case 'common_Ok': return accessor(index, new Ok())! as Ok;
    case 'Error': return accessor(index, new Error())! as Error;
    default: return null;
  }
}
