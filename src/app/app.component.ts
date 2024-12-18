import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  currentValue = signal('');
  title = 'angular-wc';

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // handleInput($event: Event) {
  //   const inputElement = $event.target as HTMLInputElement;
  //   this.currentValue.set(inputElement.value);
  //   console.log(this.form.get('name'));
  //   this.form.get('name')?.patchValue(inputElement.value);
  // }

  handleSubmit() {
    console.log(this.form.value);
  }
  handleClick() {
    console.log(this.form.invalid);
  }
}
