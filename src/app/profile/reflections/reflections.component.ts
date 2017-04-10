/**
 * Created by andrew on 6/06/2016.
 */

import {Component, Input} from '@angular/core';
import {ReflectionEntry} from "../../store/models/Reflections";
import {Profile} from "../../store/models/Profile";

@Component({
    selector: 'reflection-list',
    templateUrl: 'reflections.component.html',
    styleUrls: ['reflections.component.css']
})

export class ReflectionsComponent {

    @Input() reflections:ReflectionEntry[];

    public dataLoaded() {
        return (this.reflections.length > 0)
    }

    public getReflections() {
        return this.reflections;
    }
}
