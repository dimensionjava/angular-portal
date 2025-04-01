import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../../data/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl: string = "http://localhost:3000/products";
  constructor(private http: HttpClient) {  }


    /**
     * Obtiene los productos destacados desde la API
     * @returns Observable con lista de productos
     */
    getFeaturedProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }

    /**
     * Obtiene un producto por su ID
     * @param id ID del producto
     * @returns Observable con el producto
     */
    getProductById(id: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }
  }



