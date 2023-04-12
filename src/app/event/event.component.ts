import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  dataSource = new MatTableDataSource(this.MLS.getAll());
  constructor(private MLS: EventService) { }

  displayedColumns: string[] = ['id', 'title', 'start', 'end'];
}

