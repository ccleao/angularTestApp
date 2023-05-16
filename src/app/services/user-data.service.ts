import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({

    providedIn: 'root'
})

export class UserDataService{
    constructor(private httpClient: HttpClient){}

        public getAllUsers():Observable<any>{
            return this.httpClient.get("http://localhost:8080/ead-authuser/users")
        
    }
}