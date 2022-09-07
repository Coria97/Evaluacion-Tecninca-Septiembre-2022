CREATE TABLE TURNO(
	Id_Turno integer NOT NULL,
    Id_sucursal integer NOT NULL,
    Id_Usuario integer NOT NULL,
	Tipo_estudio varchar(30) NOT NULL,
	Fecha_Creacion date NOT NULL,
	Fecha_Del_Turno date NOT NULL,
    Estado integer NOT NULL,
	CONSTRAINT PK_TURNO PRIMARY KEY(Id_Turno)
);
 
ALTER TABLE TURNO
	ADD CONSTRAINT FK_TURNO_SUCURSAL
	FOREIGN KEY (Id_sucursal)
	REFERENCE SUCURSAL(Id_sucursal);

ALTER TABLE TURNO
	ADD CONSTRAINT FK_TURNO_PACIENTE
	FOREIGN KEY (Id_Usuario)
	REFERENCE PACIENTE(Id_Usuario);

CREATE FUNCTION control_turno_valido() RETURNS TRIGGER AS $$
	BEGIN 
		IF EXISTS(SELECT 1 FROM turno t
                        WHERE (t.Id_Usuario = new.Id_Usuario) AND (t.Fecha_Del_Turno = new.Fecha_Del_Turno) AND (t.Estado != -1))
              raise exception 'Ya tiene un turno a esa hora';
        END IF;
        RETURN new;
    END $$ language 'plpgsql';

CREATE TRIGGER turno_valido
	BEFORE INSERT
	ON TURNO
	FOR EACH ROW
    EXECUTE FUNCTION control_turno_valido();
