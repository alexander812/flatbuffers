// automatically generated by the FlatBuffers compiler, do not modify

import { ClearData, ClearDataT } from '../../milky/common-requests/clear-data';
import { ReloadFonts, ReloadFontsT } from '../../milky/common-requests/reload-fonts';
import { ResetTextureAtlas, ResetTextureAtlasT } from '../../milky/common-requests/reset-texture-atlas';
import { SetServerTime, SetServerTimeT } from '../../milky/common-requests/set-server-time';


export enum Methods {
  NONE = 0,
  ResetTextureAtlas = 1,
  ReloadFonts = 2,
  SetServerTime = 3,
  ClearData = 4
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:ClearData|ReloadFonts|ResetTextureAtlas|SetServerTime) => ClearData|ReloadFonts|ResetTextureAtlas|SetServerTime|null
): ClearData|ReloadFonts|ResetTextureAtlas|SetServerTime|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'ResetTextureAtlas': return accessor(new ResetTextureAtlas())! as ResetTextureAtlas;
    case 'ReloadFonts': return accessor(new ReloadFonts())! as ReloadFonts;
    case 'SetServerTime': return accessor(new SetServerTime())! as SetServerTime;
    case 'ClearData': return accessor(new ClearData())! as ClearData;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:ClearData|ReloadFonts|ResetTextureAtlas|SetServerTime) => ClearData|ReloadFonts|ResetTextureAtlas|SetServerTime|null, 
  index: number
): ClearData|ReloadFonts|ResetTextureAtlas|SetServerTime|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'ResetTextureAtlas': return accessor(index, new ResetTextureAtlas())! as ResetTextureAtlas;
    case 'ReloadFonts': return accessor(index, new ReloadFonts())! as ReloadFonts;
    case 'SetServerTime': return accessor(index, new SetServerTime())! as SetServerTime;
    case 'ClearData': return accessor(index, new ClearData())! as ClearData;
    default: return null;
  }
}