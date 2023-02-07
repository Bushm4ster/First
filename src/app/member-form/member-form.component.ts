import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{

  form :any;

  ngOnInit():void{
    this.initForm();
  }
  initForm():void{
    this.form = new FormControl({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    })
  }

  onSub():void {
    //recuperer les données du formulaire
    console.log(this.form.value);
  }
}
