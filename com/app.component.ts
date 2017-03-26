import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector:'my-app',
    template:`    
    
    <span style="font-size:18px;">Rajesh G an Architect :</span>  
    <star-rating    ratingvalue="4"     max="10" 
                    color="gray"        fillcolor="orange" 
                    readonly="false"    (OnRatingChanged)="ratingChanged($event)" >
    </star-rating>

    <br/>
    <span style="font-size:18px;">Tamil Movie rate it :</span>
    <star-rating    [(ratingvalue)]="rating"  [max]="max" 
                    [color]="starcolor"     [readonly]="readonly" 
                    [fillcolor]="fillcolor" (OnRatingChanged)="ratingChanged($event)" >
    </star-rating>

    <br/>
     <span style="font-size:18px;">Indian Cricket Team :</span>
    <star-rating    [(ratingvalue)]="rating2"   max="5" color="blue" fillcolor="blue">
    </star-rating>

    <br/>
     <span style="font-size:18px;">Microsoft Bug :</span>
    <star-rating    ratingvalue="2"   max="5" color="green" fillcolor="green">
    </star-rating>

    
    <div>
    <button type="button" class="btn btn-sm btn-success" (click)="PrintValue()">
        Print Values
    </button>
    </div>

    `,    
    encapsulation:ViewEncapsulation.None ,
    styles:[]  ,     
})


export class AppComponent{

    rating = 3;
    rating2 = 2;

    max = 5;
    starcolor="red";
    readonly = false;
    fillcolor="red";

    ratingChanged(value){
        console.log("OnRating change Callback");
        console.log(this.rating);
        console.log(value);
        console.log("");
    }

    PrintValue(){    
        console.log("Values of Ratings");
        console.log("Rating :" + this.rating);
        console.log("Rating1 :"+this.rating2);
        console.log("");
    }

}