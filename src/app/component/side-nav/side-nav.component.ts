import {Component} from '@angular/core';
import {SideNavService} from "../../service/side-nav.service";
import {navState} from "../../shared/nav_state";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor(private sideNavService:SideNavService) {
  }

  getState():navState{
    return this.sideNavService._state;
  }

  getClass():string{
    return this.getState()== navState.FULL_STATE ? "full" : "closed";
  }

}
