// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [ CommonModule,FormsModule],
//   templateUrl: './contact.html',
//   styleUrl: './contact.css'
// })
// export class Contact {
// formData = {
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   };

//   isSubmitting = false;
//   submitMessage = '';
//   messageType = '';

//   onSubmit() {
//     this.isSubmitting = true;
//     this.submitMessage = '';

//     // Simulate form submission
//     setTimeout(() => {
//       this.isSubmitting = false;
//       this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
//       this.messageType = 'success';
      
//       // Reset form
//       this.formData = {
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       };

//       // Clear message after 5 seconds
//       setTimeout(() => {
//         this.submitMessage = '';
//       }, 5000);
//     }, 2000);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactDto, ContactService } from '../../services/contact';
// import { ContactService, ContactDto } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData: ContactDto = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  messageType = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';
    this.messageType = '';

    this.contactService.submitContact(this.formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.success) {
          this.submitMessage = response.message;
          this.messageType = 'success';
          
          // Reset form
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        } else {
          this.submitMessage = response.message;
          this.messageType = 'error';
        }

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
          this.messageType = '';
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Contact form error:', error);
        
        if (error.error && error.error.message) {
          this.submitMessage = error.error.message;
        } else {
          this.submitMessage = 'Something went wrong. Please try again later.';
        }
        this.messageType = 'error';

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
          this.messageType = '';
        }, 5000);
      }
    });
  }
}
