import { ChangeDetectionStrategy, Component, inject, Inject, ViewChild } from '@angular/core';
import { KENDO_TREEVIEW, TreeViewComponent } from '@progress/kendo-angular-treeview';
import { MenuItem } from '../interfaces/menu-item';
import { menuItems } from './side-menu-items';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu',
  imports: [CommonModule, KENDO_TREEVIEW],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  menuItems: MenuItem[] = menuItems;
  expandedKeys: string[] = [];
  selectedKeys: string[] = [];

  isItemExpanded = (_: any, index: string) => this.expandedKeys.indexOf(index) > -1;

  @ViewChild('treeview') treeview!: TreeViewComponent;

  router = inject(Router);

  nodeClick(e: any) {
    const item = e.item.dataItem as MenuItem;
    const index = e.item.index;
    if (this.isItemExpanded(item, index)) {
      this.treeview.collapseNode(item, index);
    } else {
      this.treeview.expandNode(item, index);
    }
    if (item.routePath) {
      this.router.navigate([item.routePath], { skipLocationChange: true });
    }
  }
}
