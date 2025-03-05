import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  carsCount: number = 0;
  brandsCount: number = 0;
  averageSpeed: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCarData();
  }

  loadCarData() {
    this.apiService.getCarData().subscribe(data => {
      this.carsCount = data.carsCount;
      this.brandsCount = data.brandsCount;
      this.averageSpeed = data.averageSpeed;
    });
  }
}
