// automatically generated by the FlatBuffers compiler, do not modify

import { DynamicResource, DynamicResourceT } from '../../milky/resources/dynamic-resource';
import { StaticResource, StaticResourceT } from '../../milky/resources/static-resource';


export enum ResourceRequest {
  NONE = 0,
  StaticResource = 1,
  DynamicResource = 2
}

export function unionToResourceRequest(
  type: ResourceRequest,
  accessor: (obj:DynamicResource|StaticResource) => DynamicResource|StaticResource|null
): DynamicResource|StaticResource|null {
  switch(ResourceRequest[type]) {
    case 'NONE': return null; 
    case 'StaticResource': return accessor(new StaticResource())! as StaticResource;
    case 'DynamicResource': return accessor(new DynamicResource())! as DynamicResource;
    default: return null;
  }
}

export function unionListToResourceRequest(
  type: ResourceRequest, 
  accessor: (index: number, obj:DynamicResource|StaticResource) => DynamicResource|StaticResource|null, 
  index: number
): DynamicResource|StaticResource|null {
  switch(ResourceRequest[type]) {
    case 'NONE': return null; 
    case 'StaticResource': return accessor(index, new StaticResource())! as StaticResource;
    case 'DynamicResource': return accessor(index, new DynamicResource())! as DynamicResource;
    default: return null;
  }
}
