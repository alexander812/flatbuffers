// automatically generated by the FlatBuffers compiler, do not modify

import { Error, ErrorT } from '../../milky/common/error.js';
import { ListAreas, ListAreasT } from '../../milky/model/layout/list-areas.js';

export enum ResultsReply {
  NONE = 0,
  model_layout_ListAreas = 1,
  common_Error = 2,
}

export function unionToResultsReply(
  type: ResultsReply,
  accessor: (obj: Error | ListAreas) => Error | ListAreas | null,
): Error | ListAreas | null {
  switch (ResultsReply[type]) {
    case 'NONE':
      return null;
    case 'model_layout_ListAreas':
      return accessor(new ListAreas())! as ListAreas;
    case 'common_Error':
      return accessor(new Error())! as Error;
    default:
      return null;
  }
}

export function unionListToResultsReply(
  type: ResultsReply,
  accessor: (index: number, obj: Error | ListAreas) => Error | ListAreas | null,
  index: number,
): Error | ListAreas | null {
  switch (ResultsReply[type]) {
    case 'NONE':
      return null;
    case 'model_layout_ListAreas':
      return accessor(index, new ListAreas())! as ListAreas;
    case 'common_Error':
      return accessor(index, new Error())! as Error;
    default:
      return null;
  }
}
