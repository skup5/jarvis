import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal, Portal, TemplatePortal, PortalOutlet } from '@angular/cdk/portal';

@Component({
  selector: 'app-portal-component',
  template: '<p>Portal component</p>',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 * @title Portal overview
 */
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class CdkPortalOverview implements AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  @ViewChild(CdkPortalOutlet, { static: false }) portalOutlet: PortalOutlet;
  // selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<PortalComponent>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(PortalComponent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }

  openPortal(portal: Portal<any>) {
    if (!!portal) {
      this.portalOutlet.detach();
      this.portalOutlet.attach(portal);
    }
  }
}