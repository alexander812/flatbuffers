// automatically generated by the FlatBuffers compiler, do not modify

import { ChartArea, ChartAreaT } from '../../../milky/model/layout/chart-area.js';
import { OscillatorArea, OscillatorAreaT } from '../../../milky/model/layout/oscillator-area.js';
import { TimeAxis, TimeAxisT } from '../../../milky/model/layout/time-axis.js';


export enum AreaVariants {
  NONE = 0,
  ChartArea = 1,
  OscillatorArea = 2,
  TimeAxis = 3
}

export function unionToAreaVariants(
  type: AreaVariants,
  accessor: (obj:ChartArea|OscillatorArea|TimeAxis) => ChartArea|OscillatorArea|TimeAxis|null
): ChartArea|OscillatorArea|TimeAxis|null {
  switch(AreaVariants[type]) {
    case 'NONE': return null; 
    case 'ChartArea': return accessor(new ChartArea())! as ChartArea;
    case 'OscillatorArea': return accessor(new OscillatorArea())! as OscillatorArea;
    case 'TimeAxis': return accessor(new TimeAxis())! as TimeAxis;
    default: return null;
  }
}

export function unionListToAreaVariants(
  type: AreaVariants, 
  accessor: (index: number, obj:ChartArea|OscillatorArea|TimeAxis) => ChartArea|OscillatorArea|TimeAxis|null, 
  index: number
): ChartArea|OscillatorArea|TimeAxis|null {
  switch(AreaVariants[type]) {
    case 'NONE': return null; 
    case 'ChartArea': return accessor(index, new ChartArea())! as ChartArea;
    case 'OscillatorArea': return accessor(index, new OscillatorArea())! as OscillatorArea;
    case 'TimeAxis': return accessor(index, new TimeAxis())! as TimeAxis;
    default: return null;
  }
}