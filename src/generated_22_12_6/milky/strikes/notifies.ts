// automatically generated by the FlatBuffers compiler, do not modify

import { OnStrikeSelected, OnStrikeSelectedT } from '../../milky/strikes/on-strike-selected.js';
import { OnStrikeUnselected, OnStrikeUnselectedT } from '../../milky/strikes/on-strike-unselected.js';


export enum Notifies {
  NONE = 0,
  OnStrikeSelected = 1,
  OnStrikeUnselected = 2
}

export function unionToNotifies(
  type: Notifies,
  accessor: (obj:OnStrikeSelected|OnStrikeUnselected) => OnStrikeSelected|OnStrikeUnselected|null
): OnStrikeSelected|OnStrikeUnselected|null {
  switch(Notifies[type]) {
    case 'NONE': return null; 
    case 'OnStrikeSelected': return accessor(new OnStrikeSelected())! as OnStrikeSelected;
    case 'OnStrikeUnselected': return accessor(new OnStrikeUnselected())! as OnStrikeUnselected;
    default: return null;
  }
}

export function unionListToNotifies(
  type: Notifies, 
  accessor: (index: number, obj:OnStrikeSelected|OnStrikeUnselected) => OnStrikeSelected|OnStrikeUnselected|null, 
  index: number
): OnStrikeSelected|OnStrikeUnselected|null {
  switch(Notifies[type]) {
    case 'NONE': return null; 
    case 'OnStrikeSelected': return accessor(index, new OnStrikeSelected())! as OnStrikeSelected;
    case 'OnStrikeUnselected': return accessor(index, new OnStrikeUnselected())! as OnStrikeUnselected;
    default: return null;
  }
}
