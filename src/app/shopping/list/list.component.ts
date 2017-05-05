import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShoppingDataService} from '../../service/shopping-data.service';
import { Product , Category} from '../../model/shopping';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[ShoppingDataService]
})
export class ListComponent implements OnInit {
  CategoryList : Array<Category> = [];
  constructor(private router:Router, private sDataService : ShoppingDataService) { 
    this.CategoryList = sDataService.getCategoryList();
  }

  ngOnInit() {
  }

  onCategoryBtnClick(n:Category){
    this.router.navigate(['/shopping',n.key]);
  }
}
