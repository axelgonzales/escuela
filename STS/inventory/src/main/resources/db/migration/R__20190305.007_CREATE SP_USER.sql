

DELIMITER ;;
CREATE  PROCEDURE `user__insert`(
IN p_name varchar(145),
IN p_username varchar(120),
IN p_password varchar(120)
)
BEGIN

	INSERT INTO user 
	(name,username,password)
	VALUES
	(p_name,p_username,p_password);
	
	SELECT last_insert_id();
END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `user__login`(
IN p_username varchar(120),
IN p_password varchar(120)
)
BEGIN
	SELECT
	 id as user_id,
	 name as user_name
	FROM 
	 user
	WHERE
	 username = p_username
	AND
	 password = p_password;

END ;;
DELIMITER ;
