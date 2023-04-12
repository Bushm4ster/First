import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/Modals/member';

import { GLOBAL } from './app-confing';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  
  tab : Member[]=GLOBAL._DB.members
  
  constructor(private HttpClient:HttpClient) {

  }

  saveMember(memberToSave:any):Promise<void>{

    const NewMember ={
      ...memberToSave,
      id: memberToSave.id ?? Math.ceil(Math.random()*1000).toString(), 
      createdDate : memberToSave.createdDate ?? new Date().toISOString()
    }

    this.tab=[NewMember,...this.tab.filter(item => item.id != NewMember.id)]

    return new Promise<void>(resolve => resolve())
  }
  DeleteMemberById(id:string):Promise<void>{
    this.tab=this.tab.filter(item => item.id != id)
    return new Promise<void>(resolve => resolve()) 
    //return this.HttpClient.delete<void>('link').toPromise(); //use incase of backend existance
  }
  getMemberByid(id:string):Promise<Member>{
    return (new Promise (resolve => resolve(
      this.tab.filter(item=>item.id == id)[0]??null
    )))
  }

  getMemberById(id:string):Promise<Member|undefined>{
    return (new Promise (resolve => resolve(
      this.tab.find(item => item.id == id)
    )))
  }
}
