import {Injectable} from "@angular/core";
/**
 * Created by andrew on 30/3/17.
 */

@Injectable()
export class Common {
    session: string;
    newUser: boolean;
    signInStatus: boolean = false;
}