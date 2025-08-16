lista = ["Lucas Dalto", "Soy Dalto",True,1.85]
tupla=("Lucas Dalto", "Soy Dalto",True,1.85)

lista[3]="maquinola" #Una lista se puede modificar un dato, en una tupla no

#Creando un conjunto (set), se puede reconstruir pero no se puede cambiar elementos de una posición especifica (índice), tampoco permite repetir valores
conjunto = {"Lucas Dalto", "Soy Dalto",True,1.85}

#print(conjunto[3]) ==> no puede acceder al elemento
print(lista[1])

#creando un diccionario 'clave' : 'valor', y se separa por comas
diccionario = {
    'nombre': "Lucas dalto",
    'canal' : "Soy Dalto",
    'esta_emocionado' : True,
    'altura' : 1.84,
    'dato_duplicado' : "Soy Dalto"
}
print(diccionario['altura']+2)