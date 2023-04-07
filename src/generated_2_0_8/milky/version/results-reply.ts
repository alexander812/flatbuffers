// automatically generated by the FlatBuffers compiler, do not modify

import { Error, ErrorT } from '../../milky/common/error';
import { VersionInfo, VersionInfoT } from '../../milky/model/version/version-info';


export enum ResultsReply {
  NONE = 0,
  model_version_VersionInfo = 1,
  common_Error = 2
}

export function unionToResultsReply(
  type: ResultsReply,
  accessor: (obj:Error|VersionInfo) => Error|VersionInfo|null
): Error|VersionInfo|null {
  switch(ResultsReply[type]) {
    case 'NONE': return null; 
    case 'model_version_VersionInfo': return accessor(new VersionInfo())! as VersionInfo;
    case 'common_Error': return accessor(new Error())! as Error;
    default: return null;
  }
}

export function unionListToResultsReply(
  type: ResultsReply, 
  accessor: (index: number, obj:Error|VersionInfo) => Error|VersionInfo|null, 
  index: number
): Error|VersionInfo|null {
  switch(ResultsReply[type]) {
    case 'NONE': return null; 
    case 'model_version_VersionInfo': return accessor(index, new VersionInfo())! as VersionInfo;
    case 'common_Error': return accessor(index, new Error())! as Error;
    default: return null;
  }
}