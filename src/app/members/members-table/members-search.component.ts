import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-members-search',
  templateUrl: './members-search.component.html',
  styles: []
})
export class MembersSearchComponent {

  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  findResults(formValues: any): void {
    // console.log(formValues.name);
    this.searchEvent.emit(formValues.name);
  }

}
