import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  constructor(private MS: EventService, private router:Router, private activatedRoute: ActivatedRoute) {}

  range = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  onsub(): void {
    console.log(this.range.value);
    this.MS.saveEvent(this.range.value);
    this.router.navigate(['/events']);
  }
}
