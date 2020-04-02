'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');
var controller = {
    home:function( req, res){
        return res.status(200).send({
            message: 'soy la home'
        });

    },

    test:function(req,res){
        return res.status(200).send({
            message:'soy el metodo de accion test del controlador de project'
        });

    },

    SaveProject:function(req, res){
        var project = new Project();
        var params = req.body;
        project.name= params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;
///*** */
        project.save((err,projectStored)=>{
                if(err) return res.status(500).send({message:'chupala'});
                if(!projectStored)return res.status(404).send({message:'no se pudo guardar'});

                return  res.status(200).send({ project:projectStored });
        });
///guardamos en la base de datos
    },
    getProject: function(req,res){///buscamos por id
       var projectId = req.params.id;
       if(projectId == null) return res.status(404).send({message:'no se pudo guardar'});
       Project.findById(projectId ,(err,project)=>{
        if(err) return res.status(500).send({message:'chupala'});
        if(!project)return res.status(404).send({message:'no se pudo guardar'});

            return res.status(200).send({project});
       });

    },
//lista los proyectos
    getProjects: function(req,res){
        Project.find({}).sort('year').exec((err, projects )=>{
            if(err)return res.status(500).send({message:'error al devolver los datos'});
            if(!projects)return res.status(404).send({message:'No tengo projectos para mostrar'});
            return res.status(200).send({projects});
        });
    },

    UpdateProject:function(req,res){
        var projectId = req.params.id; 
        var udpate= req.body;
        Project.findByIdAndUpdate(projectId,udpate,{new:true},(err,ProjectUpdated) =>{
            if(err)return res.status(500).send({message:'error al devolver los datos'});
            if(!ProjectUpdated)return res.status(404).send({message:'No tengo projectos para mostrar'});
            return res.status(200).send({
                Project:ProjectUpdated
            });
        });

    },

   deleteProject:function(req,res){
        var projectId = req.params.id; 
       
        Project.findByIdAndDelete(projectId,(err,ProjectRemoved) =>{
            if(err)return res.status(500).send({message:'error al eliminar'});
            if(!ProjectRemoved)return res.status(404).send({message:'No tengo projectos para eliminar'});
            return res.status(200).send({
                Project:ProjectRemoved
            });
        });

    },

    //subiendo imagenes
    uploadImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif' || fileExt=='svg'){

				Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						project: projectUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	}
    

};

module.exports = controller;