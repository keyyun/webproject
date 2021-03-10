import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-schedulestudent',
  templateUrl: './schedulestudent.page.html',
  styleUrls: ['./schedulestudent.page.scss'],
}) 

export class SchedulestudentPage implements OnInit {
schedules: any;
  constructor(private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore) { }

  ngOnInit() {
  }
ionViewWillEnter() {
    this.getSchedules();
}
async getSchedules(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("Schedule")
    .snapshotChanges()
    .subscribe(data => { 
      this.schedules = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          day: e.payload.doc.data()["day"],
          subject: e.payload.doc.data()["subject"],
          venue: e.payload.doc.data()["venue"],
          by: e.payload.doc.data()["by"],
          start: e.payload.doc.data()["start"],
          end: e.payload.doc.data()["end"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }
}
