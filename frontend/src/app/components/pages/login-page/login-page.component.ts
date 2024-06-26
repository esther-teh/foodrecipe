import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { TitleComponent } from '../../partials/title/title.component';
import { NgIf } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputContainerComponent } from "../../partials/input-container/input-container.component";
import { InputValidationComponent } from "../../partials/input-validation/input-validation.component";
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { DefaultButtonComponent } from "../../partials/default-button/default-button.component";

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    imports: [TitleComponent, ReactiveFormsModule, NgIf, InputContainerComponent, InputValidationComponent, TextInputComponent, DefaultButtonComponent]
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder:FormBuilder
    , private userService:UserService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    this.userService.login({email:this.fc.email.value,
      password: this.fc.password.value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });    
  }

}
