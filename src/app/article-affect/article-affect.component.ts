import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modals/member';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent {
  selected!:string;
  currentId:any;
  constructor(private memberService:MemberService, private activatedRoute:ActivatedRoute, private articleService:ArticleService, private router:Router) {}
  tab :Member[] = this.memberService.tab;
  add(selected:string){
    this.currentId = this.activatedRoute.snapshot.params['id'];
    this.articleService.affect(this.currentId,selected).then(()=>{this.router.navigate(['/articles'])});
  }
}
