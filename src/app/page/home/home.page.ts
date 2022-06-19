import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryService } from 'src/app/service/country/country.service';
import { ICountry } from 'src/interface/country';
import { set } from 'src/store/country/country.actions';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { set as setSession } from 'src/store/session/session.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries: ICountry[];
  constructor(
    private countryService: CountryService,
    private store: Store<{country: ICountry[]}>,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
    this.store.select('country')
    .subscribe((countries) => {
      this.countries = countries;
    });
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      backdropDismiss: false
    });

    await loading.present();

    const { data: { countries } } = await this.countryService.list();
    this.store.dispatch(set({ countries }));

    await loading.dismiss();
  }

  async logOut() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure that you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.store.dispatch(setSession({isAuthenticated: false}));
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  async goToDetail(code: string) {
    this.router.navigate([`/${code}`]);
  }

}
