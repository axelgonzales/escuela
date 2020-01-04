CREATE TABLE `student` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstLastname` varchar(120) DEFAULT NULL,
  `secondLastname` varchar(120) DEFAULT NULL,
  `name` varchar(120) DEFAULT NULL,
  `alias` varchar(120) DEFAULT NULL,
  `stateCivil` varchar(120) DEFAULT NULL,
  `nationality` varchar(120) DEFAULT NULL,
  `deparment` varchar(120) DEFAULT NULL,
  `province` varchar(120) DEFAULT NULL,
  `distrity` varchar(120) DEFAULT NULL,
  `dateBirth` varchar(120) DEFAULT NULL,
  `correo` varchar(120) DEFAULT NULL,
  `paginaWeb` varchar(120) DEFAULT NULL,
  `facebook` varchar(120) DEFAULT NULL,
  `twiter` varchar(120) DEFAULT NULL,
  `celular` varchar(120) DEFAULT NULL,
  `telefono` varchar(120) DEFAULT NULL,
  `sexo` varchar(120) DEFAULT NULL,
  `talla` varchar(120) DEFAULT NULL,
  `peso` varchar(120) DEFAULT NULL,
  `colorTez` varchar(120) DEFAULT NULL,
  `tipoCara` varchar(120) DEFAULT NULL,
  `colorOjos` varchar(120) DEFAULT NULL,
  `tipoPelo` varchar(120) DEFAULT NULL,
  `tipoNariz` varchar(120) DEFAULT NULL,
  `grupoSanguineo` varchar(120) DEFAULT NULL,
  `posiUserBarba` varchar(120) DEFAULT NULL,
  `senalesParticualres` varchar(120) DEFAULT NULL,
  `inscripcion` varchar(120) DEFAULT NULL,
  `libretaMilitar` varchar(120) DEFAULT NULL,
  `dni` varchar(120) DEFAULT NULL,
  `cip` varchar(120) DEFAULT NULL,
  `brevete` varchar(120) DEFAULT NULL,
  `pasaporte` varchar(120) DEFAULT NULL,
  `pnp` varchar(120) DEFAULT NULL,
  `enjuiciado` varchar(120) DEFAULT NULL,
  `hospitalizado` varchar(120) DEFAULT NULL,
  `smv` varchar(120) DEFAULT NULL,
  `agrupacionPolitica` varchar(120) DEFAULT NULL,
  `comisaria` varchar(120) DEFAULT NULL,
  `juzgado` varchar(120) DEFAULT NULL,
  `hospital` varchar(120) DEFAULT NULL,
  `dependencia` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
);

CREATE TABLE `student_education` (
  `id_student_education` int(11) NOT NULL AUTO_INCREMENT,
  `colegio` varchar(45) DEFAULT NULL,
  `lugar` varchar(45) DEFAULT NULL,
  `nivel` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `student_id` int(11) NOT NULL,
  PRIMARY KEY (`id_student_education`)
);

CREATE TABLE `student_employee` (
  `id_student_employee` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `entidad` varchar(45) DEFAULT NULL,
  `direc` varchar(45) DEFAULT NULL,
  `ingresos` varchar(45) DEFAULT NULL,
  `student_id` int(11) NOT NULL,
  PRIMARY KEY (`id_student_employee`)
);

CREATE TABLE `student_family` (
  `id_student_family` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `celular` varchar(45) DEFAULT NULL,
  `parentesco` varchar(45) DEFAULT NULL,
  `ocupacion` varchar(45) DEFAULT NULL,
  `domicilio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_student_family`)
) ;


CREATE TABLE `student_travel` (
  `id_student_travel` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `motivo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_student_travel`)
) ;