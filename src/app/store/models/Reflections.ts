/**
 * Created by andrew on 4/3/17.
 */

export class Reflections {
    currentEntry:ReflectionEntry;
    reflectionEntries: ReflectionEntry[];

    constructor() {
        this.currentEntry = new ReflectionEntry();
        this.reflectionEntries = [];
    }
}

export class ReflectionEntry {
    timestamp: string;
    reflection: Reflection;

    constructor() {
        this.timestamp = new Date().toISOString();
        this.reflection = new Reflection();
    }
}

export class Reflection {
    point: number;
    text: string;

    constructor() {
        this.point = -1;
        this.text = "";
    }
}