import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faEye as farEye, faEyeSlash as farEyeSlash} from "@fortawesome/free-regular-svg-icons";
import {AccountService, UserDto} from "../../_services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  authForm: FormGroup = new FormGroup({});
  isSubmitted = false;
  showPass = false;
  farEye = farEye;
  farEyeSlash = farEyeSlash;


  constructor(private router: Router, private authService: AccountService) {
  }


  ngOnInit() {
    this.authForm = new FormGroup({
      'username': new FormControl<string>("", [Validators.required]),
      'email': new FormControl<string>("", [Validators.required, Validators.email]),
      'password': new FormControl<string>("", [Validators.required, Validators.minLength(6)]),
    });
  }

  OnSubmit():void {
    this.isSubmitted = true;
    if (!this.authForm.valid) {
      console.log("Not Valid Request")
      return;
    }

    // get input values
    const username = this.authForm.get('username')?.value;
    const email = this.authForm.get('email')?.value;
    const password = this.authForm.get('password')?.value;

    // register request
    this.authService.register(email, username, password).subscribe({
      next: (resData: UserDto) => console.log(resData),
      error: (error) => console.log(error),
      complete: () => console.log("Request Completed successfully")
    });
  }

  // should route to login screen
  toLogin() {
    this.router.navigate(['/login']).then();
  }

  onShowPass() {
    this.showPass = !this.showPass;
    console.log(this.showPass);
  }

}
