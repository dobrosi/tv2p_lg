import {Component, Input} from '@angular/core';
import {SiteItem} from "../interface/siteitem";

@Component({
  selector: 'app-griditem',
  standalone: true,
  imports: [],
  templateUrl: './griditem.component.html',
  styleUrl: './griditem.component.css'
})
export class GriditemComponent {
  @Input() siteItem!: SiteItem;
}
