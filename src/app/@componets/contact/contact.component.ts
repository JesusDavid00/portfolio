import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormContact: FormGroup;;
  data  =      false;

  constructor(private snak: MatSnackBar) {
    this.FormContact = new FormGroup({
      name:     new FormControl(null),
      telefono: new FormControl(null,Validators.required),
      email:    new FormControl(null,Validators.required),
      message:  new FormControl(null,Validators.required)
    });
  }

  ngOnInit(): void {
    if(this.data == true){
     this.data = false;
    }
  }

  onSubmit(){
    let ContactDato = this.FormContact.value;
    let paraEmail = "jesusblow.alvear@gmial.com"
    console.log();

    let title = ContactDato ? "Enviado correctamente" : "Ha ocurrido un error";
    if(ContactDato){
      this.data = !this.data;
      let email = "para: "+ paraEmail + " De: " +ContactDato.email  +" "+ ContactDato.name +" "+ ContactDato.telefono +" "+ ContactDato.message

       alert(email)
      this.snak.open(title, "OK" , {duration: 5000});
    }else{
      this.snak.open(title, "OK" , {duration: 5000});
    }

  }

}
