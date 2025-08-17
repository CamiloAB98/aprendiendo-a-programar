cadena1 = "Hola soy Dalto"
cadena2 = "Bienvenido maquinola"

#resultado = dir(cadena1) # Muestra los métodos disponibles para cadenas

#Estructura de un metodo: 

# METODO.DATO(PARAMETRO)



#resultado = cadena1.upper()   Convierte la cadena a mayúsculas

#resultado += cadena2.lower()  # Convierte la cadena a minúsculas y la concatena

#resultado = cadena1.capitalize()  # primera letra en mayuscula, convierte todo en minuscula y la primera la deja en mayuscula



#resultado = cadena1.find("Hola")  # Busca la subcadena "Hola" y devuelve su índice, si no se encuentra devuelve -1

#resultado = cadena1.index("Dalto")  # Busca la subcadena "Dalto" y devuelve su índice, si no se encuentra lanza una excepsion



#resultado = cadena.isnumeric()  # Verifica si la cadena es numérica, devuelve True o False

#resultado = cadena1.isalpha()  # Verifica si la cadena contiene solo letras, devuelve True o False



#resultado = cadena1.count("o")  # Cuenta cuántas veces aparece la letra "o" en la cadena

#resultado = cadena1.__len__()  #Devuelve la longitud de la cadena 
# resultado = len(cadena1)  # Otra forma de obtener la longitud de la cadena



#resultado = cadena1.startswith("Hola")  # Verifica si la cadena comienza con "Hola", devuelve True o False

#resultado = cadena1.endswith("Dalto")  # Verifica si la cadena termina con "Dalto", devuelve True o False



#resultado += cadena1.replace("Dalto", "Maquinola")  # Reemplaza "Dalto" por "Maquinola" en la cadena si se encuentra en la cadena original

resultado = cadena1.split(" ")  # Divide la cadena en una lista de palabras usando el espacio como separador

print(resultado)  
