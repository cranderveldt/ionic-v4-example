import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public pageId: string
  constructor(
    private route: ActivatedRoute,
  ) {
    this.pageId = this.route.snapshot.paramMap.get('pid')
  }
}
