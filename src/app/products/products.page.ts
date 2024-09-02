import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
    {
      name: 'Guitarra Eléctrica',
      description: 'Una guitarra eléctrica de alta calidad para músicos profesionales.',
      price: 150.00,
      image: 'assets/img/instrumento1.jpg'
    },
    {
      name: 'Pedal de Efectos',
      description: 'Un pedal de efectos versátil para mejorar tu sonido.',
      price: 75.00,
      image: 'assets/img/accesorio1.jpg'
    },
    {
      name: 'Cuerdas de Guitarra',
      description: 'Cuerdas de guitarra duraderas para un sonido impecable.',
      price: 15.00,
      image: 'assets/img/accesorio2.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addToCart(product: { name: any; }) {
    // Lógica para agregar el producto al carrito
    console.log(`Producto agregado: ${product.name}`);
  }
}

