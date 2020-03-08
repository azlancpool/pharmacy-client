import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/medicine.model';
import { NzI18nService, NzMessageService } from 'ng-zorro-antd';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  modalTitle: String;
  isVisible = false;

  name: string = '';
  posology: string = '';
  expirationDate: Date = null;
  medicineSelected: Medicine = null;
  medicines: Array<Medicine> = [
    {
      id: 1,
      name: 'medicine1',
      posology: '30 ml',
      expirationDate: new Date(),
      ingredients: [
        {
          id:1,
          name:"i1"
        },
      ],
      expand: false
    },
  ];

  ingredients: Array<Ingredient>= [
    {
      id:2,
      name:"i12"
    },
    {
      id:3,
      name:"i23"
    }
  ];

  ingredientsSelected: Array<Ingredient>= [
    {
      id:2,
      name:"i12"
    },
    {
      id:3,
      name:"i23"
    }
  ];

  constructor(
    private message: NzMessageService,
    private i18n: NzI18nService
  ) { }

  newMedicine(): void{
    this.modalTitle = 'Nueva medicina';
    this.name = '';
    this.posology = '';
    this.expirationDate = null;
    this.ingredientsSelected = null;
    this.isVisible = true;
  }

  editMedicine(medicineModel: Medicine): void {
    this.modalTitle = 'Editar Medicina';
    this.medicineSelected = medicineModel;
    this.name = medicineModel.name;
    this.posology = medicineModel.posology;
    this.expirationDate = medicineModel.expirationDate;
    this.ingredientsSelected = medicineModel.ingredients;
    this.isVisible = true;
  }

  onChange(result: Date): void {
    this.expirationDate = result;
  }

  handleOk($event: MouseEvent): void {
    let exit: Boolean = true;
    if(this.name == ""){
      this.message.create('error', 'Por favor ingrese el nombre del ingrediente');
      exit = false;
    }
    if(exit){
      if(this.medicineSelected == null){
        console.log('the medicine register will be save');
        let newMedicine = new Medicine();
        newMedicine.name = this.name;
        newMedicine.posology = this.posology;
        newMedicine.expirationDate = this.expirationDate;
        newMedicine.ingredients = this.ingredientsSelected;
        //this.clientService.saveClient(newIngredient).subscribe(()=>{
          //this.loadClientList();
          //this.message.create('success', `Cliente nuevo guardado`);
        //})
      } else {
        console.log('the medicine register will be update');
        this.medicineSelected.name = this.name;
        this.medicineSelected.name = this.name;
        this.medicineSelected.posology = this.posology;
        this.medicineSelected.expirationDate = this.expirationDate;
        this.medicineSelected.ingredients = this.ingredientsSelected;
        //this.clientService.updateClient(this.ingredientSelected).subscribe(()=>{
          //this.loadClientList();
          //this.message.create('success', `Cliente editado`);
        //});
      }
      this.medicineSelected =null;
      this.isVisible = false;
    }
  }

  handleCancel($event: MouseEvent): void {
    this.isVisible = false;
  }

  ngOnInit() {
  }

}
