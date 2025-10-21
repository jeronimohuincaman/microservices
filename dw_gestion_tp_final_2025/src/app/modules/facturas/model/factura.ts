export interface IFactura {
}

export interface IItemFactura {
    descripcion: string;
    cantidad: number;
    precio: number;
}

export interface dtoCreateFactura {
    numero: number;
    cliente: string;
    total: number;
    items: IItemFactura[];
}