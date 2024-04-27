import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RuletaLrhzComponent } from "./ruleta-lrhz/ruleta-lrhz.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RuletaLrhzComponent]
})
export class AppComponent {
  title = 'Ruleta-lrhz';
}
