


DELIMITER ;;
CREATE  PROCEDURE `student__find_all`()
BEGIN
	SELECT 
		id 						as student_id,
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
		id 						as student_id,
        firstLastname  			as student_firstLastname,
        secondLastname			as student_secondLastname,
        name 					as student_name,
        alias					as student_alias,
        stateCivil				as student_stateCivil,
        nationality				as student_nationality,
        deparment				as student_deparment,
        province				as student_province,
        distrity				as student_distrity,
        dateBirth				as student_dateBirth,
        correo 					as student_correo,
        paginaWeb				as student_paginaWeb,
        facebook				as student_facebook,
        twiter					as student_twiter,
        celular					as student_celular,
        telefono				as student_telefono,
        sexo					as student_sexo,
        talla					as student_talla,
        peso					as student_peso,
        colorTez				as student_colorTez,
        tipoCara				as student_tipoCara,
        colorOjos				as student_colorOjos,
        tipoPelo				as student_tipoPelo,
        tipoNariz				as student_tipoNariz,
        grupoSanguineo			as student_grupoSanguineo,
        posiUserBarba			as student_posiUserBarba,
        senalesParticualres		as student_senalesParticualres,
        inscripcion				as student_inscripcion,
        libretaMilitar			as student_libretaMilitar,
        dni						as student_dni,
        cip						as student_cip,
        brevete					as student_brevete,
        pasaporte				as student_pasaporte,
        pnp						as student_pnp,
        enjuiciado				as student_enjuiciado,
        hospitalizado			as student_hospitalizado,
        smv						as student_smv,
        agrupacionPolitica		as student_agrupacionPolitica,
        comisaria				as student_comisaria,
        juzgado					as student_juzgado,
        hospital				as student_hospital,
        dependencia				as student_dependencia
    FROM
		student
	WHERE id=p_id;

END ;;
DELIMITER ;


DELIMITER ;;
CREATE  PROCEDURE `student__insert`(
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

DELIMITER ;;
CREATE  PROCEDURE `product__update`(
IN p_id int,
IN p_name varchar(45),
IN p_quanty int,
IN p_type int,
IN p_priece int
)
BEGIN

UPDATE product
SET name=p_name,
     quanty=p_quanty,
	type=p_type,
    priece=p_priece
WHERE id=p_id ;

select last_insert_id();
END ;;
DELIMITER ;

