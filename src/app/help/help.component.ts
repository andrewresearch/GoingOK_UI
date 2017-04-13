/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'help',
    templateUrl: 'help.component.html',
    styleUrls: ['help.component.css']
})

export class HelpComponent {
    general_info = true;
    privacy_info = false;
    research_info = false;
    using_info = false;
    other_info = false;


    select(info:string) {
        console.info("Seclected: "+info);
        switch(info) {
            case 'general': {
                this.general_info = true;
                this.privacy_info = false;
                this.research_info = false;
                this.using_info = false;
                this.other_info = false;
                return;
            }
            case "privacy": {
                console.log("Privacy");
                this.general_info = false;
                this.privacy_info = true;
                this.research_info = false;
                this.using_info = false;
                this.other_info = false;
                return;
            }
            case 'research': {
                this.general_info = false;
                this.privacy_info = false;
                this.research_info = true;
                this.using_info = false;
                this.other_info = false;
                return;
            }
            case 'using': {
                this.general_info = false;
                this.privacy_info = false;
                this.research_info = false;
                this.using_info = true;
                this.other_info = false;
                return;
            }
            case 'other': {
                this.general_info = false;
                this.privacy_info = false;
                this.research_info = false;
                this.using_info = false;
                this.other_info = true;
                return;
            }
            default: {
                console.log("Default");
                this.general_info = true;
                this.privacy_info = false;
                this.research_info = false;
                this.using_info = false;
                this.other_info = false;
            }
        }
    }

}
