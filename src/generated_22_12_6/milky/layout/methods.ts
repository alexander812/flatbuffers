// automatically generated by the FlatBuffers compiler, do not modify

import { GetLayout, GetLayoutT } from '../../milky/layout/get-layout.js';


export enum Methods {
  NONE = 0,
  GetLayout = 1
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:GetLayout) => GetLayout|null
): GetLayout|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'GetLayout': return accessor(new GetLayout())! as GetLayout;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:GetLayout) => GetLayout|null, 
  index: number
): GetLayout|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'GetLayout': return accessor(index, new GetLayout())! as GetLayout;
    default: return null;
  }
}
