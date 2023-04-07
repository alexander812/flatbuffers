// automatically generated by the FlatBuffers compiler, do not modify

import { SelectStrike, SelectStrikeT } from '../../milky/strikes/select-strike';
import { SetStrikes, SetStrikesT } from '../../milky/strikes/set-strikes';


export enum Methods {
  NONE = 0,
  SetStrikes = 1,
  SelectStrike = 2
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:SelectStrike|SetStrikes) => SelectStrike|SetStrikes|null
): SelectStrike|SetStrikes|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'SetStrikes': return accessor(new SetStrikes())! as SetStrikes;
    case 'SelectStrike': return accessor(new SelectStrike())! as SelectStrike;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:SelectStrike|SetStrikes) => SelectStrike|SetStrikes|null, 
  index: number
): SelectStrike|SetStrikes|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'SetStrikes': return accessor(index, new SetStrikes())! as SetStrikes;
    case 'SelectStrike': return accessor(index, new SelectStrike())! as SelectStrike;
    default: return null;
  }
}
