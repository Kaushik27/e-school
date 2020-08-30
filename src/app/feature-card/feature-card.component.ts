import { Component, OnInit, Input } from '@angular/core';
import {  FeatureCard } from "../data/dashboard/dashboard.service"


@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  // @Input()
  // title: string;
  // @Input()
  // imgUrl: string;
  // @Input()
  // body: string;
  @Input()
  feature: FeatureCard;



  constructor() { }

  ngOnInit(): void {
  }

}
