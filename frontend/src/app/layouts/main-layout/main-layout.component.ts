import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { CopyBarComponent } from '../../copy-bar/copy-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CopyBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
