import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor() { }

  w = window

  myPosts = [
    {name:"اسماعيل الشيخ" ,dateOfPost:'2-5-2020' ,type:"الهندسه" ,content:"ليه اي حاجه فى اى حاجه"},
    {name:"اسلام حسن" ,dateOfPost:'5-8-2020' ,type:"الطب" ,content:"ليه اي حاجه فى اى حاجه"},
    {name:"احمد عبد السميع" ,dateOfPost:'22-5-2020' ,type:"الزراعه" ,content:"ليه اي حاجه فى اى حاجه"},
    {name:"على محمد" ,dateOfPost:'2-6-2020' ,type:"الهندسه" ,content:"ليه اي حاجه فى اى حاجه"}
  ]

  myInfo = {
    name:"اسماعيل مدحت على السيخ",
    phone:555333222,
    curAddress:"",
    address:"",
    gender:"",
    dateOfBirth:"",
    jop:"",
    email:""
  }

  activeState = true

  update(){
    this.activeState = false
  }
  save(){
    this.activeState = true
  }
  toggleOne(){
    'use strict'
    document.getElementById('FD')?.classList.toggle('Off');
  }
  toggleTwo(){
    document.getElementById('SD')?.classList.toggle('Off');
  }
  open(){
    const list = document.getElementById('listElements');
    if(list != null){
      list.style.transition = 'right .5s ease-in-out';
      list.classList.add('after');
      list.classList.remove('before');
    }
  }
  close(){
    const list = document.getElementById('listElements');
    if(list != null){
      list.style.transition = 'right .5s ease-in-out';
      list.classList.remove('after');
      list.classList.add('before');
    }
  }
  ngOnInit(): void {
  }

}
