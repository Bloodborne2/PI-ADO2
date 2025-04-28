import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lojaDeInformaticaADO2';
  ngAfterViewChecked() {
    this.fixFooter();
  }

  fixFooter() {
    const footer = document.querySelector('footer');
    const body = document.querySelector('body');
    if (footer && body) {
      const bodyHeight = body.scrollHeight;
      const windowHeight = window.innerHeight;
      const footerHeight = footer.clientHeight;

      if (bodyHeight < windowHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
      } else {
        footer.style.position = 'relative';
        footer.style.bottom = 'auto';
      }
    }
  }
}
