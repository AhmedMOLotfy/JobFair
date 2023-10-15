import {Component, OnInit} from '@angular/core';
import {AuthService, UserDto} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faEye as farEye} from "@fortawesome/free-regular-svg-icons";
import {faEyeSlash as farEyeSlash} from "@fortawesome/free-regular-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../register/register.component.css']
})
export class LoginComponent implements OnInit{
  showPass = false;
  isSubmitted = false;
  authForm: FormGroup = new FormGroup({});
  farEye = farEye;
  farEyeSlash = farEyeSlash;


  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit() {
    this.authForm = new FormGroup({
        'email': new FormControl<string>("",
            [Validators.required, Validators.email]),
        'password': new FormControl<string>("",
            [Validators.required, Validators.minLength(6)]),
    });
  }

  OnSubmit() {
    this.isSubmitted = true;
    if (!this.authForm.valid) {
      console.log("Not Valid Data")
      return;
  }

    // get input values
    const email = this.authForm.get('email')?.value;
    const password = this.authForm.get('password')?.value;

    // register request
    this.authService.login(email, password).subscribe({
      next: (resData: UserDto) => console.log(resData),
      error: (error) => console.log(error),
      complete: () => console.log("Request Completed successfully")
    });
  }

  toRegister(){
    this.router.navigate(['/register']).then();
  }

  onShowPass() {
    this.showPass = !this.showPass;
  }
}
