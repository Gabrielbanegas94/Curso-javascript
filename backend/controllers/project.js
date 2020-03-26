'use strict'

var Project = require('../models/project');
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
    getProject: function(req,res){
       var projectId = req.params.id;
       if(projectId == null) return res.status(404).send({message:'no se pudo guardar'});
       Project.findById(projectId ,(err,project)=>{
        if(err) return res.status(500).send({message:'chupala'});
        if(!project)return res.status(404).send({message:'no se pudo guardar'});

            return res.status(200).send({project});
       });

    }

};

module.exports = controller;