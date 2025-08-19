frase=input("Introduce una frase para calcular cuanto tardas en decirlo: ")

cantidad_de_palabras=len(frase.split(" "))

print(f"La frase tiene {cantidad_de_palabras} palabras, y tardarías {cantidad_de_palabras *100 // 2/100} segundos en decirla.") # Asumiendo que se tarda 2 segundos por palabra


print(f"Dalto se demoraria {cantidad_de_palabras *100 // 2 * 1.3/100} segundos en decirla, ya que habla un 30% más rápido que el promedio.") #el // no limita a dos decimales, se multiplica y divide por 100 para obtener el resultado en segundos
if cantidad_de_palabras > 120:
    print("¡Demasiadas palabras! Por favor, detente.")