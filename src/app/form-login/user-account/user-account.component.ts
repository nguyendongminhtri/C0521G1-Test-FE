import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
    selector: 'app-user-account',
    templateUrl: './user-account.component.html',
    styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

    constructor(private tokenService: TokenService) {
    }

    ngOnInit(): void {
        console.log('role user account --> ', this.tokenService.getRole())
    }

    logOut() {
        this.tokenService.logOut();
    }
}
