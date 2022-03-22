import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() evnt = new EventEmitter()

  ngOnInit(): void {
  }

  isLogin(): boolean {
    if(sessionStorage.getItem("id_user") == null){
      return false
    }
    return true
  }
  logOut(){
    sessionStorage.removeItem("id_user");
    this.router.navigateByUrl('/login')
  }
  send(){
    this.evnt.emit()
  }
}
