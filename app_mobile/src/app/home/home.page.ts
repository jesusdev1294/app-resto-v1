
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ocultar = '';
  
  slides: { img: string, titulo: string, desc: string , url1: string }[] = [
    {
      img: '/assets/slides/miru1.jpg',
      titulo: 'Miru Sierra Bella',
      desc: 'Ver menú y hacer pedido ...',
      // tslint:disable-next-line:max-line-length
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=9156c0bb-358c-4329-b4b6-ed82bb05f1ab&glfa_cid=1258957562.1567303652&glfa_t=1567644450273'
    
    },
    {
      img: '/assets/slides/miru2.jpg',
      titulo: 'Miru Portugal',
      desc: 'Ver menú y hacer pedido ...',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=28937f9f-5ccd-402a-a265-cdbc7bf259ed&glfa_cid=1258957562.1567303652&glfa_t=1567647225664'
    },
    {
      img: '/assets/slides/miru3.jpg',
      titulo: 'Miru Covadonga',
      desc: 'Ver menú y hacer pedido ...',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=c605f43e-630c-4c44-922b-e124b3911841&glfa_cid=1258957562.1567303652&glfa_t=1567647325567'
    },
    {
      img: '/assets/slides/miru4.jpg',
      titulo: 'Miru  La Florida',
      desc: 'Ver menú y hacer pedido ...',
      url1: 'https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=5d574614-28c3-426d-9ad2-7c120b5c63d7&restaurant_uid=47410797-eae2-4307-a2c3-47b199039ca8'
    },
    {
      img: '/assets/slides/miru5.jpg',
      titulo: 'Miru Brasil',
      desc: 'Ver menú y hacer pedido ...',
      url1: 'https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=5d574614-28c3-426d-9ad2-7c120b5c63d7&restaurant_uid=7d0eac62-b52a-432e-8d2b-c5c113c45979'
    }
  ];
  
  constructor(private navCtrl: NavController, private iab: InAppBrowser) { } //importo para navergar entre pantallas

  onClick() {
    this.ocultar = ' animated fadeOut fast'; //agrego en animate.css fadeOut
    this.navCtrl.navigateBack('/');
  }

  abrir(url:string,target:string) {
    
    // tslint:disable-next-line:align
    const link = url;
    this.iab.create(link, target);
    
  }


  

}
