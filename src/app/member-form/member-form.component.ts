import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modals/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  form!:FormGroup;
  currentItemId:any;
  membrerecuperer:any;

  constructor(private MS: MemberService, private router:Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit():void{
    this.initForm();
  }
  initForm():void{
    //1 recuperrer id à partir de la route active
    this.currentItemId=this.activatedRoute.snapshot.params['id']
    console.log(this.currentItemId);
    if(!! this.currentItemId){
      //2 tester sur id, si id existe => je suis dans edit
      this.MS.getMemberByid(this.currentItemId).
      then((x)=>{
        this.membrerecuperer=x;
        this.initForm2(x);
      })
    }
    //{ getMemberByid(id) => Membrerecuperer 
    //  this.initForm(Membrerecuperer);
    //}
    //sinon this.initForm();
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    })
  }

  initForm2(a:Member):void{
    this.form = new FormGroup({
      cin: new FormControl(a.cin, [Validators.required]),
      name: new FormControl(a.name, [Validators.required]),
      cv: new FormControl(a.cv, [Validators.required]),
      type: new FormControl(a.type, [Validators.required])
    })
  }

  onSub():void {
    //recuperer les données du formulaire
    console.log(this.form.value);
    const MemberToSave = {...this.membrerecuperer, ...this.form.value}

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
