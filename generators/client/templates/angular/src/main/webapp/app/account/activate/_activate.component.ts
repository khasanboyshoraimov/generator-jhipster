import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JhiLanguageService } from 'ng-jhipster';

import { Activate } from './activate.service';
import { LoginModalService } from '../../shared';

import { Transition } from 'ui-router-ng2';

@Component({
    selector: '<%=jhiPrefix%>-activate',
    templateUrl: './activate.component.html'
})
export class ActivateComponent implements OnInit {
    error: string;
    success: string;
    modalRef: NgbModalRef;

    constructor(
        private activate: Activate,
        private loginModalService: LoginModalService,
        private trans: Transition,
        private jhiLanguageService: JhiLanguageService
    ) {
        this.jhiLanguageService.setLocations(['activate']);
    }

    ngOnInit () {
        this.activate.get(this.trans.params()['key']).subscribe(() => {
            this.error = null;
            this.success = 'OK';
        }, () => {
            this.success = null;
            this.error = 'ERROR';
        });
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
