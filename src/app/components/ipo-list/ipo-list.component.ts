import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { IpoService } from 'src/app/service/ipo.service';

export interface Ipos {
  company: string;
  offeredPrice: number;
  subscriptionRate: number;
  requiredAmount: number;  
  closingDate: string;
   
}


@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent {
  isLogin:boolean = false;
  displayedColumns: string[] =  ['company', 'offeredPrice', 'subscriptionRate', 'requiredAmount','closingDate','action'] ;
  dataSource !:MatTableDataSource<Ipos>;
  // ELEMENT_DATA!: Stocks[]; 
  ELEMENT_DATA : Ipos[] = [    
    {company:"Kuntal & Co",offeredPrice:245,subscriptionRate:243,  requiredAmount:1, closingDate: "11-12-2023"},
    {company:"Dev & Co",offeredPrice:245,subscriptionRate:243,  requiredAmount:1,closingDate: "11-12-2023"},
    {company:"Darshak & Co",offeredPrice:245,subscriptionRate:243,  requiredAmount:1, closingDate: "11-12-2023"},
    {company:"janesh & Co",offeredPrice:245,subscriptionRate:243, requiredAmount:1, closingDate: "11-12-2023"}
  ];
  
  constructor(private _liveAnnouncer: LiveAnnouncer, public ipoService:IpoService,  authService: AuthenticationService) {   
    this.isLogin= authService.isLoggedIn();
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
