
import { Component, OnInit } from '@angular/core';
import {Project } from '../../models/project';
import {ProjectService} from'../../services/project.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {
  public title:String;
  public project:Project;
  public status:String;
  constructor(
    private _projectService : ProjectService 
  ) { 
    this.title = "crear proyecto";
    this.project = new Project('','','','',2019,'','');
  }

  ngOnInit(): void {
  }
  onSubmit(form){

    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
       if(response.project)
       {
         this.status='success';
         form.reset();
       }else{
         this.status='failed';
       }
      },
      error => {

        console.log(<any>error);
      });
  }

}
