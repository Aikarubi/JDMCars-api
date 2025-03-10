import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {

}
