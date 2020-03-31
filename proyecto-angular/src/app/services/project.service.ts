import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project } from '../models/project';
import {Global} from './global';

@Injectable()
 export class ProjectService {

    public url: String;
    constructor(
        private _htpp:HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return "probando el sevicio de angular";
    }
    saveProject(proyecto:Project ):Observable <any> {
        let params= JSON.stringify(proyecto);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._htpp.post(this.url + 'save-project',params,{headers:headers});
    }

    getProjects():Observable <any>
    {
            let headers = new HttpHeaders().set('Content-Type', 'application/json');
            return this._htpp.get(this.url+ 'projects',{headers:headers});
    }

    getProject(id): Observable <any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
            return this._htpp.get(this.url+ 'project/'+ id ,{headers:headers});
    }

    deleteProject(id): Observable <any>
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._htpp.delete(this.url+ 'project/'+ id ,{headers:headers});
    }

    updateProject(project): Observable <any>
    {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._htpp.put(this.url+ 'project/'+ project._id ,params,{headers:headers});
    }
 }