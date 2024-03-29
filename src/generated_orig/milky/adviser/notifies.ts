// automatically generated by the FlatBuffers compiler, do not modify

import { AdviserPosition, AdviserPositionT } from '../../milky/adviser/adviser-position.js';
import { AdviserSignal, AdviserSignalT } from '../../milky/adviser/adviser-signal.js';

export enum Notifies {
  NONE = 0,
  AdviserSignal = 1,
  AdviserPosition = 2,
}

export function unionToNotifies(
  type: Notifies,
  accessor: (obj: AdviserPosition | AdviserSignal) => AdviserPosition | AdviserSignal | null,
): AdviserPosition | AdviserSignal | null {
  switch (Notifies[type]) {
    case 'NONE':
      return null;
    case 'AdviserSignal':
      return accessor(new AdviserSignal())! as AdviserSignal;
    case 'AdviserPosition':
      return accessor(new AdviserPosition())! as AdviserPosition;
    default:
      return null;
  }
}

export function unionListToNotifies(
  type: Notifies,
  accessor: (index: number, obj: AdviserPosition | AdviserSignal) => AdviserPosition | AdviserSignal | null,
  index: number,
): AdviserPosition | AdviserSignal | null {
  switch (Notifies[type]) {
    case 'NONE':
      return null;
    case 'AdviserSignal':
      return accessor(index, new AdviserSignal())! as AdviserSignal;
    case 'AdviserPosition':
      return accessor(index, new AdviserPosition())! as AdviserPosition;
    default:
      return null;
  }
}
