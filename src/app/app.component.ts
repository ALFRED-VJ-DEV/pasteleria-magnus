import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from "./Views/Components/navbar/navbar.component";
import { HomeComponent } from "./Views/Components/home/home.component";
import { BotonAcerPedidoComponent } from "./Views/Components/boton-acer-pedido/boton-acer-pedido.component";
import { MenuComponent } from "./Views/Responsivs_Components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatIconModule, NavbarComponent, HomeComponent, BotonAcerPedidoComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pasteleria-magnus';
}
