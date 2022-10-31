import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  studentForm=this.fb.group({
    name: ['',Validators.required],
    surname: ['',Validators.required],
    group: ['',Validators.required],
    subject: ['',Validators.required]
  });
	visibility: boolean = false;
	changeVisible(){
		this.visibility =!this.visibility;
	}
  studData = [
    {
      name: "Антон",
      secondName: "Марьюшкин",
      age: 20,
      groupNum: 940,
      vk: "amarsad",
    },
    {
      name: "Илья",
      secondName: "Морин",
      age: 21,
      groupNum: 940,
      vk: "moy.morin",
    },
    {
      name: "Александр",
      secondName: "Шерстюк",
      age: 20,
      groupNum: 940,
      vk: "sirdoge62",
    },
    {
      name: "Дмитрий",
      secondName: "Дербуков",
      age: 21,
      groupNum: 940,
      vk: "capuchinko",
    },
    {
      name: "Андрей",
      secondName: "Алясов",
      age: 21,
      groupNum: 940,
      vk: "thunderdognum1",
    },
    {
      name: "Сергей",
      secondName: "Куделин",
      age: 21,
      groupNum: 940,
      vk: "nemo_hoes",
    },
  ];
  subjData = [
    {
      name: "Операционные системы и оболочки",
      type: "экзамен",
      teacher: "Засорин С.В.",
    },
    {
      name: "Математическое и компьютерное моделирование",
      type: "экзамен",
      teacher: "Тарасов А.С.",
    },
    {
      name: "Управление качеством программного обеспечения",
      type: "экзамен",
      teacher: "Ефимов А.И.",
    },
    {
      name: "Математические методы в компьютерных науках",
      type: "зачет",
      teacher: "Бодрова И.В.",
    },
    {
      name: "Промышленная разработка ПО",
      type: "зачет",
      teacher: "Бастрычкин А.С.",
    },
  ];

  constructor(private fb: FormBuilder) {
  }
  goScroll(target: HTMLElement, student?: any){
    target.scrollIntoView({behavior: "smooth"});
    if (student) {
      this.studentForm.patchValue({name: student.name})
    }
  }
  bgPos: any;
  onSubmit(){
    if (this.studentForm.valid){
      alert('Вы были поставлены в очередь!');
      this.studentForm.reset();
    }
  }
}

