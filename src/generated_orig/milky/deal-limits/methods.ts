// automatically generated by the FlatBuffers compiler, do not modify

import { AddDealLimits, AddDealLimitsT } from '../../milky/deal-limits/add-deal-limits.js';
import { RemoveDealLimits, RemoveDealLimitsT } from '../../milky/deal-limits/remove-deal-limits.js';
import { UpdateDealLimits, UpdateDealLimitsT } from '../../milky/deal-limits/update-deal-limits.js';

export enum Methods {
  NONE = 0,
  AddDealLimits = 1,
  UpdateDealLimits = 2,
  RemoveDealLimits = 3,
}

export function unionToMethods(
  type: Methods,
  accessor: (
    obj: AddDealLimits | RemoveDealLimits | UpdateDealLimits,
  ) => AddDealLimits | RemoveDealLimits | UpdateDealLimits | null,
): AddDealLimits | RemoveDealLimits | UpdateDealLimits | null {
  switch (Methods[type]) {
    case 'NONE':
      return null;
    case 'AddDealLimits':
      return accessor(new AddDealLimits())! as AddDealLimits;
    case 'UpdateDealLimits':
      return accessor(new UpdateDealLimits())! as UpdateDealLimits;
    case 'RemoveDealLimits':
      return accessor(new RemoveDealLimits())! as RemoveDealLimits;
    default:
      return null;
  }
}

export function unionListToMethods(
  type: Methods,
  accessor: (
    index: number,
    obj: AddDealLimits | RemoveDealLimits | UpdateDealLimits,
  ) => AddDealLimits | RemoveDealLimits | UpdateDealLimits | null,
  index: number,
): AddDealLimits | RemoveDealLimits | UpdateDealLimits | null {
  switch (Methods[type]) {
    case 'NONE':
      return null;
    case 'AddDealLimits':
      return accessor(index, new AddDealLimits())! as AddDealLimits;
    case 'UpdateDealLimits':
      return accessor(index, new UpdateDealLimits())! as UpdateDealLimits;
    case 'RemoveDealLimits':
      return accessor(index, new RemoveDealLimits())! as RemoveDealLimits;
    default:
      return null;
  }
}
