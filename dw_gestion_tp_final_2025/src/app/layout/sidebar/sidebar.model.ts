export interface ISidebarItem {
    label: string;
    icon?: string;   // Podés usar Heroicons o Material Icons
    route?: string;  // Ruta a navegar
    children?: ISidebarItem[]; // Submenús
}
