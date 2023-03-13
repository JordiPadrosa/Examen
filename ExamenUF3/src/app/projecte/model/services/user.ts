import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class user {
    constructor(private http: HttpClient) { };
    
    getMonsters():Observable<any> {
        const requestOptions = this.createHeader();
        return this.http.get('https://www.dnd5eapi.co/api/monsters/', requestOptions);
    }

    getMonsterByName(name: string):Observable<any> {
        const requestOptions = this.createHeader();
        return this.http.get('https://www.dnd5eapi.co/api/monsters/' + name, requestOptions);
    }

    private createHeader() {
        const header = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Control-Allow-Headers': 'Origin,Content-Type,Accept,Authorization',
        }
        return { headers: new HttpHeaders(header)}
    }
}