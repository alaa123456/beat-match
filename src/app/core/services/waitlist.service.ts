import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { WaitlistResponse, WaitlistSubmission } from '../models/waitlist-submission.model';

@Injectable({
  providedIn: 'root',
})
export class WaitlistService {
  constructor(private readonly http: HttpClient) {}

  submit(payload: WaitlistSubmission): Observable<WaitlistResponse> {
    if (!environment.enableWaitlistApi) {
      return of({
        message:
          'Early access request queued. Connect this service to your real waitlist endpoint in /api/waitlist to persist submissions.',
      }).pipe(delay(800));
    }

    return this.http.post<WaitlistResponse>(environment.waitlistApiUrl, payload);
  }
}
