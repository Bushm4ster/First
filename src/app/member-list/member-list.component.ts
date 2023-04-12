import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent {
  constructor(private MS: MemberService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'icons'];
  dataSource = new MatTableDataSource(this.MS.tab);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });

    dialogRef.afterClosed().pipe().subscribe((x) => {
      if (x) {
        this.MS.DeleteMemberById(id).then(() => {
          this.dataSource.data = this.MS.tab
        })
      }
    })
  }
}
