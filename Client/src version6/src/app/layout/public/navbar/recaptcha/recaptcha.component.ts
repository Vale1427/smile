import { FormGroup , Validators } from "@angular/forms";
import { Component ,OnInit } from "@angular/core";
import { FormControl,Validator,FormBuilder}  from  '@angular/forms' ; 

@Component({
  selector:'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
}

)

export class RecaptchaComponent implements OnInit {

protected aFormGroup?: FormGroup;

constructor(private formBuilder: FormBuilder) {}


ngOnInit() {
  this.aFormGroup = this.formBuilder  .group({
    recaptcha: ['', Validators.required]
  });
}

  siteKey:string = "6LdeKsQpAAAAACIFjeyHewhF6hcTkJbFexW6ex1c";
}