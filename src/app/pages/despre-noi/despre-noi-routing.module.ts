import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespreNoiComponent } from './despre-noi.component';

const routes: Routes = [{ path: '', component: DespreNoiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespreNoiRoutingModule {}
