/**
 * Created by andrew on 6/06/2016.
 */

import {Component, EventEmitter, Output} from '@angular/core';
import {SliderComponent} from './slider/slider.component'
import {Reflection} from "../../store/models/Reflections";

@Component({
    selector: 'entry',
    providers: [SliderComponent],
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {

    @Output() notify: EventEmitter<Reflection> = new EventEmitter<Reflection>();

    public sliderValue: number;
    public reflectText:string;

    onNotify(sVal:number):void {
        console.log("Received from slider: "+sVal);
        this.sliderValue = sVal;
    }

    public saveEntry() {
            console.log("Setting the text to: " + this.reflectText);
            let ref = new Reflection();
            ref.point = this.sliderValue;
            ref.text = this.reflectText;
            this.notify.emit(ref);
            this.reflectText = "";
    }
}
