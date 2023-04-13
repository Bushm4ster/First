import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from '../event.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  dataSource = new MatTableDataSource(this.ES.getAll());
  constructor(private ES: EventService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'title', 'start', 'end', 'icons'];
  get(id:string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //recieve data from the id
    this.ES.getEvtById(id).subscribe((data: { id: any; title: any; start: any; end: any; }) => {
      dialogConfig.data = {
        id: data.id,
        title: data.title,
        start: data.start,
        end: data.end,
      };
    });

    this.dialog.open(ModalComponent, dialogConfig);
}
  
}

