import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;  
  registerError!: Boolean;

  constructor( private formBuilder:FormBuilder, private authService:AuthenticationService){ }
  ngOnInit(){   
    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,}$")]],
      password:['',[Validators.required]],      
    })
  }

  PostData(form:FormGroup){        
    const email = form.get('email');
    const password = form.get('password');  
    var cred = {      
      email: email?.value,
      password: password?.value,      
    }    
    
    this.authService.login(cred).subscribe(
      (response:any)=>{  
        if(response == null){
          this.registerError = true;
        }                     
        this.authService.saveToken(response.token,response.roles);
        if(localStorage.getItem("roles")=="PAYER"||localStorage.getItem("roles")=="USER"){      
          window.location.href="/user/0/dashboard";          
        }
        else{
          window.location.href="/admin/provider-list";   
        }
      },
      (error:any)=>{
          console.log(error.status);          
          this.registerError = true;
      }
    )
  }
}
