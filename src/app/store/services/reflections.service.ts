/**
 * Created by andrew on 3/3/17.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ReflectionEntry, Reflections} from "../models";
import {Gok} from './gok.globals';
import {Common} from "../../shared/common";


@Injectable()
export class ReflectionsService {

    constructor (private http: Http, private common: Common) {}


    saveReflectionEntry(entry:ReflectionEntry,token:string) {
        //create an entry package
        let entryPkg = { token:"", entry:null };
        entryPkg.token = token;
        entryPkg.entry = entry;
        return this.http.post(Gok.REFLECTION_ENTRY_URL,JSON.stringify(entryPkg))
            .map(res => res.json())
            .catch(this._serverError);
    }

    getReflections(): Observable<Reflections> {
        let options = new RequestOptions({ headers: this.authWithSession(this.common.session) });
        return this.http.get(Gok.REFLECTIONS_URL,options)
            .map(this.extractReflections)
            .catch(this._serverError);
    }

    extractReflections = (response:Response): Reflections => {
        console.log("Extracting reflections from response");
        let refs:Reflections = response.json();
        return refs;
    }

    private authWithSession(session:string) {
        let headers = new Headers();
        headers.append(Gok.AUTH_HEADER, session);
        return headers;
    }

    private _serverError(err: any) {
        console.log('sever error:', err);  // debug
        alert("There was a problem connected to the server. Your reflections may not save. Reload GoingOK and try again before writing a reflection.");
        if(err instanceof Response) {
            return Observable.throw(err.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }

}


