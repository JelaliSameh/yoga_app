import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router"; 
import { SessionService } from "../services/session.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  static canActivate() {
    throw new Error('Method not implemented.');
  }

  constructor( 
    private router: Router,
    private sessionService: SessionService,
  ) {
  }

  public canActivate(): boolean {
    if (!this.sessionService.isLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}