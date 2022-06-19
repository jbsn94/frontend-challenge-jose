import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { HolidayService } from 'src/app/service/holiday/holiday.service';
import { ICountry } from 'src/interface/country';
import { IHoliday } from 'src/interface/holiday';
import { findCountry } from 'src/store/country/country.selector';
import { set } from 'src/store/holiday/holiday.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  code: string;
  year = (new Date()).getFullYear();
  holidays: IHoliday[] = [];
  country: ICountry;
  constructor(
    private route: ActivatedRoute,
    private holidayService: HolidayService,
    private loadingController: LoadingController,
    private store: Store<{country: ICountry[]; holiday: IHoliday[]}>,
  ) {
    this.code = this.route.snapshot.params.code;
  }

  async ngOnInit() {
    //Loading the data
    await this.load(this.code, this.year);

    //Getting the holidays from store.
    this.store.select('holiday')
    .subscribe((holidays) => {
      this.holidays = holidays;
      console.log(this.holidays);
    });

    //Finding the Country in store.
    this.store.select(findCountry(this.code)).subscribe((country) => {
      if (country) {
        this.country = country;
      }
    });
  }

  async load(code: string, year: string | number) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      backdropDismiss: false
    });

    await loading.present();

    const { data: { holidays } } = await this.holidayService.list(code, year);

    this.store.dispatch(set({
      holidays
    }));

    await loading.dismiss();
  }

  async dateChanged(event) {
    this.year = event.detail.value;
    await this.load(this.code, this.year);
  }

  formatDate(date: string) {
    const dates = date.split('-').map((value) => parseInt(value, 10));
    return (new Date(dates[0], dates[1], dates[2])).toLocaleDateString();
  }

}
