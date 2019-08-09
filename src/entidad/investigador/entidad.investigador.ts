
export class Investigador
{
    inv_codi:number;
    inv_iden:string;
    inv_tipo_docu_codi:number;
    inv_nomb:string;
    inv_apel:string;
    inv_link_cvla:string;
    inv_fech_naci:Date;
    inv_cent_codi:number;
    inv_prog_acad_codi:number;
    inv_mail :string;
    inv_tele_celu:string;
    inv_foto:string;
    inv_user:string;
    inv_pass:string;
    inv_tipo:number;
    inv_codi_usua:number;
    inv_tica_codi:number;    
    accion:string;
}

export class TipoDocumento
{
    tid_codi:number;
    tid_nomb:string;

    accion:string;
}

export class Centro
{
    cen_codi:number;
    cen_zona_codi:number;
    cen_nomb:string;    

    accion:string;
}