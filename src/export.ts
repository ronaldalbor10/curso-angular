export interface Producto2 {
    nombre: string;
    precio: number;
}

export function CalculaISV2(productos: Producto2[]):[number, number] {
    let total = 0;

    
    //productos.forEach((producto)=>{
    productos.forEach(({precio})=>{    
        //total +=producto.valor;
        total +=precio;
    });
    
 

    return [total,total * 1.19];
}