import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, take} from 'rxjs';
import {MapItemResponseModel, MapService} from "../../shared/api/map.service";

@Injectable({
  providedIn: 'root'
})
export class PlanResolver implements Resolve<MapItemResponseModel> {
  constructor(private mapService: MapService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MapItemResponseModel> {
    const id = route.paramMap.get('id');
    return this.mapService.getById(parseInt(String(id), 10)).pipe(take(1));
  }
}
