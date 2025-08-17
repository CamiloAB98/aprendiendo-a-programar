# Ejemplo de uso de if, elif y else en Python

numero = int(input("Ingresa un número: "))
numero2 = int(input("Ingresa otro número: "))

if numero > 0:
    print("El número es positivo.")
    if numero2 > 50:
        print("El segundo número es mayo de 50")
    else:
        print("El segundo número es menor o igual a 50")
elif numero == 0: #podemos poner muchos elif
    print("El número es cero.")
else:
    print("El número es negativo.")