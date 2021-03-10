import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Schedule } from '../models/schedule.mode';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
schedule = {} as Schedule;
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore) { }

  ngOnInit() {
  }
async createSchedule(schedule: Schedule){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("Schedule").add(schedule);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("index-admin");
    }
  }


  
  formValidation(){
   if(!this.schedule.name){
      this.showToast("Enter name");
      return false;
    }

    if(!this.schedule.day){
      this.showToast("Enter day");
      return false;
    }

    if(!this.schedule.subject){
      this.showToast("Enter subject");
      return false;
    }

    if(!this.schedule.venue){
      this.showToast("Enter venue");
      return false;
    }

    if(!this.schedule.by){
      this.showToast("Enter by");
      return false;
    }

     if(!this.schedule.start){
      this.showToast("Enter start time");
      return false;
    }

    if(!this.schedule.end){
      this.showToast("Enter end time");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }}

