import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl, FormsModule} from '@angular/forms';
import CustomValidators from '../../../../../../common/validation/CustomValidators';

declare var $: any;
declare var jQuery: any;
const NIC_REGEX = /^[0-9]{9}[VX]/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])/;
const MOBILE_REGEX = /^[0-9]{10}/;
const URL_REGEX = ('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}');

@Component({
    selector: 'add-consumers',
    templateUrl: 'add-consumers.component.html',
    styleUrls: ['add-consumers.component.css']
})

export class AddConsumersComponent implements OnInit{

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        $("#caDob").datepicker( {
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            changeYear: true});

    }
        //get individual form input data
        consumerForm = new FormGroup({
            caName:  new FormControl('', Validators.required),
            caFullName: new FormControl('', Validators.required),
            caGender: new FormControl('', Validators.required),
            caNic: new FormControl('', [Validators.required,Validators.pattern(NIC_REGEX)]),
            caDesignation: new FormControl('', Validators.required),
            caDob: new FormControl('', Validators.required),
            caEmail: new FormControl('', [Validators.required,Validators.pattern(EMAIL_REGEX)]),
            caMobile: new FormControl('', [Validators.required,Validators.pattern(MOBILE_REGEX)]),
            caWebName: new FormControl('', Validators.required),
            caWebUrl: new FormControl('', [Validators.required, Validators.pattern(URL_REGEX)]),
            caPassword: new FormControl('', Validators.required),
        });
    
        onSubmit(){
            console.log(this.consumerForm.value);
        }
}