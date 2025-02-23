import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { CopyBarComponent } from '../../copy-bar/copy-bar.component';

@Component({
  selector: 'app-docs-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, CopyBarComponent],
  templateUrl: './docs-layout.component.html',
  styleUrl: './docs-layout.component.css'
})
export class DocsLayoutComponent {

}
