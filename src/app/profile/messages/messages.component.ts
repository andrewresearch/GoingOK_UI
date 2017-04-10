/**
 * Created by andrew on 6/06/2016.
 */

import {Component, Input} from '@angular/core';
import {Message} from "../../store/models/Profile";

@Component({
    selector: 'message-list',
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css']
})

export class MessagesComponent {
    @Input() messages:Message[];

    public dataLoaded() {
        return (this.messages.length > 0)
    }

    public getMessages() {
        return this.messages;
    }
}
