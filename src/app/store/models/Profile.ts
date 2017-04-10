
/**
 * Created by andrew on 30/3/17.
 */
import {ReflectionEntry} from "./Reflections";
import {ResearchChoice} from "./ResearchParticipation";

export class Profile {
    id:string;
    messages: Message[];
    reflectionEntries: ReflectionEntry[];
    research: ResearchChoice;
}

export class Message {
    timestamp: string;
    title: string;
    text: string;
    value: any;
}
