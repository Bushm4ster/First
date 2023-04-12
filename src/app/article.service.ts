import { Injectable } from '@angular/core';
import { Article } from 'src/Modals/article';
import { Member } from 'src/Modals/member';
import { GLOBAL } from './app-confing';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab : Article[] = GLOBAL._DB.articles
  memberglobal!:any;
  constructor(private MS:MemberService) { }

  DeleteArticleById(id:string):Promise<void>{
    this.tab=this.tab.filter(item => item.id != id)
    return new Promise<void>(resolve => resolve()) 
    //return this.HttpClient.delete<void>('link').toPromise(); //use incase of backend existance
  }
  affect(id_article:string, id_member:string):Promise<void>{
    this.MS.getMemberById(id_member).then(
      (membrerecuperer) => {this.memberglobal = membrerecuperer}
    )
    this.getArticleById(id_article).then(
      (articlerecupere) => (articlerecupere.auteur = this.memberglobal.name)
    )
    return new Promise(resolve=>resolve())
  }
  getArticleById(id:any):Promise<Article>{
    return new Promise (resolve=> resolve(this.tab.filter(item=>item.id==id)[0]??null));
}
}
