import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Base64encodeComponent } from './base64encode/base64encode.component';
import { Base64decodeComponent } from './base64decode/base64decode.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Base64encodeComponent, Base64decodeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onlinetools';
}
