// automatically generated by the FlatBuffers compiler, do not modify

import { HideProfitScaleForSelectedDeal, HideProfitScaleForSelectedDealT } from '../../milky/deal-profit-scale/hide-profit-scale-for-selected-deal';
import { ShowProfitScaleForSelectedDeal, ShowProfitScaleForSelectedDealT } from '../../milky/deal-profit-scale/show-profit-scale-for-selected-deal';
import { UpdateDealProfitScale, UpdateDealProfitScaleT } from '../../milky/deal-profit-scale/update-deal-profit-scale';


export enum Methods {
  NONE = 0,
  ShowProfitScaleForSelectedDeal = 1,
  UpdateDealProfitScale = 2,
  HideProfitScaleForSelectedDeal = 3
}

export function unionToMethods(
  type: Methods,
  accessor: (obj:HideProfitScaleForSelectedDeal|ShowProfitScaleForSelectedDeal|UpdateDealProfitScale) => HideProfitScaleForSelectedDeal|ShowProfitScaleForSelectedDeal|UpdateDealProfitScale|null
): HideProfitScaleForSelectedDeal|ShowProfitScaleForSelectedDeal|UpdateDealProfitScale|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'ShowProfitScaleForSelectedDeal': return accessor(new ShowProfitScaleForSelectedDeal())! as ShowProfitScaleForSelectedDeal;
    case 'UpdateDealProfitScale': return accessor(new UpdateDealProfitScale())! as UpdateDealProfitScale;
    case 'HideProfitScaleForSelectedDeal': return accessor(new HideProfitScaleForSelectedDeal())! as HideProfitScaleForSelectedDeal;
    default: return null;
  }
}

export function unionListToMethods(
  type: Methods, 
  accessor: (index: number, obj:HideProfitScaleForSelectedDeal|ShowProfitScaleForSelectedDeal|UpdateDealProfitScale) => HideProfitScaleForSelectedDeal|ShowProfitScaleForSelectedDeal|UpdateDealProfitScale|null, 
  index: number
): HideProfitScaleForSelectedDeal|ShowProfitScaleForSelectedDeal|UpdateDealProfitScale|null {
  switch(Methods[type]) {
    case 'NONE': return null; 
    case 'ShowProfitScaleForSelectedDeal': return accessor(index, new ShowProfitScaleForSelectedDeal())! as ShowProfitScaleForSelectedDeal;
    case 'UpdateDealProfitScale': return accessor(index, new UpdateDealProfitScale())! as UpdateDealProfitScale;
    case 'HideProfitScaleForSelectedDeal': return accessor(index, new HideProfitScaleForSelectedDeal())! as HideProfitScaleForSelectedDeal;
    default: return null;
  }
}
