
import {Product} from './product'
import { Client } from './client'
import { EnrollmentDetails } from './enrollmentDetails'

export interface ProductEnrollment{
    id: string;
    productId: string;
    clientId: string;
    client: Client;
    product: Product;
    dateAdded: string;
    status: string;
    enrollmentPrice: number;
    productEnrollmentDetails: EnrollmentDetails;
    salesPerson: string;
    notes: string;
}