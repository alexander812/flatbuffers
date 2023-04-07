// automatically generated by the FlatBuffers compiler, do not modify

import { Active, ActiveT } from '../../milky/indicator/active.js';
import { Color, ColorT } from '../../milky/indicator/color.js';
import { Opacity, OpacityT } from '../../milky/indicator/opacity.js';
import { Periods, PeriodsT } from '../../milky/indicator/periods.js';
import { Style, StyleT } from '../../milky/indicator/style.js';
import { Type, TypeT } from '../../milky/indicator/type.js';
import { Width, WidthT } from '../../milky/indicator/width.js';


export enum ValuesType {
  NONE = 0,
  Width = 1,
  Opacity = 2,
  Color = 3,
  Periods = 4,
  Style = 5,
  Active = 6,
  Type = 7
}

export function unionToValuesType(
  type: ValuesType,
  accessor: (obj:Active|Color|Opacity|Periods|Style|Type|Width) => Active|Color|Opacity|Periods|Style|Type|Width|null
): Active|Color|Opacity|Periods|Style|Type|Width|null {
  switch(ValuesType[type]) {
    case 'NONE': return null; 
    case 'Width': return accessor(new Width())! as Width;
    case 'Opacity': return accessor(new Opacity())! as Opacity;
    case 'Color': return accessor(new Color())! as Color;
    case 'Periods': return accessor(new Periods())! as Periods;
    case 'Style': return accessor(new Style())! as Style;
    case 'Active': return accessor(new Active())! as Active;
    case 'Type': return accessor(new Type())! as Type;
    default: return null;
  }
}

export function unionListToValuesType(
  type: ValuesType, 
  accessor: (index: number, obj:Active|Color|Opacity|Periods|Style|Type|Width) => Active|Color|Opacity|Periods|Style|Type|Width|null, 
  index: number
): Active|Color|Opacity|Periods|Style|Type|Width|null {
  switch(ValuesType[type]) {
    case 'NONE': return null; 
    case 'Width': return accessor(index, new Width())! as Width;
    case 'Opacity': return accessor(index, new Opacity())! as Opacity;
    case 'Color': return accessor(index, new Color())! as Color;
    case 'Periods': return accessor(index, new Periods())! as Periods;
    case 'Style': return accessor(index, new Style())! as Style;
    case 'Active': return accessor(index, new Active())! as Active;
    case 'Type': return accessor(index, new Type())! as Type;
    default: return null;
  }
}
