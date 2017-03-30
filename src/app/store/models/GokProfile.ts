
/**
 * Created by andrew on 30/3/17.
 */
import {ReflectionEntry} from "./Reflections";

export class GokProfile {
    messages: GokMessage[];
    reflectionEntries: ReflectionEntry[];
    research: GokResearchInfo[];
}

export class GokMessage {
    message: string;
    value: any;
}

export class GokResearchInfo {
    projectName: string;
    organisation: string;
    consent: boolean;
}

