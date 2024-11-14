import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  currentValue = signal('');
  title = 'angular-wc';
  handleInput($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    this.currentValue.set(inputElement.value);
  }
  handleClick() {
    alert(this.currentValue());
  }
}
