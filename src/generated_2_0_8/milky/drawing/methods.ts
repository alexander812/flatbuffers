// automatically generated by the FlatBuffers compiler, do not modify

import { AddDrawingMethod, AddDrawingMethodT } from '../../milky/drawing/add-drawing-method';
import { CancelDrawingCreatingMethod, CancelDrawingCreatingMethodT } from '../../milky/drawing/cancel-drawing-creating-method';
import { CreateDrawingMethod, CreateDrawingMethodT } from '../../milky/drawing/create-drawing-method';
import { EditDrawingMethod, EditDrawingMethodT } from '../../milky/drawing/edit-drawing-method';
import { HoverDrawinMethod, HoverDrawinMethodT } from '../../milky/drawing/hover-drawin-method';
import { RemoveAllDrawingsMethod, RemoveAllDrawingsMethodT } from '../../milky/drawing/remove-all-drawings-method';
import { RemoveDrawingMethod, RemoveDrawingMethodT } from '../../milky/drawing/remove-drawing-method';
import { SelectDrawingFromClientMethod, SelectDrawingFromClientMethodT } from '../../milky/drawing/select-drawing-from-client-method';
import { UnhoverDrawingMethod, UnhoverDrawingMethodT } from '../../milky/drawing/unhover-drawing-method';


export enum Methods {
  NONE = 0,
  AddDrawingMethod = 1,
  EditDrawingMethod = 2,
  SelectDrawingFromClientMethod = 3,
  RemoveDrawingMethod = 4,
  RemoveAllDrawingsMethod = 5,
  HoverDrawinMethod = 6,
  UnhoverDrawingMethod = 7,
  CreateDrawingMethod = 8,
  CancelDrawingCreatingMethod = 9
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:AddDrawingMethod|CancelDrawingCreatingMethod|CreateDrawingMethod|EditDrawingMethod|HoverDrawinMethod|RemoveAllDrawingsMethod|RemoveDrawingMethod|SelectDrawingFromClientMethod|UnhoverDrawingMethod) => AddDrawingMethod|CancelDrawingCreatingMethod|CreateDrawingMethod|EditDrawingMethod|HoverDrawinMethod|RemoveAllDrawingsMethod|RemoveDrawingMethod|SelectDrawingFromClientMethod|UnhoverDrawingMethod|null
): AddDrawingMethod|CancelDrawingCreatingMethod|CreateDrawingMethod|EditDrawingMethod|HoverDrawinMethod|RemoveAllDrawingsMethod|RemoveDrawingMethod|SelectDrawingFromClientMethod|UnhoverDrawingMethod|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'AddDrawingMethod': return accessor(new AddDrawingMethod())! as AddDrawingMethod;
    case 'EditDrawingMethod': return accessor(new EditDrawingMethod())! as EditDrawingMethod;
    case 'SelectDrawingFromClientMethod': return accessor(new SelectDrawingFromClientMethod())! as SelectDrawingFromClientMethod;
    case 'RemoveDrawingMethod': return accessor(new RemoveDrawingMethod())! as RemoveDrawingMethod;
    case 'RemoveAllDrawingsMethod': return accessor(new RemoveAllDrawingsMethod())! as RemoveAllDrawingsMethod;
    case 'HoverDrawinMethod': return accessor(new HoverDrawinMethod())! as HoverDrawinMethod;
    case 'UnhoverDrawingMethod': return accessor(new UnhoverDrawingMethod())! as UnhoverDrawingMethod;
    case 'CreateDrawingMethod': return accessor(new CreateDrawingMethod())! as CreateDrawingMethod;
    case 'CancelDrawingCreatingMethod': return accessor(new CancelDrawingCreatingMethod())! as CancelDrawingCreatingMethod;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:AddDrawingMethod|CancelDrawingCreatingMethod|CreateDrawingMethod|EditDrawingMethod|HoverDrawinMethod|RemoveAllDrawingsMethod|RemoveDrawingMethod|SelectDrawingFromClientMethod|UnhoverDrawingMethod) => AddDrawingMethod|CancelDrawingCreatingMethod|CreateDrawingMethod|EditDrawingMethod|HoverDrawinMethod|RemoveAllDrawingsMethod|RemoveDrawingMethod|SelectDrawingFromClientMethod|UnhoverDrawingMethod|null, 
  index: number
): AddDrawingMethod|CancelDrawingCreatingMethod|CreateDrawingMethod|EditDrawingMethod|HoverDrawinMethod|RemoveAllDrawingsMethod|RemoveDrawingMethod|SelectDrawingFromClientMethod|UnhoverDrawingMethod|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'AddDrawingMethod': return accessor(index, new AddDrawingMethod())! as AddDrawingMethod;
    case 'EditDrawingMethod': return accessor(index, new EditDrawingMethod())! as EditDrawingMethod;
    case 'SelectDrawingFromClientMethod': return accessor(index, new SelectDrawingFromClientMethod())! as SelectDrawingFromClientMethod;
    case 'RemoveDrawingMethod': return accessor(index, new RemoveDrawingMethod())! as RemoveDrawingMethod;
    case 'RemoveAllDrawingsMethod': return accessor(index, new RemoveAllDrawingsMethod())! as RemoveAllDrawingsMethod;
    case 'HoverDrawinMethod': return accessor(index, new HoverDrawinMethod())! as HoverDrawinMethod;
    case 'UnhoverDrawingMethod': return accessor(index, new UnhoverDrawingMethod())! as UnhoverDrawingMethod;
    case 'CreateDrawingMethod': return accessor(index, new CreateDrawingMethod())! as CreateDrawingMethod;
    case 'CancelDrawingCreatingMethod': return accessor(index, new CancelDrawingCreatingMethod())! as CancelDrawingCreatingMethod;
    default: return null;
  }
}
