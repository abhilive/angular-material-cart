import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service';
import { SharedService } from '../shared.service';
import { Item } from '../item';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  items: Item[];

  @Output() selectionChange: EventEmitter<MatSelectionListChange>;

  @Output() fakeFunc = new EventEmitter<boolean>();

  constructor(private itemService: ItemService, private sharedService: SharedService) {}

  ngOnInit() {
    this.getitems();
  }

  getitems(): void {
    this.items = this.itemService.getItems();
  }

  addRemove(e: any){
    //alert(e);
    //this.fakeFunc.emit(true);
    this.sharedService.add(1);
  }
}
