import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockService } from '../service/stock.service';
import { MatSort } from '@angular/material/sort';
import { AuthenticationService } from '../service/authentication.service';

export interface Stocks {
  company: string;
  ltp: number;
  cp: number;  
}

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  isLogin:boolean = false;
 
  displayedColumns: string[] = ['company', 'ltp', 'cp','action'];
  dataSource !:MatTableDataSource<Stocks>;
  // ELEMENT_DATA!: Stocks[]; 
  ELEMENT_DATA : Stocks[] = [    
    {company:"Kuntal & Co",ltp:245,cp:243},
    {company:"Dev & Co",ltp:245,cp:243},
    {company:"Darshak & Co",ltp:245,cp:243},
    {company:"janesh & Co",ltp:245,cp:243}
  ];

  
  constructor(private _liveAnnouncer: LiveAnnouncer, public stockService:StockService, authService: AuthenticationService) {   
  this.isLogin = authService.isLoggedIn();
  } 

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    // this.stockService.allStocks().subscribe(
    //     (response:any)=>{                
    //       console.log(response);          
    //       this.ELEMENT_DATA = response;
    //       this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    //       this.dataSource.sort = this.sort;
    //     }
    //   );          
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.sort = this.sort;
  }   
  
  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }  
}
