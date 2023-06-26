import {Injectable} from '@angular/core';
import {navState} from "../shared/nav_state";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private state:navState = navState.FULL_STATE;
  constructor() { }

  get _state():navState{
    return this.state;
  }

  toggleState():void{
    if(this.state == navState.FULL_STATE){
      this.state = navState.CLOSED_STATE
    }else{
      this.state = navState.FULL_STATE
    }
  }


}
