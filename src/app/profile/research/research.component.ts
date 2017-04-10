/**
 * Created by andrew on 6/06/2016.
 */

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResearchChoice, ResearchChoices} from "../../store/models/ResearchParticipation";

@Component({
    selector: 'research',
    templateUrl: 'research.component.html',
    styleUrls: ['research.component.css']
})

export class ResearchComponent {

    researchChoices: ResearchChoices = new ResearchChoices();
    saved: boolean = false;

    @Input() research:ResearchChoice = new ResearchChoice();
    @Output() notify: EventEmitter<ResearchChoice> = new EventEmitter<ResearchChoice>();

    constructor() {
        //console.log("Starting code: "+this.research.code());
        //this.savedCode = this.research.code();
    }

    // ngAfterViewInit() {
    //     //this.savedCode = this.research.code();
    // }

    public saveResearchChoice() {
        //console.info("Save choice to server: "+JSON.stringify(this.research));
        //this.savedCode = this.research.project.code +"-"+ this.research.organisation.code +"-"+ this.research.cohort.code;
        this.notify.emit(this.research);
        this.saved = true;
    }

    public setUnsaved() {
        this.saved = false;
    }

}
