import { Component, OnInit, IterableChangeRecord } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  modalTitle: String;

  ingredients: Array<Ingredient> = [
    {
      id:1,
      name:"i1"
    },
    {
      id:2,
      name:"i2"
    }
  ];
  name: String = "";
  ingredientSelected: Ingredient = null;

  isVisible = false;

  constructor(
    private message: NzMessageService
  ) { }

  ngOnInit() {
  }

  loadIngredients() : void {
    
  }

  newIngredient(): void{
    this.modalTitle = 'Nuevo Ingrediente';
    this.name="";
    this.isVisible = true;
  }

  editIngredient(ingredientModel: Ingredient): void {
    this.modalTitle = 'Editar Ingrediente';
    this.ingredientSelected = ingredientModel;
    this.name = ingredientModel.name;
    this.isVisible = true;
  }

  deleteIngredient(ingredientModel: Ingredient): void {

  }

  handleOk($event: MouseEvent): void {
    let exit: Boolean = true;
    if(this.name == ""){
      this.message.create('error', 'Por favor ingrese el nombre del ingrediente');
      exit = false;
    }
    if(exit){
      if(this.ingredientSelected == null){
        console.log('the ingredient register will be save');
        let newIngredient = new Ingredient();
        newIngredient.name = this.name;
        //this.clientService.saveClient(newIngredient).subscribe(()=>{
          //this.loadClientList();
          //this.message.create('success', `Cliente nuevo guardado`);
        //})
      } else {
        console.log('the ingredient register will be update');
        this.ingredientSelected.name = this.name;
        //this.clientService.updateClient(this.ingredientSelected).subscribe(()=>{
          //this.loadClientList();
          //this.message.create('success', `Cliente editado`);
        //});
      }
      this.ingredientSelected =null;
      this.isVisible = false;
    }
  }

  handleCancel($event: MouseEvent): void {
    this.isVisible = false;
  }

  cancel(): void{

  }

}
