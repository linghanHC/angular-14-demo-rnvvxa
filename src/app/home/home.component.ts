import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `<p>Welcome home! my tes   t</p>`,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
