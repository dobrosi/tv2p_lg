import { Component } from '@angular/core';
import {SiteRow} from "../interface/siterow";
import {NgForOf} from "@angular/common";
import {GridlineComponent} from "../gridline/gridline.component";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    NgForOf,
    GridlineComponent
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  siteRows: SiteRow[] = [];
}
