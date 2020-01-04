DELIMITER ;;
CREATE  PROCEDURE `student_education__insert`(
IN p_student_id int,
IN p_colegio varchar(145),
IN p_lugar varchar(145),
IN p_nivel varchar(145),
IN p_titulo 	varchar(145)
)
BEGIN

INSERT INTO student_education
(student_id,colegio,lugar,nivel,titulo)
VALUES
(p_student_id,p_colegio,p_lugar,p_nivel,p_titulo);

END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `student_employee__insert`(
IN p_student_id int,
IN p_fecha varchar(145),
IN p_tipo varchar(145),
IN p_entidad varchar(145),
IN p_direc 	varchar(145),
IN p_ingresos varchar(145)
)
BEGIN

INSERT INTO student_employee
(student_id,fecha,tipo,entidad,direc,ingresos)
VALUES
(p_student_id,p_fecha,p_tipo,p_entidad,p_direc,p_ingresos);

END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `student_family__insert`(
IN p_student_id int,
IN p_celular varchar(145),
IN p_domicilio varchar(145),
IN p_nombre varchar(145),
IN p_ocupacion varchar(145),
IN p_parentesco varchar(145),
IN p_telefono varchar(145)
)
BEGIN

INSERT INTO student_family 
(student_id,celular,domicilio,nombre,ocupacion,parentesco,telefono)
VALUES
(p_student_id,p_celular,p_domicilio,p_nombre,p_ocupacion,p_parentesco,p_telefono);


END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `student_travel__insert`(
IN p_student_id int,
IN p_fecha varchar(145),
IN p_pais varchar(145),
IN p_motivo varchar(145)
)
BEGIN

INSERT INTO student_travel
(student_id,fecha,pais,motivo)
VALUES
(p_student_id,p_fecha,p_pais,p_motivo);

END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `student__find_all`()
BEGIN
	SELECT 
		student_id 						as student_id,
        name					as student_name,
        firstLastname			as student_firstLastname,
        secondLastname			as student_secondLastname,
        dni						as student_dni,
        celular					as student_celular
    FROM
		student;
END ;;
DELIMITER ;


DELIMITER ;;
CREATE  PROCEDURE `student__find_id`(
IN p_id int)
BEGIN
	SELECT 
		s.student_id 						as student_id,
        s.firstLastname  			as student_firstLastname,
        s.secondLastname			as student_secondLastname,
        s.name 					as student_name,
        s.alias					as student_alias,
        s.stateCivil				as student_stateCivil,
        s.nationality				as student_nationality,
        s.deparment				as student_deparment,
        s.province				as student_province,
        s.distrity				as student_distrity,
        s.dateBirth				as student_dateBirth,
        s.correo 					as student_correo,
        s.paginaWeb				as student_paginaWeb,
        s.facebook				as student_facebook,
        s.twiter					as student_twiter,
        s.celular					as student_celular,
        s.telefono				as student_telefono,
        s.sexo					as student_sexo,
        s.talla					as student_talla,
        s.peso					as student_peso,
        s.colorTez				as student_colorTez,
        s.tipoCara				as student_tipoCara,
        s.colorOjos				as student_colorOjos,
        s.tipoPelo				as student_tipoPelo,
        s.tipoNariz				as student_tipoNariz,
        s.grupoSanguineo			as student_grupoSanguineo,
        s.posiUserBarba			as student_posiUserBarba,
        s.senalesParticualres		as student_senalesParticualres,
        s.inscripcion				as student_inscripcion,
        s.libretaMilitar			as student_libretaMilitar,
        s.dni						as student_dni,
        s.cip						as student_cip,
        s.brevete					as student_brevete,
        s.pasaporte				as student_pasaporte,
        s.pnp						as student_pnp,
        s.enjuiciado				as student_enjuiciado,
        s.hospitalizado			as student_hospitalizado,
        s.smv						as student_smv,
        s.agrupacionPolitica		as student_agrupacionPolitica,
        s.comisaria				as student_comisaria,
        s.juzgado					as student_juzgado,
        s.hospital				as student_hospital,
        s.dependencia				as student_dependencia,
		sf.id_student_family				as student_family_id,
        sf.nombre					as student_family_nombre,
        sf.telefono					as student_family_telefono,
        sf.celular					as student_family_celular,
        sf.parentesco					as student_family_parentesco,
        sf.ocupacion					as student_family_ocupacion,
        sf.domicilio				as student_family_domicilio,
        st.fecha					as  student_travel_fecha,
        st.pais					as  student_travel_pais,
        st.motivo					as  student_travel_motivo,
        se.fecha			as  student_employee_fecha,
        se.tipo			as  student_employee_tipo,
        se.entidad			as  student_employee_entidad,
        se.direc			as  student_employee_direc,
        se.ingresos			as  student_employee_ingresos,
        sed.colegio			as  student_education_colegio,
        sed.lugar			as  student_education_lugar,
        sed.nivel			as  student_education_nivel,
        sed.titulo			as  student_education_titulo
    FROM
		student s
	LEFT JOIN student_family sf
    ON s.student_id = sf.student_id
    LEFT JOIN student_travel st
    ON s.student_id = st.student_id
    LEFT JOIN student_employee se
    ON s.student_id = se.student_id
    LEFT JOIN student_education sed
    ON s.student_id = sed.student_id
	WHERE s.student_id=p_id;

