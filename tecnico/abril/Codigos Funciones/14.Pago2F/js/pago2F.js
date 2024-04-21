/**
 * Funciones
 * Autor: Sergio Andres Leguizamo
 * Fecha: jueves 04 de abril de 2024
 * 
 */
function calSalario(pvDia,pdTra){
    let salario;
    let vDia = pvDia;
    let dTra = pdTra;
    salario=vDia*dTra;
    return salario;

}

function calSalud(pvDia,pdTra){
    let salud = calSalario(pvDia,pdTra)*0.12;
    return salud;

}

function calPension(pvDia,pdTra){
    let pension = calSalario(pvDia,pdTra)*0.16;
    return pension;

}

function calArl(pvDia,pdTra){
    let arl = calSalario(pvDia,pdTra)*0.052;
    return arl;
}

function calDescuento(pvDia,pdTra){
    let salud= calSalud(pvDia,pdTra);
    let pension= calPension(pvDia,pdTra);
    let arl= calArl(pvDia,pdTra);
    let descuento;
    descuento = salud+pension+arl;
    return descuento;
}

function calSubTransporte(pvDia,pdTra){
    let subTransporte = 0;
    if(calSalario(pvDia,pdTra)<(2*1300000)){
        subTransporte = subTransporte+114000;
    }else{
        subTransporte = subTransporte+0;
    }
    return subTransporte;
}
function calRetencion(pvDia,pdTra){
    let retencion= 0;
    if(calSalario(pvDia,pdTra)>(4*1300000)){
        retencion=calSalario(pvDia,pdTra)*0.04;
    }else{
        retencion=retencion+0;
    }
    return retencion;

}

function calPagoTotal(pvDia,pdTra){
    let salario= calSalario(pvDia,pdTra);
    let subTransporte= calSubTransporte(pvDia,pdTra);
    let descuento= calDescuento(pvDia,pdTra);
    let retencion= calRetencion(pvDia,pdTra);
    let pagoTotal;
    pagoTotal = (salario+subTransporte)-(descuento+retencion);
    return pagoTotal;
}
/**
 * constante 
 */

const calSalario2=function(pvDia,pdTra){
    let salario;
    let vDia = pvDia;
    let dTra = pdTra;
    salario=vDia*dTra;
    return salario;

}

const calSalud2=function(pvDia,pdTra){
    let salud = calSalario2(pvDia,pdTra)*0.12;
    return salud;

}

const calPension2=function(pvDia,pdTra){
    let pension = calSalario2(pvDia,pdTra)*0.16;
    return pension;

}

const calArl2=function(pvDia,pdTra){
    let arl = calSalario2(pvDia,pdTra)*0.052;
    return arl;
}

const calDescuento2=function(pvDia,pdTra){
    let salud= calSalud2(pvDia,pdTra);
    let pension= calPension2(pvDia,pdTra);
    let arl= calArl2(pvDia,pdTra);
    let descuento;
    descuento = salud+pension+arl;
    return descuento;
}

const calSubTransporte2=function(pvDia,pdTra){
    let subTransporte = 0;
    if(calSalario2(pvDia,pdTra)<(2*1300000)){
        subTransporte = subTransporte+114000;
    }else{
        subTransporte = subTransporte+0;
    }
    return subTransporte;
}
const calRetencion2=function(pvDia,pdTra){
    let retencion= 0;
    if(calSalario2(pvDia,pdTra)>(4*1300000)){
        retencion=calSalario2(pvDia,pdTra)*0.04;
    }else{
        retencion=retencion+0;
    }
    return retencion;

}

const calPagoTotal2=function(pvDia,pdTra){
    let salario= calSalario2(pvDia,pdTra);
    let subTransporte= calSubTransporte2(pvDia,pdTra);
    let descuento= calDescuento2(pvDia,pdTra);
    let retencion= calRetencion2(pvDia,pdTra);
    let pagoTotal;
    pagoTotal = (salario+subTransporte)-(descuento+retencion);
    return pagoTotal;

}