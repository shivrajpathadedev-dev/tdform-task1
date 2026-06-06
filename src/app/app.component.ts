import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdform-task1';
  @ViewChild('studentform') studentform!:NgForm
genders: string[] = ['Male', 'Female'];
  onSubmit(){
    if(this.studentform.valid){
      this.studentform.form.markAllAsTouched()
    }
    this.studentform.reset()
  }
onlyNumbers(event: KeyboardEvent) {
  const key = event.key;

  if (!/^[0-9]$/.test(key)) {
    event.preventDefault();
  }
}

onMobileInput(event: any) {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
}
}





