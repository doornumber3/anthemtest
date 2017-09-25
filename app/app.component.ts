import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from './services/data.service';
import { ReversemodeDirective } from './directives/reversemode.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http:Http, private dataService:DataService) {}
 
  navjson = this.dataService.listing[0].nav;
  //navjson = this.dataService.listing;
  ngOnInit()
  {
    console.log('000');
    //console.log(this.dataService.listing[0].nav);
    console.log(this.dataService.listing[0].nav);
    //this.forLaterUse();
    //this.dataService.navListData().subscribe(resnavdata => this.navjson = resnavdata);
  }

  title = 'app';
  navdrop = false;

  navtab = false;
  navtab2 = false;
  navtab3 = false;

  articleimg = '<div class="img"></div>';
  articlecol = `<div class="column">
  <span>
    Title Text
  </span>
  Revolver is a 2005 British-French crime thriller film co-written and directed by Guy Ritchie and starring Jason Statham, Ray Liotta, Vincent Pastore and André Benjamin. The film centres on a revenge-seeking confidence trickster whose weapon is a universal formula that guarantees victory to its user, when applied to any game or confidence trick.
  
  This is the fourth feature film by Ritchie and his third to centre on crime and professional criminals. It was released in UK theatres on 22 September 2005. It performed poorly at the box office and received negative reviews but has gained a small cult following among fans of Guy Ritchie's previous crime films. A reworked version[2] was released to a limited number of US theatres on 7 December 2007
</div>`

  reversal = false;

  reversible = {
    'fliphoriz': true
  }

  navFunc()
  {
    this.navdrop = !this.navdrop;
    
    //console.log("navdrop :"+ this.navdrop);
  }

  navTabFunc()
  {
    this.navtab = !this.navtab;
    //console.log("navtab :"+ this.navtab);
  }
  navTabFunc2()
  {
    this.navtab2 = !this.navtab2;
    //console.log("navtab2 :"+ this.navtab2);
  }
  navTabFunc3()
  {
    this.navtab3 = !this.navtab3;
    //console.log("navtab3 :"+ this.navtab3);
  }

  flipHoriz()
  {
    this.reversal = !this.reversal;
  }

  datafile = '';
  forLaterUse()
  {
    this.http.get(this.datafile).subscribe((res => {
        const myNav = res.json();
        console.log("RES " + myNav);
      })
    );
    /*  this.DataService.navListData().subscribe((nav) => {
      console.log(nav);
    }) */
  }
}

