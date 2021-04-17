import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AppErrorHandler implements ErrorHandler { 
    
    constructor(private injector: Injector) { }  
     
    handleError(error: any) {
        const toastrService = this.injector.get(ToastrService);
        toastrService.error('An unexpected error has occured. Please try again');
        console.log(error);
    }
}