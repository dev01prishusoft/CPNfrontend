import { ContactInformation } from './contactInformation'

export interface EnrollmentDetails{
    id: string;
    propertyName: string;
    unitSize: number;
    amountPaidForProperty: number;
    numberOfWeeksBeingEnrolled: number;
    season: string;
    fixedWeek: boolean;
    maintananceFee: number;
    maintenanceFeeFrequency: string;
    authorizedUsers: Array<ContactInformation>;
}