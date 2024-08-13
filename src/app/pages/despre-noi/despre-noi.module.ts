import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DespreNoiComponent } from './despre-noi.component';

const routes: Routes = [{ path: '', component: DespreNoiComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DespreNoiModule {}
