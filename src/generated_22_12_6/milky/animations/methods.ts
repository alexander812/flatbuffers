// automatically generated by the FlatBuffers compiler, do not modify

import { LaunchAnimationMethod, LaunchAnimationMethodT } from '../../milky/animations/launch-animation-method.js';
import { RemoveAllAnimationsMethod, RemoveAllAnimationsMethodT } from '../../milky/animations/remove-all-animations-method.js';


export enum Methods {
  NONE = 0,
  LaunchAnimationMethod = 1,
  RemoveAllAnimationsMethod = 2
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:LaunchAnimationMethod|RemoveAllAnimationsMethod) => LaunchAnimationMethod|RemoveAllAnimationsMethod|null
): LaunchAnimationMethod|RemoveAllAnimationsMethod|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'LaunchAnimationMethod': return accessor(new LaunchAnimationMethod())! as LaunchAnimationMethod;
    case 'RemoveAllAnimationsMethod': return accessor(new RemoveAllAnimationsMethod())! as RemoveAllAnimationsMethod;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:LaunchAnimationMethod|RemoveAllAnimationsMethod) => LaunchAnimationMethod|RemoveAllAnimationsMethod|null, 
  index: number
): LaunchAnimationMethod|RemoveAllAnimationsMethod|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'LaunchAnimationMethod': return accessor(index, new LaunchAnimationMethod())! as LaunchAnimationMethod;
    case 'RemoveAllAnimationsMethod': return accessor(index, new RemoveAllAnimationsMethod())! as RemoveAllAnimationsMethod;
    default: return null;
  }
}
