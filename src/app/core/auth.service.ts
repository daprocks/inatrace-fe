import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { UserControllerService } from 'src/api/api/userController.service';
import { ApiUserGet } from 'src/api/model/apiUserGet';
import { GlobalEventManagerService } from './global-event-manager.service';
import { LanguageCodeHelper } from '../language-code-helper';
import { BeycoTokenService } from '../shared-services/beyco-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userProfileSubject = new ReplaySubject<ApiUserGet | null>(1);
  userProfile$ = this.userProfileSubject.asObservable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userController: UserControllerService,
    private globalEventManager: GlobalEventManagerService,
    private beycoTokenService: BeycoTokenService
  ) {
    setTimeout(() => this.refreshUserProfile());
  }

  private async refreshUserProfile() {

    try {

      const resp = await this.userController.getProfileForUserUsingGET().toPromise();

      if (resp) {
        if (resp.data.language) {
          LanguageCodeHelper.setCurrentLocale(resp.data.language.toLowerCase());
          localStorage.setItem('inatraceLocale', resp.data.language.toLowerCase());
        }
        this.userProfileSubject.next(resp.data);
      } else {
        this.userProfileSubject.next(null);
      }
    } catch (error) {
      this.userProfileSubject.next(null);
    }
  }

  // TODO: remove this method an refactor dependencies
  get currentUserProfile() {
    return null;
  }

  login(username: string, password: string, redirect = null) {

    this.userController.loginUsingPOST(
      {
        username,
        password
      }
    ).pipe(
      catchError(() => {
        return of(null);
      })
    ).subscribe(() => {

      this.refreshUserProfile().then(() => {
        if (redirect !== null) {
          if (typeof redirect === 'string') {
            this.router.navigate([redirect]).then();
          }
          if (Array.isArray(redirect)) {
            this.router.navigate(redirect).then();
          }
        }
      });
    });
  }

  async logout() {

    localStorage.removeItem('selectedUserCompany');
    this.globalEventManager.selectedUserCompany(null);

    await this.userController.logoutUsingPOST().pipe(take(1)).toPromise();
    this.beycoTokenService.removeToken();

    this.router.navigate(['login']).then(() => this.userProfileSubject.next(null));
  }

  register(email, password, name, surname, redirect = null) {
    this.userController.createUserUsingPOST(
      {
        email,
        name,
        password,
        surname
      }
    ).pipe(
      catchError(() => {
        return of(null);
      })
    ).subscribe(() => {
      if (redirect !== null) {
        this.router.navigate([redirect]).then();
      }
    });
  }

}
