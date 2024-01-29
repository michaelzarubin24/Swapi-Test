import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigation: any[] = [
    {
      url: 0,
      name: 'people',
    },
    {
      url: 1,
      name: 'planets',
    },
    {
      url: 2,
      name: 'films',
    },
    {
      url: 3,
      name: 'species',
    },
    {
      url: 4,
      name: 'vehicles',
    },
    {
      url: 5,
      name: 'starships',
    }
  ];

  constructor() { }

  public getNavigation(): any[] {
    return [...this.navigation];
  }

  public addNewNavigation(newVav): void {
    this.navigation.push({
      url: this.navigation.length,
      name: newVav.name,
    });
  }

  public getNavigationByUrl(url: number) {
    return this.navigation.find(nav => nav.url === url); 
  }
}