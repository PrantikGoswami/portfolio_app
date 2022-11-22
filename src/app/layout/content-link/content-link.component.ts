import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-link',
  templateUrl: './content-link.component.html',
  styleUrls: ['./content-link.component.css']
})
export class ContentLinkComponent implements OnInit {

  @Input() totalData: any;

  constructor() { }

  ngOnInit(): void {

    // this.totalData = [
    //   {
    //     title : "Quick Start",
    //     link: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
    //     alt: "start"
    //   },
    //   {
    //     title : "Product Info",
    //     link: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
    //     alt: "info"
    //   },
    //   {
    //     title : "Product Doc",
    //     link: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
    //     alt: "doc"
    //   }
    // ]
  }

}
