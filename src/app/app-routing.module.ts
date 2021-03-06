import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { MedicineComponent } from './pages/medicine/medicine.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ingredient' },
  { path: 'ingredient', component: IngredientComponent},
  { path: 'medicine', component: MedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
