import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductionsService } from './productions.service';

@Injectable({
    providedIn: 'root'
})
export class ProductionsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _productionsService: ProductionsService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._productionsService.getProductions();
    }
}
