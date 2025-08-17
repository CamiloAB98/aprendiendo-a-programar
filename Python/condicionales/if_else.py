numero = int(input("Ingresa un número: "))

if numero > 0:
    print("El número es positivo.")
else:
    print("El número es cero o negativo.")
    
contraseña_almacenada="DaltoMaestro"
contraseña_escrita='''DaltoMaestro'''

if contraseña_almacenada == contraseña_escrita:
    print("Contraseña correcta")
else:
    print("Contraseña incorrecta")  