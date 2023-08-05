import { Component, OnInit } from '@angular/core';

declare var $: any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  displayMaximizable: boolean;
  images: any[];

  responsiveOptions: any[] = [
        {
breakpoint: '1024px',
  numVisible: 5
        },
        {
breakpoint: '768px',
  numVisible: 3
        },
        {
breakpoint: '560px',
  numVisible: 1
        }
    ];


  notaglobal: number;
  displaySidebarChat: boolean;
  
  ngOnInit() {
    /////////////////////////////////////////

    // Product Main img Slick
    $('#product-main-img').not('slick-initialized').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-imgs',
    });

    // Product imgs Slick
    $('#product-imgs').not('slick-initialized').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: '#product-main-img',
      responsive: [{
        breakpoint: 991,
        settings: {
          vertical: false,
          arrows: false,
          dots: true,
        }
      },
      ]
    });

    // Product img zoom
    let zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
      $('#product-main-img .product-preview').zoom();
    }

    /////////////////////////////////////////

  }
 
  

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  showSidebarChat() {
    this.displaySidebarChat = true;
  }
}