END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `student__insert`(
IN p_student_id	int,
IN p_firstLastname varchar(145),
IN p_secondLastname varchar(145),
IN p_name varchar(145),
IN p_alias varchar(145),
IN p_stateCivil varchar(145),
IN p_nationality varchar(145),
IN p_deparment varchar(145),
IN p_province varchar(145),
IN p_distrity varchar(145),
IN p_dateBirth varchar(145),
IN p_correo varchar(145),
IN p_paginaWeb varchar(145),
IN p_facebook varchar(145),
IN p_twiter varchar(145),
IN p_celular varchar(145),
IN p_telefono varchar(145),
IN p_sexo varchar(145),
IN p_talla varchar(145),
IN p_peso varchar(145),
IN p_colorTez varchar(145),
IN p_tipoCara varchar(145),
IN p_colorOjos varchar(145),
IN p_tipoPelo varchar(145),
IN p_tipoNariz varchar(145),
IN p_grupoSanguineo varchar(145),
IN p_posiUserBarba varchar(145),
IN p_senalesParticualres varchar(145),
IN p_inscripcion varchar(145),
IN p_libretaMilitar varchar(145),
IN p_dni varchar(145),
IN p_cip varchar(145),
IN p_brevete varchar(145),
IN p_pasaporte varchar(145),

IN p_pnp varchar(145),
IN p_enjuiciado varchar(145),
IN p_hospitalizado varchar(145),
IN p_smv varchar(145),
IN p_agrupacionPolitica varchar(145),
IN p_comisaria varchar(145),
IN p_juzgado varchar(145),
IN p_hospital varchar(145),
IN p_dependencia varchar(145)
)
BEGIN
DELETE FROM student where student_id = p_student_id;
DELETE FROM student_family where student_id = p_student_id;
INSERT INTO student 
(firstLastname,secondLastname,name,alias,
        stateCivil,nationality,deparment,province,
        distrity,dateBirth,correo,paginaWeb,
        facebook,twiter,celular,telefono,
        sexo,talla,peso,colorTez,
        tipoCara,colorOjos,tipoPelo,tipoNariz,
        grupoSanguineo,posiUserBarba,senalesParticualres,inscripcion,
        libretaMilitar,dni,cip,brevete,
        pasaporte,pnp,enjuiciado,hospitalizado,
        smv,agrupacionPolitica,comisaria,juzgado,hospital,dependencia)
VALUES
(p_firstLastname,p_secondLastname,p_name,p_alias,
        p_stateCivil,p_nationality,p_deparment,p_province,
        p_distrity,p_dateBirth,p_correo,p_paginaWeb,
        p_facebook,p_twiter,p_celular,p_telefono,
        p_sexo,p_talla,p_peso,p_colorTez,
        p_tipoCara,p_colorOjos,p_tipoPelo,p_tipoNariz,
        p_grupoSanguineo,p_posiUserBarba,p_senalesParticualres,p_inscripcion,
        p_libretaMilitar,p_dni,p_cip,p_brevete,
        p_pasaporte,p_pnp,p_enjuiciado,p_hospitalizado,
        p_smv,p_agrupacionPolitica,p_comisaria,p_juzgado,p_hospital,p_dependencia);

SELECT last_insert_id();

END ;;
DELIMITER ;