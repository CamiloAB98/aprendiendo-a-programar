#Diferencia en porcentaje de duración entre curso de Dalto y el mas rapido, el mas lento y el promedio de otros cursos


otros_cursos_min = 2.5
otros_cursos_max = 7
otros_cursos_promedio = 4
dalto_curso = 1.5

#Diferencias de duración
#FORMULA: curso min - dalto curso = diferencia = 1
#Diferencia en porcentaje = (diferencia / curso min) * 100


#Diferencia con el curso más lento
diferencia_porcentaje_min = ((otros_cursos_min - dalto_curso) / otros_cursos_min) * 100
print(f"El curso de Dalto dura: {diferencia_porcentaje_min:.2f}% menos que el curso más corto de otros cursos.")

#Diferencia con el curso más rápido
diferencia_porcentaje_max = ((otros_cursos_max - dalto_curso) / otros_cursos_max) * 100
print(f"El curso de Dalto dura: {diferencia_porcentaje_max:.2f}% menos que el curso más largo de otros cursos.")#el :.2f limita a dos decimales

#Diferencia con el curso promedio
diferencia_porcentaje_promedio = ((otros_cursos_promedio - dalto_curso) / otros_cursos_promedio) * 100
print(f"El curso de Dalto dura: {diferencia_porcentaje_promedio:.2f}%   menos que el curso promedio de otros cursos.")#el :.2f limita a dos decimales
print("------------------------------------------------------------")