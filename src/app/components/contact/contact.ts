import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  messageType = '';

  onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      this.messageType = 'success';
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Clear message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }
}
