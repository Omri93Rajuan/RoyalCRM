import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: []
})
export class SignUpComponent {
  googleLogoImage:any = "/assets/google-logo.png";
  error: boolean = false;

  constructor(private US: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    const { valid, value } = form;
    if (valid) {
      this.US.signupWithEmailAndPassword(value, (user: any): any => {
        if (user) {
          form.resetForm();
          this.error = false;
          return this.router.navigate(['contacts']);
        }

        this.error = true;
        setTimeout(() => {
          form.resetForm();
          this.error = false;
          this.router.navigate(['\login']);
        }, 4000);
      });
    }
  }

  signupWithGoogle() {
    this.US.signupAndLoginWithGoogle((user: any): any => {
      if (user) return this.router.navigate(['/contacts']);
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
