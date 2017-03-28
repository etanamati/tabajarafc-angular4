import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClubeComponent } from './clube.component';

const appRoutes: Routes = [
  { path: 'list', component: ClubeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  declarations: [ClubeComponent]
})
export class ClubeModule { }
