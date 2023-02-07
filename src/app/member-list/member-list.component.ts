import { Component } from '@angular/core';
import { Member } from 'src/Modals/member';
import { GLOBAL } from '../app-confing';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  dataSource :Member[]=GLOBAL._DB.members
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'icons'];
}
