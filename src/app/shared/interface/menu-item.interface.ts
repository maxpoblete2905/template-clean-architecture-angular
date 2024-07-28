export interface MenuItem {
  label: string; // Etiqueta del menú
  icon: string; // Ruta del icono principal
  route: string; // Ruta principal del menú
  subMenu?: SubMenuItem[]; // Submenú opcional
}

export interface SubMenuItem {
  label: string; // Etiqueta del submenú
  icon: string; // Ruta del icono del submenú
  route: string; // Ruta del submenú
}
