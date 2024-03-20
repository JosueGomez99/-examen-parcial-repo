import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PokedexPage implements OnInit {
  pokemons: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getPokemons();
  }

  async getPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      this.pokemons = data.results;
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
  }
}