// automatically generated by the FlatBuffers compiler, do not modify

import { AddIndicatorMethod, AddIndicatorMethodT } from '../../milky/indicator/add-indicator-method.js';
import {
  GetActiveIndicatorsIdsMethod,
  GetActiveIndicatorsIdsMethodT,
} from '../../milky/indicator/get-active-indicators-ids-method.js';
import { HoverIndicatorMethod, HoverIndicatorMethodT } from '../../milky/indicator/hover-indicator-method.js';
import {
  RemoveAllIndicatorsMethod,
  RemoveAllIndicatorsMethodT,
} from '../../milky/indicator/remove-all-indicators-method.js';
import { RemoveIndicatorMethod, RemoveIndicatorMethodT } from '../../milky/indicator/remove-indicator-method.js';
import {
  SetIndicatorComponentValueMethod,
  SetIndicatorComponentValueMethodT,
} from '../../milky/indicator/set-indicator-component-value-method.js';
import { UnhoverIndicatorMethod, UnhoverIndicatorMethodT } from '../../milky/indicator/unhover-indicator-method.js';

export enum Methods {
  NONE = 0,
  AddIndicatorMethod = 1,
  RemoveIndicatorMethod = 2,
  RemoveAllIndicatorsMethod = 3,
  GetActiveIndicatorsIdsMethod = 4,
  HoverIndicatorMethod = 5,
  UnhoverIndicatorMethod = 6,
  SetIndicatorComponentValueMethod = 7,
}

export function unionToMethods(
  type: Methods,
  accessor: (
    obj:
      | AddIndicatorMethod
      | GetActiveIndicatorsIdsMethod
      | HoverIndicatorMethod
      | RemoveAllIndicatorsMethod
      | RemoveIndicatorMethod
      | SetIndicatorComponentValueMethod
      | UnhoverIndicatorMethod,
  ) =>
    | AddIndicatorMethod
    | GetActiveIndicatorsIdsMethod
    | HoverIndicatorMethod
    | RemoveAllIndicatorsMethod
    | RemoveIndicatorMethod
    | SetIndicatorComponentValueMethod
    | UnhoverIndicatorMethod
    | null,
):
  | AddIndicatorMethod
  | GetActiveIndicatorsIdsMethod
  | HoverIndicatorMethod
  | RemoveAllIndicatorsMethod
  | RemoveIndicatorMethod
  | SetIndicatorComponentValueMethod
  | UnhoverIndicatorMethod
  | null {
  switch (Methods[type]) {
    case 'NONE':
      return null;
    case 'AddIndicatorMethod':
      return accessor(new AddIndicatorMethod())! as AddIndicatorMethod;
    case 'RemoveIndicatorMethod':
      return accessor(new RemoveIndicatorMethod())! as RemoveIndicatorMethod;
    case 'RemoveAllIndicatorsMethod':
      return accessor(new RemoveAllIndicatorsMethod())! as RemoveAllIndicatorsMethod;
    case 'GetActiveIndicatorsIdsMethod':
      return accessor(new GetActiveIndicatorsIdsMethod())! as GetActiveIndicatorsIdsMethod;
    case 'HoverIndicatorMethod':
      return accessor(new HoverIndicatorMethod())! as HoverIndicatorMethod;
    case 'UnhoverIndicatorMethod':
      return accessor(new UnhoverIndicatorMethod())! as UnhoverIndicatorMethod;
    case 'SetIndicatorComponentValueMethod':
      return accessor(new SetIndicatorComponentValueMethod())! as SetIndicatorComponentValueMethod;
    default:
      return null;
  }
}

export function unionListToMethods(
  type: Methods,
  accessor: (
    index: number,
    obj:
      | AddIndicatorMethod
      | GetActiveIndicatorsIdsMethod
      | HoverIndicatorMethod
      | RemoveAllIndicatorsMethod
      | RemoveIndicatorMethod
      | SetIndicatorComponentValueMethod
      | UnhoverIndicatorMethod,
  ) =>
    | AddIndicatorMethod
    | GetActiveIndicatorsIdsMethod
    | HoverIndicatorMethod
    | RemoveAllIndicatorsMethod
    | RemoveIndicatorMethod
    | SetIndicatorComponentValueMethod
    | UnhoverIndicatorMethod
    | null,
  index: number,
):
  | AddIndicatorMethod
  | GetActiveIndicatorsIdsMethod
  | HoverIndicatorMethod
  | RemoveAllIndicatorsMethod
  | RemoveIndicatorMethod
  | SetIndicatorComponentValueMethod
  | UnhoverIndicatorMethod
  | null {
  switch (Methods[type]) {
    case 'NONE':
      return null;
    case 'AddIndicatorMethod':
      return accessor(index, new AddIndicatorMethod())! as AddIndicatorMethod;
    case 'RemoveIndicatorMethod':
      return accessor(index, new RemoveIndicatorMethod())! as RemoveIndicatorMethod;
    case 'RemoveAllIndicatorsMethod':
      return accessor(index, new RemoveAllIndicatorsMethod())! as RemoveAllIndicatorsMethod;
    case 'GetActiveIndicatorsIdsMethod':
      return accessor(index, new GetActiveIndicatorsIdsMethod())! as GetActiveIndicatorsIdsMethod;
    case 'HoverIndicatorMethod':
      return accessor(index, new HoverIndicatorMethod())! as HoverIndicatorMethod;
    case 'UnhoverIndicatorMethod':
      return accessor(index, new UnhoverIndicatorMethod())! as UnhoverIndicatorMethod;
    case 'SetIndicatorComponentValueMethod':
      return accessor(index, new SetIndicatorComponentValueMethod())! as SetIndicatorComponentValueMethod;
    default:
      return null;
  }
}
