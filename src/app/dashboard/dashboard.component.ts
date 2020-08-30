import { Component, OnInit } from '@angular/core';
import { DashboardService, FeatureCard } from "../data/dashboard/dashboard.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'e-school dashboard';
  gridColumns = 3;
  cards : FeatureCard[];


  constructor(private dashboardService: DashboardService) {
    this.cards = this.dashboardService.getFeatureCards();
    
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }


  ngOnInit(): void {
  }

}


