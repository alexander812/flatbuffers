// automatically generated by the FlatBuffers compiler, do not modify

import { NotifyEditLimit, NotifyEditLimitT } from '../../milky/deal-limits/notify-edit-limit';
import { NotifyTopUp, NotifyTopUpT } from '../../milky/deal-limits/notify-top-up';
import { NotifyTopUpPosition, NotifyTopUpPositionT } from '../../milky/deal-limits/notify-top-up-position';


export enum Notifies {
  NONE = 0,
  NotifyEditLimit = 1,
  NotifyTopUp = 2,
  NotifyTopUpPosition = 3
}

export function unionToNotifies(
  type: Notifies,
  accessor: (obj:NotifyEditLimit|NotifyTopUp|NotifyTopUpPosition) => NotifyEditLimit|NotifyTopUp|NotifyTopUpPosition|null
): NotifyEditLimit|NotifyTopUp|NotifyTopUpPosition|null {
  switch(Notifies[type]) {
    case 'NONE': return null; 
    case 'NotifyEditLimit': return accessor(new NotifyEditLimit())! as NotifyEditLimit;
    case 'NotifyTopUp': return accessor(new NotifyTopUp())! as NotifyTopUp;
    case 'NotifyTopUpPosition': return accessor(new NotifyTopUpPosition())! as NotifyTopUpPosition;
    default: return null;
  }
}

export function unionListToNotifies(
  type: Notifies, 
  accessor: (index: number, obj:NotifyEditLimit|NotifyTopUp|NotifyTopUpPosition) => NotifyEditLimit|NotifyTopUp|NotifyTopUpPosition|null, 
  index: number
): NotifyEditLimit|NotifyTopUp|NotifyTopUpPosition|null {
  switch(Notifies[type]) {
    case 'NONE': return null; 
    case 'NotifyEditLimit': return accessor(index, new NotifyEditLimit())! as NotifyEditLimit;
    case 'NotifyTopUp': return accessor(index, new NotifyTopUp())! as NotifyTopUp;
    case 'NotifyTopUpPosition': return accessor(index, new NotifyTopUpPosition())! as NotifyTopUpPosition;
    default: return null;
  }
}
