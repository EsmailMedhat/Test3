import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Loss} from "../models/loss";
import {NewJob} from "../models/new-job";
import {stringify} from "@angular/compiler/src/util";
import {NeedJob} from "../models/need-job";
import {Found} from "../models/found";
import {Things} from "../models/things";
import {Financi} from "../models/financi";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  loginUser(email: string,password: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('phone',email);
    //params = params.set('email',email);
    params = params.set('password',password);
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/login',params).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  createUser(user: User,files: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('email',user.email);
    // @ts-ignore
    body.append('password',user.password);
    // @ts-ignore
    body.append('phone',user.phone);
    // @ts-ignore
    body.append('name',user.name);
    // @ts-ignore
    body.append('main_address',user.main_address);
    // @ts-ignore
    body.set('date_of_birth',user.date_of_birth);
    // @ts-ignore
    body.append('id_number',user.id_number);
    // @ts-ignore
    body.append('job',user.job);
    // @ts-ignore
    body.append('gender',user.gender);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/sign-up',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getLost(num:number): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append("personal",num);
    // @ts-ignore
    // @ts-ignore
    body.append("user_id",sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/get-lostes',body).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  getApp(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/needer/get-my-need-job',body).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  getApplicantList(): Observable<any> {
    // @ts-ignore
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/helper/get-provide-jop-applyers',{
      "job_id": 1
    }).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }
  getApplyForJob(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>('https://project-graduation.000webhostapp.com/api/web/needer/get-provide-jobs').pipe(
      map(
        response => {
          return response
        }
      )
    )
  }
  getAllMyProvideJob(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append("user_id",sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-my-provide-jop-posts', body).pipe(
      map(
        response => {
          console.log(response)
          return response
        }
      )
    )
  }
  getNeedJobs(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>('https://project-graduation.000webhostapp.com/api/web/helper/get-need-jobs').pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  getProvideJobs(id: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('job_id',id);
    // @ts-ignore
    return this.http.post<any>('https://project-graduation.000webhostapp.com/api/web/helper/get-provide-jop-applyers',body).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }

  createNewJob(job: NewJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('qualification',job.qualification);
    // @ts-ignore
    body.append('skills',job.skills);
    // @ts-ignore
    body.append('certificates',job.certificates);
    // @ts-ignore
    body.append('summary_about_you',job.summary_about_you);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/create-need-jop-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createFound(found: Found,f: File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type',found.type);
    // @ts-ignore
    body.append('found_date',found.found_date);
    // @ts-ignore
    body.append('found_place',found.found_place);
    // @ts-ignore
    body.append('description',found.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',found.first_color);
    // @ts-ignore
    body.append('second_color',found.second_color);
    // @ts-ignore
    body.append('brand',found.brand);
    // @ts-ignore
    body.append('category',found.category);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/make-found',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createLost(loss: Loss,f: File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type',loss.type);
    // @ts-ignore
    body.append('expected_lost_date',loss.expected_lost_date);
    // @ts-ignore
    body.append('expected_lost_place',loss.expected_lost_place);
    // @ts-ignore
    body.append('description',loss.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',loss.first_color);
    // @ts-ignore
    body.append('second_color',loss.second_color);
    // @ts-ignore
    body.append('brand',loss.brand);
    // @ts-ignore
    body.append('category',loss.category);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/make-lost',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  delete(job: NewJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('job_id',job.id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/delete-need-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  updateJob(job: NewJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('job_id',17);
    // @ts-ignore
    body.append('qualification',job.qualification);
    // @ts-ignore
    body.append('skills',job.skills);
    // @ts-ignore
    body.append('certificates',job.certificates);
    // @ts-ignore
    body.append('summary_about_you',job.Summary_about_you);

    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/update-need-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createProvideJob(job: NeedJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('required_qualification',job.required_qualification);
    // @ts-ignore
    body.append('required_skills',job.required_skills);
    // @ts-ignore
    body.append('required_certificates',job.required_certificates);
    // @ts-ignore
    //body.append('Summary_about_you',job.Summary_about_you);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/create-provide-jop-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  updateProvideJob(job: NeedJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    // @ts-ignore
    body.append('required_qualification',job.required_qualification);
    // @ts-ignore
    body.append('required_skills',job.required_skills);
    // @ts-ignore
    body.append('required_certificates',job.required_certificates);
    // @ts-ignore
    //body.append('Summary_about_you',job.Summary_about_you);
    // @ts-ignore
    body.append('job_id',job.id);

    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/update-provide-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  deleteProvideJob(job: NeedJob): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('job_id',job.id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    console.log(job.id)
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/delete-provide-job',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteApplyJob(id: any,res: any){
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('apply_post_id',id);
    // @ts-ignore
    body.append('response',res);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/response-provide-jop-applyer',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  deleteLost(id: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('lost_id',id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/delete-lost',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  updateLost(loss: Loss,f: File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type',loss.type);
    body.append('lost_id',loss.id);
    // @ts-ignore
    body.append('expected_lost_date',loss.expected_lost_date);
    // @ts-ignore
    body.append('expected_lost_place',loss.expected_lost_place);
    // @ts-ignore
    body.append('description',loss.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',loss.first_color);
    // @ts-ignore
    body.append('second_color',loss.second_color);
    // @ts-ignore
    body.append('brand',loss.brand);
    // @ts-ignore
    body.append('category',loss.category);
    // @ts-ignore

    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/update-lost',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getMyFound(): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //body.append('Summary_about_you',job.Summary_about_you);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-my-founds',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  updateMyFound(found: Found,f:File): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('found_id',found.id);
    body.append('type',found.type);
    // @ts-ignore
    body.append('found_date',found.found_date);
    // @ts-ignore
    body.append('found_place',found.found_place);
    // @ts-ignore
    body.append('description',found.description);
    // @ts-ignore
    body.append('attach',f);
    // @ts-ignore
    body.append('first_color',found.first_color);
    // @ts-ignore
    body.append('second_color',found.second_color);
    // @ts-ignore
    body.append('brand',found.brand);
    // @ts-ignore
    body.append('category',found.category);
    // @ts-ignore
    // @ts-ignore
    //body.append('attach',job.main_address);

    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/update-found',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteMyFound(id: any): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    //alert(job.id)
    body.append('found_id',id);
    // @ts-ignore
    //body.append('attach',job.main_address);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/delete-found',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createThing(thing: Things): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('type_of_service',thing.type_of_service);
    // @ts-ignore
    body.append('from_place',thing.from_place);
    // @ts-ignore
    body.append('to_place',thing.to_place);
    // @ts-ignore
    body.append('attach',thing.attach);
    // @ts-ignore
    body.append('opposite',thing.opposite);
    // @ts-ignore
    body.append('from_date',thing.from_date);
    // @ts-ignore
    body.append('to_date',thing.to_date);
    // @ts-ignore
    body.append('note',thing.note);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/insert-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getThings(): Observable<any> {
    return this.http.get('https://project-graduation.000webhostapp.com/api/web/needer/get-all-supports-to-be-done').pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  applyToSupprtThings(temp: Things): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    body.append('post_id',temp.id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/apply-to-support-thing',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createSupThing(thing: Things): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('from_place',thing.from_place);
    // @ts-ignore
    body.append('to_place',thing.to_place);
    // @ts-ignore
    body.append('date',thing.date);
    // @ts-ignore
    body.append('note',thing.note);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/insert-support-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getAllThings(): Observable<any> {
    return this.http.get('https://project-graduation.000webhostapp.com/api/web/helper/get-all-things-to-be-done').pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  applyToThings(temp: Things): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    body.append('post_id',temp.id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/apply-to-thing-to-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  updateThing(thing: Things): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    // @ts-ignore
    body.append('type_of_service',thing.type_of_service);
    // @ts-ignore
    body.append('from_place',thing.from_place);
    // @ts-ignore
    body.append('to_place',thing.to_place);
    // @ts-ignore
    body.append('attach',thing.attach);
    // @ts-ignore
    body.append('opposite',thing.opposite);
    // @ts-ignore
    body.append('from_date',thing.from_date);
    // @ts-ignore
    body.append('to_date',thing.to_date);
    // @ts-ignore
    body.append('note',thing.note);
    // @ts-ignore
    body.append('post_id',thing.id);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/update-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getAllMyThings(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/get-all-my-things-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteThings(temp: Things): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('post_id',temp.id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/delete-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getApply(id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('post_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/get-applyers-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  apply(res:any,id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('response',res);
    body.append('applyer_post_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/response-to-applyer-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  updateSupportThing(thing: Things): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    body.append('from_place',thing.from_place);
    // @ts-ignore
    body.append('to_place',thing.to_place);
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    body.append('date',thing.date);
    // @ts-ignore
    body.append('note',thing.note);
    // @ts-ignore
    body.append('post_id',thing.id);
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/update-support-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getAllSupportMyThings(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-support-all-my-things-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteMySuppThings(temp: Things): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('post_id',temp.id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/delete-support-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getApplySu(id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('post_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-support-applyers-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  applySu(res:any,id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('response',res);
    body.append('needer_post_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/response-to-applyer-support-thing-to-be-done',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  createMyFinanciallHelp(financi: Financi): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('value',financi.value);
    // @ts-ignore
    body.append('attach',financi.attach);
    // @ts-ignore
    body.append('target_help',financi.target_help);
    // @ts-ignore
    body.append('type_of_help',financi.type_of_help);
    // @ts-ignore
    body.append('provide_help_way',financi.provide_help_way);
    // @ts-ignore
    body.append('another_user_name',financi.another_user_name);
    // @ts-ignore
    body.append('specific_address',financi.specific_address);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/insert-need-money-help',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getGiv(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-financial-need',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  filterGiv(type_of_help: string,provide_help_way:string): Observable<any> {
    var body = new FormData();

    // @ts-ignore
    body.append('type_of_help',type_of_help);
    // @ts-ignore
    body.append('provide_help_way',provide_help_way);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-financial-need',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  helpGiv(id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('financial_post_id',id);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/provide-financial-help',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  updateMyFinanciallHelpAsk(financi: Financi): Observable<any> {
    var body = new FormData();
    //let params = new HttpParams();
    // @ts-ignore
    body.append('post_id',financi.id);
    // @ts-ignore
    body.append('value',financi.value);
    // @ts-ignore
    body.append('attach',financi.attach);
    // @ts-ignore
    body.append('target_help',financi.target_help);
    // @ts-ignore
    body.append('type_of_help',financi.type_of_help);
    // @ts-ignore
    body.append('provide_help_way',financi.provide_help_way);
    // @ts-ignore
    body.append('another_user_name',financi.another_user_name);
    // @ts-ignore
    body.append('specific_address',financi.specific_address);
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    // @ts-ignore
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/update-need-money-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteMyFinanciallHelpAsk(temp: Financi): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('post_id',temp.id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/delete-need-money-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getMyFinanciallHelpAsk(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/get-all-my-need-money-posts',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getApplyersToNeedMoneyPost(id:any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('post_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/get-applyers-to-need-money-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  getMyApplicantForFinancialHelp(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/get-all-my-provide-financial-helps',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  deleteMyApplicantForFinancialHelp(id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('apply_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/helper/delete-my-provide-financial-help',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  AccApplyersToNeedMoneyPost(id: any): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('applyer_request_id',id);
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/accept-applyer-to-need-money-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  RegApplyersToNeedMoneyPost(): Observable<any> {
    var body = new FormData();
    // @ts-ignore
    body.append('user_id',sessionStorage.getItem("id_user"));
    return this.http.post('https://project-graduation.000webhostapp.com/api/web/needer/get-applyers-to-need-money-post',body).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }


}
