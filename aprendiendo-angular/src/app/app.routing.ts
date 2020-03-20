//Importar modules 
import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';


//Importar Componentes
import {HomeComponent} from './home/home.component';
import {zapatillasComponent} from './zapatillas/zapatillas.component';
import {CursosComponent} from './cursos/cursos.component';
import {VideoJuegoComponent} from './videojuego/videojuego.component';
import { ExternoComponent } from './externo/externo.component';




///array de rutas
const appRoutes :Routes = [
    {path: '',component : HomeComponent},
    {path: 'home',component : HomeComponent},
    {path: 'zapatillas',component : zapatillasComponent},
    {path: 'cursos',component : CursosComponent},//para que apellidos sea opcional
    {path: 'cursos/:nombre/:followers',component : CursosComponent},
    {path: 'videojuego',component : VideoJuegoComponent},
    {path :'externo',component:ExternoComponent },
    {path: '**',component:HomeComponent},
];

//exportar modulo del routing
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);