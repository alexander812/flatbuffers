// automatically generated by the FlatBuffers compiler, do not modify

import { LabelAnimation, LabelAnimationT } from '../../milky/animations/label-animation.js';
import { SplashAnimation, SplashAnimationT } from '../../milky/animations/splash-animation.js';


export enum Animations {
  NONE = 0,
  LabelAnimation = 1,
  SplashAnimation = 2
}

export function unionToAnimations(
  type: Animations,
  accessor: (obj:LabelAnimation|SplashAnimation) => LabelAnimation|SplashAnimation|null
): LabelAnimation|SplashAnimation|null {
  switch(Animations[type]) {
    case 'NONE': return null; 
    case 'LabelAnimation': return accessor(new LabelAnimation())! as LabelAnimation;
    case 'SplashAnimation': return accessor(new SplashAnimation())! as SplashAnimation;
    default: return null;
  }
}

export function unionListToAnimations(
  type: Animations, 
  accessor: (index: number, obj:LabelAnimation|SplashAnimation) => LabelAnimation|SplashAnimation|null, 
  index: number
): LabelAnimation|SplashAnimation|null {
  switch(Animations[type]) {
    case 'NONE': return null; 
    case 'LabelAnimation': return accessor(index, new LabelAnimation())! as LabelAnimation;
    case 'SplashAnimation': return accessor(index, new SplashAnimation())! as SplashAnimation;
    default: return null;
  }
}
