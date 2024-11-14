import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CardsComponent, FormsModule, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  // Lista de productos
  productos = [
    {
      id: 1,
      nombre: 'Disco de Embrague',
      categoria: 'categoria1',
      imagen: 'assets/productos/embrague.png',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      categoria: 'categoria2',
      imagen: 'assets/productos/plato.png',
    },
    {
      id: 3,
      nombre: 'Producto 3',
      categoria: 'categoria3',
      imagen: 'assets/productos/freno.png',
    },
    {
      id: 4,
      nombre: 'Producto 4',
      categoria: 'categoria1',
      imagen: 'assets/productos/freno.png',
    },
    {
      id: 5,
      nombre: 'Producto 5',
      categoria: 'categoria2',
      imagen: 'assets/productos/piñon.jpg',
    },
    {
      id: 6,
      nombre: 'Producto 6',
      categoria: 'categoria3',
      imagen: 'assets/productos/propulsor.png',
    },
  ];

  // Categorías disponibles
  categorias = ['todos', 'categoria1', 'categoria2', 'categoria3'];

  // Variable para la categoría seleccionada
  categoriaSeleccionada: string = 'todos';

  // Filtrar productos según la categoría seleccionada
  filtrarProductos(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  // Obtener productos filtrados
  obtenerProductos() {
    if (this.categoriaSeleccionada === 'todos') {
      return this.productos;
    }
    return this.productos.filter(
      (producto) => producto.categoria === this.categoriaSeleccionada
    );
  }
}
