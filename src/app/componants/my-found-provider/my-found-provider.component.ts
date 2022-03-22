import { Component, OnInit } from '@angular/core';
import {Loss} from "../../models/loss";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {Found} from "../../models/found";

@Component({
  selector: 'app-my-found-provider',
  templateUrl: './my-found-provider.component.html',
  styleUrls: ['./my-found-provider.component.css']
})
export class MyFoundProviderComponent implements OnInit {

  block = true;
  founds: Found[] = [];
  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getFounds()
  }
  getFounds() {
    this.userServiceService.getMyFound().subscribe({
      next: response => {
        console.log(response.data)
        this.founds = response.data
      }
    });
  }
  enableInputs(id: any){
    let size = document.getElementsByClassName("ena"+id).length;
    // @ts-ignore
    if(this.block){
      for (let i =0;i<size;i++){
        document.getElementsByClassName("ena"+id)[i].removeAttribute('disabled')
      }
      this.block = false;
    } else {
      for (let i =0;i<size;i++){
        document.getElementsByClassName("ena"+id)[i].setAttribute('disabled',String(true))
      }
      this.block = true;
    }
    //this.block = !this.block;
  }



  update(temp: Found){
    console.log(temp)
    // @ts-ignore
    this.userServiceService.updateMyFound(temp,document.getElementById("file").files[0]).subscribe({
      next: response => {
        console.log(response)
        alert(response.msg)
      }
    });
  }
  delete(id: any){

    // @ts-ignore
    this.userServiceService.deleteMyFound(id).subscribe({
      next: response => {
        console.log(response)
        alert(response.msg)
      }
    });
  }


}
