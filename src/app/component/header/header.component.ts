import { Component } from '@angular/core';
import { assets } from 'src/app/static/assets';
import {SideNavService} from "../../service/side-nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
assets = assets;

constructor(public sideNavService:SideNavService) {
}

toggleSideNav(){
  this.sideNavService.toggleState()
}
}
