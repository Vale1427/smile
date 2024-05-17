USE master
go

CREATE DATABASE HappySmile
go

USE HappySmile
go


DROP DATABASE HappySmile
go


-- CREACION DE LAS CUENTAS
CREATE TABLE Privilegio(
	IdPrivilegio tinyint not null,
	nombreRol varchar(100),
	CONSTRAINT pk_IdPrivilegio PRIMARY KEY(IdPrivilegio)	
)
go

--DUMMY DATA
insert into privilegio values (0, 'INVITADO'),(1,'Administrador'), (2, 'Doctor'), (3,'Secretaria'), (4,'Cliente')


CREATE TABLE Cuenta(

	correoElectronico VARCHAR(50) not null,
	contraseña VARCHAR(500) default 'NOPASSWORDYET' null,
	activada bit default 0,
	IdRol tinyint default 0,
	
	CONSTRAINT PK_CorreoElectronico PRIMARY KEY(correoElectronico),
	CONSTRAINT FK_IdRol FOREIGN KEY(IdRol) REFERENCES Privilegio(IdPrivilegio)
)
go 


CREATE TABLE Usuarios (
    ID_usuario INT IDENTITY(0, 1),
    Nombre NVARCHAR(100) NOT NULL,
    ApellidoP NVARCHAR(100) NOT NULL,
	ApellidoM NVARCHAR(100) NOT NULL,
    Telefono NVARCHAR(20) NULL,
    FechaNacimiento DATE NOT NULL,

	CONSTRAINT PK_IdUsuario PRIMARY KEY(ID_usuario),
	CONSTRAINT FK_correoElectronico FOREIGN KEY(CorreoElectronico) REFERENCES Cuenta(correoElectronico)

);

--PROCEDIMIENTO PARA REGISTRAR CLIENTES
-- Procedimiento para insertar cuenta
CREATE PROCEDURE UP_InsertarCuenta (
  @correoElectronico VARCHAR(50)
)
AS
BEGIN
  INSERT INTO Cuenta(correoElectronico) VALUES (@correoElectronico);

  SET @cuentaID = SCOPE_IDENTITY();
END
go

CREATE PROCEDURE UP_RegistroCliente (
  @correoElectronico VARCHAR(50),
  @nombre NVARCHAR(100) ,
  @ApellidoP NVARCHAR(100) ,
  @ApellidoM NVARCHAR(100) ,
  @telefono NVARCHAR(20) ,
  @fechaNacimiento DATE 
)
AS
BEGIN
  DECLARE @cuentaID INT;

  BEGIN TRY
    BEGIN TRANSACTION;
	DECLARE @CE VARCHAR(50) 
	
    INSERT INTO Cuenta(correoElectronico) VALUES (@correoElectronico);
	SET @cuentaID = SCOPE_IDENTITY();
	print(@CE)
	
	insert into Usuarios values (@CE, @nombre, @ApellidoP, @ApellidoM, @telefono, @fechaNacimiento)
    COMMIT TRANSACTION;
	return 1
  END TRY
  BEGIN CATCH
    DECLARE @errorMessage NVARCHAR(MAX);
    SET @errorMessage = 'Error al registrar usuario. Contacte a soporte.';

    ROLLBACK TRANSACTION;

    SELECT ERROR_MESSAGE() AS ErrorMessage;
  END CATCH
END;
go




--DUMMY DATA
drop procedure UP_RegistroCliente 

EXEC UP_RegistroCliente 'correo@ejemplo.com', 'Juan Pérez', 'Pérez', 'Martínez', '555-555-5555', '1990-01-01'


select * from Cuenta
select * from Usuarios

--TERMINO DE LA CREACION DE LAS CUENTAS







