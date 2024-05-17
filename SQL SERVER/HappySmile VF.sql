
USE master
go
--Crear la base de datos
CREATE DATABASE HappySmile
go

DROP DATABASE HappySmile
GO

--INICIO PASO 1

USE HappySmile
GO
--CREACION DE TABLAS Y SUS RELACIONES
--TABLA PRIVILEGIO
CREATE TABLE Privilegio
(
	IdPrivilegio tinyint not null,
	--de 0 a 255 
	nombreRol varchar(100),
	CONSTRAINT pk_IdPrivilegio PRIMARY KEY(IdPrivilegio)
)
GO

--TABLA CUENTA
CREATE TABLE Cuenta
(
	id_usuario INT IDENTITY(1, 1), --Empezara uno e ira aumentando en 1
	correoElectronico NVARCHAR(100) not null,
	contraseña NVARCHAR(500) default 'HERES A RANDOM PASSWORD HAHA' not null, --Se guadaran string e incriptar (pendiete...)
	activada bit default 0,
	IdRol tinyint default 0,

	CONSTRAINT PK_IdUsuario PRIMARY KEY(id_usuario),
	CONSTRAINT FK_IdRol FOREIGN KEY(IdRol) REFERENCES Privilegio(IdPrivilegio)
)
GO

CREATE TABLE Usuario
(
	ID_usuario INT PRIMARY KEY,

	Nombre NVARCHAR(100) NOT NULL,
	ApellidoP NVARCHAR(100) NOT NULL,
	ApellidoM NVARCHAR(100) NOT NULL,
	Telefono NVARCHAR(20) NULL,
	FechaNacimiento DATE NOT NULL,

	CONSTRAINT FK_IDusuario FOREIGN KEY(ID_usuario) REFERENCES Cuenta(id_usuario)

);
GO



--FIN PASO 1


CREATE PROC up_registrarInvitado
(
	@correoElectronico NVARCHAR(100),
	@nombre NVARCHAR(100),
	@ApellidoP NVARCHAR(100),
	@ApellidoM NVARCHAR(100),
	@Telefono NVARCHAR(20),
	@FechaNacimiento DATE,
	@respuesta  VARCHAR(MAX) output
) 
--Variables de entrada
AS
	BEGIN --PROC
		

		BEGIN TRANSACTION --TRANSACCION
			
		BEGIN TRY --BEGIN TRY
			DECLARE @last_pk_id INT
			INSERT INTO Cuenta(correoElectronico) values (@correoElectronico)
			SET @last_pk_id = SCOPE_IDENTITY()

			INSERT INTO Usuario(ID_usuario, Nombre, ApellidoP, ApellidoM, Telefono, FechaNacimiento) 
			values 
			(@last_pk_id, @nombre, @ApellidoP, @ApellidoM, @Telefono, @FechaNacimiento)
			
			
			COMMIT TRANSACTION
			return '1'
		END TRY --END TRY
		BEGIN CATCH
			-- Rollback de la transacción si ocurre algún error
			ROLLBACK TRANSACTION;
			
			DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE()
			DECLARE @ErrorSeverity INT = ERROR_SEVERITY()
			DECLARE @ErrorState INT = ERROR_STATE()
	
			DECLARE @ErrorMsg NVARCHAR(4000)
			SET @ErrorMsg = 'Error: ' + @ErrorMessage + ', Severity: ' + CONVERT(NVARCHAR(10), @ErrorSeverity) + ', State: ' + CONVERT(NVARCHAR(10), @ErrorState)
			
			RETURN @ErrorMsg;
		END CATCH
	END --PROC
GO

drop proc up_registrarInvitado
--INICIO PASO 2

--FIN PASO 2

--DUMMYDATA Estos datos estan para pruebas en consultas. 
insert into privilegio
values
	(0, 'INVITADO'),
	(1, 'Administrador'),
	(2, 'Doctor'),
	(3, 'Secretaria'),
	(4, 'Cliente')
GO

--PRUEBAS DE PROCS
declare @fechahoy date 
set @fechahoy =  GETDATE()

EXEC up_registrarInvitado 'hola1234','PP','EMM','MME','565665', @fechahoy

select * from Cuenta

select * from Usuario


DROP DATABASE HappySmile
go
