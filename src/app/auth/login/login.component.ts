import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../_services/account.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faEye as farEye, faEyeSlash as farEyeSlash} from "@fortawesome/free-regular-svg-icons";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../register/register.component.css']
})
export class LoginComponent implements OnInit {
  showPass = false;
  isSubmitted = false;
  authForm: FormGroup = new FormGroup({});
  farEye = farEye;
  farEyeSlash = farEyeSlash;


  constructor(private authService: AccountService, private router: Router,
              private toastrService: ToastrService) {
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
      next: (resData) => {
        console.log(resData);
        this.router.navigate(['/job-listing']).then();
      },
      error: (error) => {
        console.log(error + "hey");
        this.toastrService.error(error.error);
      },
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
