import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent,
  MembersSearchComponent
} from './members-table';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
    MembersSearchComponent
  ],
  exports: [
    MembersTableComponent
  ]
})
export class MembersModule { }
