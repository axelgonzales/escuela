import { Education } from './education';
import { Employee } from './employee';
import { Travel } from './travel';
import { Family } from './family';

export class Student {
    studentId: number;
    firstLastname: string;
    secondLastname: string;
    name: string;
    alias: string;
    stateCivil: string;
    nationality: string;
    deparment: string;
    province: string;
    distrity: string;
    dateBirth: string;
    correo : string;
    paginaWeb : string;
    facebook : string;
    twiter : string;
    celular : string;
    telefono : string;

    sexo  : string;
    talla  : string;
    peso  : string;
    colorTez  : string;
    tipoCara  : string;
    colorOjos  : string;

    tipoPelo  : string;
    tipoNariz  : string;
    grupoSanguineo  : string;
    posiUserBarba  : string;
    senalesParticualres  : string;

    inscripcion  : string;
    libretaMilitar  : string;
    dni  : string;
    cip  : string;
    brevete  : string;
    pasaporte  : string;

    pnp : string;
    enjuiciado : string;
    hospitalizado : string;
    smv : string;
    agrupacionPolitica : string;

    comisaria : string;
    juzgado : string;
    hospital : string;
    dependencia : string;
    educations : Education[];
    employees : Employee[];
    travels : Travel[];
    families : Family[];
}