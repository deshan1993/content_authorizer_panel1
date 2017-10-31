import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])/;


@Component({
    selector: 'add-users',
    templateUrl: 'add-users.component.html',
    styleUrls: ['add-users.component.css']
})

export class AddUsersComponent implements OnInit {
    public positionTest: string;
    public admicontentInstitute:string = 'adcontentInstitutemin';
    public contentIndividual:string = 'contentIndividual';
    public contentInstitute: string = 'contentInstitute';
    public contentAuthorizer: string = 'contentAuthorizer';
    public contentConsumer: string = 'contentConsumer';

    public idNo: string;
    public fName: string;
    public fEmail: string;
    public fpassword1: string;
    public fpassword2: string;

    public userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.initializeContentProviderForm();
    }

    private initializeContentProviderForm(): void {
        this.userForm = this.formBuilder.group({
            'position': [null, [Validators.required]],
            'individualDrop': [null, [Validators.required]],
            'instituteDrop': [null, [Validators.required]],
            'authorizerDrop': [null, [Validators.required]],
            'consumerDrop': [null, [Validators.required]],
            'fullName': [null, [Validators.required]],
            'email': [null, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
            'password1': [null, [Validators.required]],
            'password2': [null, [Validators.required]],
            'identificationNo': []
        });
    }
}