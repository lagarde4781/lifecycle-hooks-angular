import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements 
  OnInit
  //OnChanges,
  //DoCheck 
  {

  isChild = true
  channelName = ''

  constructor() {
    console.log('Parent Constructor is called')
  }

  ngOnInit(): void {
    console.log('Parent OnInit is called')
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChanges is called')
  }

  ngDoCheck() {
    console.log('Parent DoCheck is called')
  } */

  toggleChild(): void {
    this.isChild =  !this.isChild
  }

}
