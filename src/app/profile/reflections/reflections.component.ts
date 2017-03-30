/**
 * Created by andrew on 6/06/2016.
 */

import {Component, Input} from '@angular/core';
import {Reflections} from "../../store/models/Reflections";

@Component({
    selector: 'reflection-list',
    templateUrl: 'reflections.component.html',
    styleUrls: ['reflections.component.css']
})

export class ReflectionsComponent {

    @Input() reflections:Reflections;

    public dataLoaded() {
        return (this.reflections.reflectionEntries.length > 0)
    }

    public getReflections() {
        return this.reflections.reflectionEntries;
    }
}
