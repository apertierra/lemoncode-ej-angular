import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent implements OnInit  {

  public action: boolean;

  public isEmptyList: boolean;

  members: MemberEntity[];

  constructor(private membersApi: MembersApiService) { }

  ngOnInit() {
    this.action = false;
    this.isEmptyList = true;
  }

  loadMembers(organizationName: string): void {
    this.action = true;
    this.membersApi.getAllMembers( organizationName )
    .subscribe((ms) => {
      this.members = ms;
      this.isEmptyList = false;
    },
    (error) => {
      this.isEmptyList = true;
    });
  }

}
