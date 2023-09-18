import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }   
            
     
    @Input() rating: number = 0;
    cropWidth: number = 75;
    }
