SELECT s.Nombre_Sucursal, s.Calle, s.Numero 
FROM SUCURSAL s 
WHERE (s.Id_Sucursal = (SELECT t.Id_Sucursal FROM TURNO t));