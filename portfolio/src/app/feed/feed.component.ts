import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  skillMap : Map<string, number>;
  
  constructor() { }

  ngOnInit() {
    this.skillMap = new Map();
    this.skillMap.set('HTML', 90);
    this.skillMap.set('CSS', 90);
    this.skillMap.set('Angular', 80);
    this.skillMap.set('Java', 80);
    this.skillMap.set('Spring', 70);
    this.skillMap.set('JS', 50);
    this.skillMap.set('Node.js', 40);
    this.skillMap.set('SQL', 90);
    this.skillMap.set('UI', 50);
  }

  // Pour empêcher que la map soit triée par le pipe keyvalue
  keepOrder = (a) => {
    return a;
  }
}