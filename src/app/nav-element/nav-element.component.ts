import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrl: './nav-element.component.css'
})
export class NavElementComponent implements OnInit {
  public nav: any;
  public swapiData: any;

  constructor(
    private route: ActivatedRoute,
    public navigationService: NavigationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const navElement = +params['url'];
      this.nav = this.navigationService.getNavigationByUrl(navElement);

      if (this.nav && this.nav.name) {
        this.fetchSwapiData(this.nav.name);
      } else {
        alert('Navigation item not found or does not have a name property.');
      }
    });
  }

  private fetchSwapiData(resourceName: string): void {
    const swapiUrl = `https://swapi.dev/api/${resourceName}`;

    this.http.get(swapiUrl).subscribe(data => {
      this.swapiData = data;
      this.swapiData = this.swapiData.results || this.swapiData;
    });
  }
}