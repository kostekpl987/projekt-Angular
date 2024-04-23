import { Routes } from '@angular/router';
import { LevelsComponent } from './levels/levels.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { LevelComponent } from './level/level.component';
export const routes: Routes = [
    {path:"levels", component: LevelsComponent},
    {path:'',component: MainComponent},
    {path:"settings",component:SettingsComponent},
    {path:"levels/level",component:LevelComponent}
];
