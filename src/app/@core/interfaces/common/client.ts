import { ContactInformation } from './contactInformation'

export interface Client{
    id : string
    contactInformationId : string;
    contactInformation : ContactInformation;
    ownerOneName: string;
    ownerTwoName: string;
    termsAndConditionsAccepted: boolean;
    termsAndConditionsAcceptedDate: Date;
    /* TEST ONLY DO NOT USE */
    cardNumber: string;
    cardCVV: string;
    cardFirstName: string;
    cardLastName: string;
    cardAddress: string;
    cardCity: string;
    cardState: string;
    cardZip: string;
    routingNumber: string;
    bankNumber: string;
    /* TEST ONLY */
}