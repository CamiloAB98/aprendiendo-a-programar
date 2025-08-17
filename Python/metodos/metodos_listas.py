#lista = list(["Hola","Dalto",34,True]) #otra forma de crear una lista, con la función list()

lista = ["Hola","Dalto",34,True]
lista2 = [34,65,7,98, False,True]



#resultado = len(lista) #Muestra la cantidad de elementos que tiene la lista 



lista.append("maquinola") #Agrega un elemento al final de la lista

lista.insert(1,"Soy") #Agrega un elemento en la posición que le indiquemos, y corre los demás elementos a la derecha

lista.extend(["Bienvenido","a mi canal"]) #Agrega varios elementos al final de la lista, en este caso se agrega otra lista, de lo contrario no lo toma como varios elementos



lista.pop(0) #Elimina el último elemento de la lista con su INDICE, con numeros negativos cuenta desde el final -1,-2,-3...

lista.remove("Dalto") #Elimina el elemento que le indiquemos, en este caso "Dalto"  

#lista.clear() #Elimina todos los elementos de la lista, dejándola vacía



lista2.sort(reverse=True) #Ordena los elementos de la lista, si son números los ordena de menor a mayor, si son letras las ordena alfabéticamente, no sirve si hay diferentes tipos de datos en la lista. La propiedad reverse=True es para ordenarlos de mayor a menor o al revés alfabéticamente

lista.reverse() #Invierte el orden de los elementos de la lista, no los ordena, solo los invierte


print(lista)