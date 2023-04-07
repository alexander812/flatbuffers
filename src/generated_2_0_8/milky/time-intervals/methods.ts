// automatically generated by the FlatBuffers compiler, do not modify

import { SetTimeFrame, SetTimeFrameT } from '../../milky/time-intervals/set-time-frame';
import { SetTimeFramesTable, SetTimeFramesTableT } from '../../milky/time-intervals/set-time-frames-table';


export enum Methods {
  NONE = 0,
  SetTimeFrame = 1,
  SetTimeFramesTable = 2
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:SetTimeFrame|SetTimeFramesTable) => SetTimeFrame|SetTimeFramesTable|null
): SetTimeFrame|SetTimeFramesTable|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'SetTimeFrame': return accessor(new SetTimeFrame())! as SetTimeFrame;
    case 'SetTimeFramesTable': return accessor(new SetTimeFramesTable())! as SetTimeFramesTable;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:SetTimeFrame|SetTimeFramesTable) => SetTimeFrame|SetTimeFramesTable|null, 
  index: number
): SetTimeFrame|SetTimeFramesTable|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'SetTimeFrame': return accessor(index, new SetTimeFrame())! as SetTimeFrame;
    case 'SetTimeFramesTable': return accessor(index, new SetTimeFramesTable())! as SetTimeFramesTable;
    default: return null;
  }
}