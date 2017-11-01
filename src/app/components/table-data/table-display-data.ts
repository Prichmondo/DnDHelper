import { Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    AfterViewInit }                   from '@angular/core';


@Component({
selector: 'table-display-data',
templateUrl: './table-display-data.html',
styleUrls: ['./table-display-data.css']
})

export class TableDisplayData {

    @Input() items: any[] = [
        {id: "1231234", Name: "Gianni", Age: 54, Stupid: false},
        {id: "7893127", Name: "Teresa", Age: 22, Stupid: true},
        {id: "3842893", Name: "Roberto", Age: 90, Stupid: false}
    ];

    @Input() headers: string[] = [];
    @Input() hideColumns: number[] = [];
    @Input() columnID: number = -1;

    @Input() isReadOnly: boolean = false;
    @Input() showEdit: boolean = true;
    @Input() showDelete: boolean = true;
    @Input() showView: boolean = true;
    @Input() showAdd: boolean = true;
    @Input() canEditMainList: boolean = true;

    listProperties: string[] = [];
    columnsDisplayed: number = 0;

    initIsComplete: boolean = false

    delete(itemToDelete){
        console.log(itemToDelete);
        
    }
    
    ngOnInit(){
        console.log(this.items);
        var firstObject: any = this.items[0];
        var propertiesCount: number = 0;
        for (var x in firstObject){
            this.listProperties.push(x);
        }
        console.log (this.listProperties);
        if (this.headers.length === 0) {
            this.headers = this.listProperties;
        }

        this.initIsComplete = true;
    }

    ngAfterViewInit(){

    }

    private isVisibleColumn(column: number): boolean {
        if (this.hideColumns.length === 0){return true}

        for (var i = 0; i < this.hideColumns.length; i++){
            if (column === this.hideColumns[i]){return false}
        }
        return true
    }
}
