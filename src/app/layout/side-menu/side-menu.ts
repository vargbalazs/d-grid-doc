import { Component, ViewChild } from '@angular/core';
import { KENDO_TREEVIEW, TreeViewComponent } from '@progress/kendo-angular-treeview';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'side-menu',
  imports: [KENDO_TREEVIEW],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [];
  expandedKeys: string[] = [];
  selectedKeys: string[] = [];

  isItemExpanded = (_: any, index: string) => this.expandedKeys.indexOf(index) > -1;

  @ViewChild('treeview') treeview!: TreeViewComponent;

  nodeClick(e: any) {
    const item = e.item.dataItem as MenuItem;
    const index = e.item.index;
    if (this.isItemExpanded(item, index)) {
      this.treeview.collapseNode(item, index);
    } else {
      //   if (!this.layoutService.navbarIsOpen) this.layoutService.toggleNavBarPanel();
      //   {
      this.treeview.expandNode(item, index);
      //   }
    }
    // if (item.routePath) {
    //   this.router.navigate([item.routePath], { skipLocationChange: true });
    //   this.layoutService.toggleNavBarPanel();
    // }
  }
}
