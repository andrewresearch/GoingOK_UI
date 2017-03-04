/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {SliderComponent} from './slider/slider.component'

@Component({
    selector: 'entry',
    providers: [SliderComponent],
    templateUrl: 'entry.component.html',
    styles: ['entry.component.css']
})

export class EntryComponent {}
