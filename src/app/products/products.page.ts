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
      price: 250.000,
      image: 'assets/640.webp'
    },
    {
      name: 'Pedal de Efectos',
      description: 'Un pedal de efectos versátil para mejorar tu sonido.',
      price: 45.000,
      image: 'assets/Source-Audio-Soundblox-Dual-Expression-Pedal-left-angle.jpg'
    },
    {
      name: 'Cuerdas de Guitarra',
      description: 'Cuerdas de guitarra duraderas para un sonido impecable.',
      price: 35.000,
      image: 'assets/cuerrdas de guitarra.jpg'
    },
    {
      name: 'Pack de Uñetas',
      description: 'Cuerdas de guitarra duraderas para un sonido impecable.',
      price: 15.000,
      image: 'assets/uñetas-celuloide-2.jpg'
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

