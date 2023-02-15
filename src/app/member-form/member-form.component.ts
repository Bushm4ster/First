import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{

  form!:FormGroup;

  constructor(private MS: MemberService, private router:Router) {}

  ngOnInit():void{
    this.initForm();
  }
  initForm():void{
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    })
  }

  onSub():void {
    //recuperer les données du formulaire
    console.log(this.form.value);
    const MemberToSave = this.form.value

    this.MS.saveMember(MemberToSave).then(()=>{  
      this.router.navigate(['/members'])
    })
  }
}

/*
tab: Member[]=GLOBAL._DB.members
saveMember(MemberToSave:any):Promise<void>{
  //envoyer une requete http en mode post vers Back 
  //return this.httpClient.post<void>('link')
  const NewMember={...memberToSave1,
  id:Math.ceil(Math.random()*10000).toString(),
  createdDate:new Date().toISOString(),
}
this.tab=[NewMember5,...this.tab.filter(item=>item.id!=NewMember5)]
}
*/
