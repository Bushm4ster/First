import { Component } from '@angular/core';
import { Member } from 'src/Modals/member';
import { GLOBAL } from '../app-confing';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent {
  constructor(private MS: MemberService) {}
  dataSource :Member[]=this.MS.tab
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'icons'];
  onDelete(id: string):void {
    this.MS.DeleteMemberById(id).then (()=>{
      this.dataSource=this.MS.tab
    })
  }
}
