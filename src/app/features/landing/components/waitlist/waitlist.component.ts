import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { WaitlistService } from '../../../../core/services/waitlist.service';

@Component({
  selector: 'app-waitlist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.css',
})
export class WaitlistComponent {
  private readonly fb = inject(FormBuilder);
  private readonly waitlistService = inject(WaitlistService);

  readonly waitlistForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    city: [''],
  });

  isSubmitting = false;
  submissionSuccess = false;
  submissionError = '';

  onSubmit(): void {
    this.submissionError = '';
    this.submissionSuccess = false;

    if (this.waitlistForm.invalid) {
      this.waitlistForm.markAllAsTouched();
      this.submissionError = 'Please enter a valid email address.';
      return;
    }

    this.isSubmitting = true;

    this.waitlistService
      .submit(this.waitlistForm.getRawValue())
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: () => {
          this.submissionSuccess = true;
          this.waitlistForm.reset({ email: '', city: '' });
        },
        error: () => {
          this.submissionError = 'Something went wrong while sending your request. Please try again.';
        },
      });
  }
}
