
import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { TopLineComponent } from '../top-line/top-line.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-home-header',  // You need a selector to use this component in your templates
  standalone: true,
  templateUrl: './headerHome.component.html',  // You need a template
  imports: [ TopLineComponent, NavigationComponent]
})
export class HomeHeader implements OnInit {

  navHeader: any | null = null;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.getNavHeader().subscribe((response) => {
      if (!response.error) {
        this.navHeader = (response['@nodes'] as string[])?.map((nodeName: string) => {
          return response[nodeName];
        });
        this.navHeader = this.navHeader.filter((x: { [x: string]: string; }) => x['mgnl:template'] === "uob-lm:components/navigation")[0]?.items;
      }
    });
  }
}