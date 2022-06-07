import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactFormService} from "../shared/contact.service";
import {Contact} from "../shared/model/contact.module";
import {NgForm, FormGroup, FormControl, FormBuilder, Validator, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit  {
  contactMessage: Contact = new Contact();

  contactSuccess: Boolean = false;
  contactSubmit: Boolean = false;


  constructor(private contactFormService: ContactFormService, private http: HttpClient , private formBuillder: FormBuilder,
              private setRoute : ActivatedRoute) { }

  form = this.formBuillder.group({
    fname: ['', [Validators.required, Validators.minLength(5)]],
    lname: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(5)]]
  })



  ngOnInit() {
    this.setRoute.params
      .pipe(
        mergeMap(params=>{
          return this.contactFormService.getContact(params['id']);
        }))
      .subscribe(res =>{
        this.contactMessage = res.body ?? new Contact();
        this.form.get('fname')?.setValue(this.contactMessage.fname);
        this.form.get('lname')?.setValue(this.contactMessage.lname);
        this.form.get('email')?.setValue(this.contactMessage.email);
        this.form.get('message')?.setValue(this.contactMessage.message);
      })


  }



 /* private isContactValid() {
    return this.contactMessage.fname && this.contactMessage.lname && this.contactMessage.email && this.contactMessage.message ;
  }

  isNameValid() {
    return this.contactMessage.fname.length > 5;
  }

  isLastNameValid() {
    // @ts-ignore
    return this.contactMessage.lname.length > 5;
  }

  isEmailValid() {

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(<string>this.contactMessage.email);
  }
  isMessageValid() {
    return this.contactMessage.message?.length > 10;
  }*/


   postContactForm() {

    if (this.form.valid){
      const contactMessage: Contact = new Contact();
      contactMessage.fname = this.form.get('fname')?.value;
      contactMessage.lname = this.form.get('lname')?.value;
      contactMessage.email = this.form.get('email')?.value;
      contactMessage.message = this.form.get('message')?.value;
      this.contactFormService.postContactForm(contactMessage)
        .subscribe(res =>{

        })
    }

   }

}








