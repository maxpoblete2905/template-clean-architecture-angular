import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MenuComponent } from '../menu/menu.component';
import { MENU_ITEMS } from '@shared/constants/menu-items';
import { MenuItem } from '@shared/interface';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormField,
    MenuComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  menuItems: MenuItem[] = MENU_ITEMS;

  toggleSidenav() {
    // Implement the sidenav toggle logic here
  }

  constructor() {
    console.log(this.menuItems);
  }
}
