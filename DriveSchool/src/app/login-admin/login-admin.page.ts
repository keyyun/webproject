import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../models/user.mode';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
async login(user: User){
    if(this.formValidation()){
      //show loader
      let loader=this.loadingCtrl.create({
        message:"Please wait..."
      });
      (await loader).present();

      try{
        await this.afAuth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data=>{
          console.log(data);

          //redirect to home page
          this.navCtrl.navigateRoot("index-admin");
        })
      }catch(e){
        this.showToast(e);
      }

      //dismiss loader
      (await loader).dismiss();
    }
  }

  formValidation(){
    if(!this.user.email){
      this.showToast("Enter email");
      return false;
    }
    if(!this.user.password){
      this.showToast("Enter password");
      return false;
    }
    return true;
  }
  showToast(message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}
