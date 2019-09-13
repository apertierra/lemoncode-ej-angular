import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import { MemberEntity } from './models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersApiService {

  constructor(private httpClient: HttpClient) { }

  getAllMembers(organizationName: string): Observable<MemberEntity[]> {
    const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;

    return this.httpClient.get<MemberEntity[]>(gitHubMembersUrl);

  }

}
