import {Component, Input} from '@angular/core';
import {SiteRow} from "../interface/siterow";
import {NgForOf} from "@angular/common";
import {GriditemComponent} from "../griditem/griditem.component";

@Component({
  selector: 'app-gridline',
  standalone: true,
  imports: [
    NgForOf,
    GriditemComponent
  ],
  templateUrl: './gridline.component.html',
  styleUrl: './gridline.component.css'
})
export class GridlineComponent {
  @Input() siteRow!: SiteRow;
}
