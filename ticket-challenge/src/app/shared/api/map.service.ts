import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
/**
 * Because the API link is broken, we created fake data here in the form of observable
 **/

  constructor(private http: HttpClient) { }

  public list(): Observable<MapResponseModel[]> {
    return new Observable((observer) => {
      observer.next([
        {
          id: 1,
          title: '1'
        },
        {
          id: 2,
          title: '2'
        },
        {
          id: 3,
          title: '3'
        },
        {
          id: 4,
          title: '4'
        },
        {
          id: 5,
          title: '5'
        },
        {
          id: 6,
          title: '6'
        },
      ])
    })
    // return this.http.get<MapResponseModel[]>('/map');
  }

  public getById(id: number): Observable<MapItemResponseModel> {
    return new Observable((observer) => {
      observer.next({
        id: 1,
        title: 'سالن',
        rows: [
          {
            seats: [
              {
                taken: true,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: true,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: true
              },
              {
                taken: false,
                reserved: false,
                disabled: true
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
          {
            seats: [
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
              {
                taken: false,
                reserved: false,
                disabled: false
              },
            ]
          },
        ]
      })
    });
    // return this.http.get<MapItemResponseModel>('/map/' + id);
  }
}


/**
 * We write all the relevant models here, I created the models we wanted as a class, so that another class could be included.
 **/
export class MapResponseModel {
  public id: number = 0;
  public title: string = '';
}

export class MapItemResponseModel {
  public id: number = 0;
  public title: string = '';
  public rows: MapItemRowModel[] = [];
}

export class MapItemRowModel {
  public seats: MapItemSeatModel[] = [];
}

export class MapItemSeatModel {
  public reserved: boolean = false;
  public taken: boolean = false;
  public disabled: boolean = false;
  public isReservingByUser?: boolean = false;
}
