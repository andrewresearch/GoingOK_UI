/**
 * Created by andrew on 6/06/2016.
 */

import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare var Dragdealer: any;

@Component({
    selector: 'slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css'],
    //encapsulation: ViewEncapsulation.None
})

export class SliderComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {}

    ngAfterViewInit() {
        new Dragdealer('simple-slider',{steps:101,snap:true, x:0.5, callback: this.showValue})
    }

    public showValue(x:number) {
        console.log('value: '+x)
    }
}
