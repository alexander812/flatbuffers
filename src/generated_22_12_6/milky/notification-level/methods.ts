// automatically generated by the FlatBuffers compiler, do not modify

import { Add, AddT } from '../../milky/notification-level/add.js';
import { Remove, RemoveT } from '../../milky/notification-level/remove.js';
import { SetAutoHide, SetAutoHideT } from '../../milky/notification-level/set-auto-hide.js';
import { Update, UpdateT } from '../../milky/notification-level/update.js';


export enum Methods {
  NONE = 0,
  Add = 1,
  Remove = 2,
  Update = 3,
  SetAutoHide = 4
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:Add|Remove|SetAutoHide|Update) => Add|Remove|SetAutoHide|Update|null
): Add|Remove|SetAutoHide|Update|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'Add': return accessor(new Add())! as Add;
    case 'Remove': return accessor(new Remove())! as Remove;
    case 'Update': return accessor(new Update())! as Update;
    case 'SetAutoHide': return accessor(new SetAutoHide())! as SetAutoHide;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:Add|Remove|SetAutoHide|Update) => Add|Remove|SetAutoHide|Update|null, 
  index: number
): Add|Remove|SetAutoHide|Update|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'Add': return accessor(index, new Add())! as Add;
    case 'Remove': return accessor(index, new Remove())! as Remove;
    case 'Update': return accessor(index, new Update())! as Update;
    case 'SetAutoHide': return accessor(index, new SetAutoHide())! as SetAutoHide;
    default: return null;
  }
}
