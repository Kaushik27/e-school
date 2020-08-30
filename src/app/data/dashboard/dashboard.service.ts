import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class DashboardService {

    constructor() { }

    getFeatureCards(): FeatureCard[] {    
        const featureCards: FeatureCard[] = [{
            title: "admin",
            imgUrl: "https://picsum.photos/250/250",
            body: "lorem isum stuff abcedf"
        }, {
            title: "user",
            imgUrl: "https://picsum.photos/200/200",
            body: "lorem ipsum lorem ipusm"
        }, {
            title: "student",
            imgUrl: "https://picsum.photos/350/350",
            body: "lorem lorem ispisum"
        },{
            title: "guardian",
            imgUrl: "https://picsum.photos/400/400",
            body: "lorem lorem ispisum"
        }]
        return featureCards;
    }


}



export interface FeatureCard {
    title: string,
    imgUrl: string,
    body: string
}