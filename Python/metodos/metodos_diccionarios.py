
#'clave' : "valor" es la forma de crear un diccionario, se pueden agregar tantos pares como se desee

diccionario = {
    'nombre': "Lucas dalto",
    'canal' : "Soy Dalto",
    'esta_emocionado' : True,
    'altura' : 1.84,
    'dato_duplicado' : "Soy Dalto"
}

keys = diccionario.keys() #Devuelve las claves del diccionario

valor_clave = diccionario.get('nombre') #Devuelve el valor de la clave que le indiquemos, en este caso "Lucas dalto", si no existe devuelve None

#diccionario.clear() #Elimina todos los elementos del diccionario, dejándolo vacío

diccionario.pop('altura') #Elimina el elemento que le indiquemos, en este caso 'altura', y devuelve su valor, si no existe lanza una excepción. podemos elimnar más de un elemento a la vez

diccionario_iterable = diccionario.items() #Devuelve una lista de tuplas con las claves y valores del diccionario

valores = diccionario.values() #Devuelve los valores del diccionario



# print(keys)
# print(valores)
print("diccionario: ", diccionario)
print("diccionario iterable: ", diccionario_iterable) #Muestra las claves y valores del diccionario