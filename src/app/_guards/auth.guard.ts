import { CanActivateFn } from '@angular/router';
import {AccountService} from "../_services/account.service";
import {map} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn =
  (route, state) => {
  const toastrService = inject(ToastrService);
  return inject(AccountService).currentUser$.pipe(
      map(
        (user) => {
          if(user) {
            return true;
          }
          else {
            toastrService.error("You shall not pass");
            return false;
          }
        }
      )
    );
};

