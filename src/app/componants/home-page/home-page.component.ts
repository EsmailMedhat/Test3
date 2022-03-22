import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  post:{type:string,content:string} = {type:"",content:""}

  posts = [
    {name:"اسماعيل الشيخ" ,dateOfPost:'2-5-2020' ,type:"الهندسه" ,content:"ليه اي حاجه فى اى حاجه"},
    {name:"اسلام حسن" ,dateOfPost:'5-8-2020' ,type:"الطب" ,content:"ليه اي حاجه فى اى حاجه"},
    {name:"احمد عبد السميع" ,dateOfPost:'22-5-2020' ,type:"الزراعه" ,content:"ليه اي حاجه فى اى حاجه"},
    {name:"على محمد" ,dateOfPost:'2-6-2020' ,type:"الهندسه" ,content:"ليه اي حاجه فى اى حاجه"}
  ]

  w = window
  // for openning the list
  open(){
    const list = document.getElementById('listElements');
    if(list != null){
      list.style.transition = 'left .5s ease-in-out';
      list.classList.add('after');
      list.classList.remove('before');
    }
  }
  // for closing the list
  close(){
    const list = document.getElementById('listElements');
    if(list != null){
      list.style.transition = 'left .5s ease-in-out';
      list.classList.remove('after');
      list.classList.add('before');
    }
  }
  posting(){
    console.log(this.post)
  }
  toggleOne(){
    'use strict'
    document.getElementById('FD')?.classList.toggle('Off');
  }
  toggleTwo(){
    document.getElementById('SD')?.classList.toggle('Off');
  }

  ngOnInit(): void {

  }

}
