a=5
b=4
c=a+b

#variable con camelCase
nombre="Lucas"

#la recomendacion en python es snake
nombre_completo="snake case"
c+=1
total="Hola "+ nombre +" dorsal "+ str(c)

total2= f"Hola {nombre} dorsal {c}" 
# la f{} convierte todo a string
del total #Para eleiminar una variabe, se debe poner antes de usar la variable total
print(total2)

print("sal" in total2) #Muestra 'true' porque la palabra sal se encuentra dentro de la variable total2, se puede usar en sentido contrario con 'not in' 
