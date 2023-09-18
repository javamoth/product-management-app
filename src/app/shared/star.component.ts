import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
        
    }   
            
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    @Input() rating: number = 0;
    cropWidth: number = 75;

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    }


