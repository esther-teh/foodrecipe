import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from "../input-validation/input-validation.component";
import { InputContainerComponent } from "../input-container/input-container.component";

@Component({
    selector: 'text-input',
    standalone: true,
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.css'],
    imports: [InputValidationComponent, InputContainerComponent, ReactiveFormsModule]
})
export class TextInputComponent implements OnInit{

  @Input()
  control!:AbstractControl;

  @Input()
  showErrorsWhen:boolean = true;

  @Input()
  label!:string;

  @Input()
  type: 'text' | 'password' | 'email' = 'text';

  get formControl(){
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
