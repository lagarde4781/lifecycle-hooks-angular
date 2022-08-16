import { Component, OnDestroy, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
  OnInit, 
  OnDestroy,
  // OnChanges,
  // DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  
  @Input() channelName = ''
  @ContentChild('projectedContent') projectedContent: any
  @ViewChild('childContent', { static: true} ) childContent: any
  counter = 0 
  interval: any

  constructor() { 
    console.log('Child Constructor is called')
  }

  ngOnInit(): void {
    console.log('Child OnInit is called')
    console.log('On Init - ' + this.projectedContent)
    console.log('On Init - ' + this.childContent)
    
    /* this.interval = setInterval(() => {
      this.counter = this.counter + 1
      console.log(this.counter)
    }, 1000) */
  }

  ngOnDestroy(): void {
    // We can use to clear intervals and observables.
    clearInterval(this.interval)
    console.log('Child OnDestroy is called')
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('Child OnChanges is called')
    console.log('On Changes - ' + this.projectedContent)
    console.log('On Changes - ' + this.childContent)
  } */

  /* ngDoCheck(): void {
    console.log('Child DoCheck is called')
    console.log('Do Check - ' + this.projectedContent)
    console.log('Do Check - ' + this.childContent)
  } */

  ngAfterContentInit(): void {
    console.log('Child AfterContentInit is called')
    console.log('On After Content Init - ' + this.projectedContent)
    console.log('On After Content Init - ' + this.childContent)
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked  is called')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit  is called')
    console.log('On After View Init - ' + this.childContent)
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked  is called')
  }

}
