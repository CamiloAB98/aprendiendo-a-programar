crudo_otros_canales=5
crudo_canal_dalto=3.5
otros_cursos_promedio = 4
dalto_curso = 1.5

#Porcentaje de material inservible que se reduce en el promedio de los otros cursos y el curso de Dalto

porcentaje_inservible_otros = ((crudo_otros_canales - otros_cursos_promedio) / crudo_otros_canales) * 100
print(f"El curso de Dalto reduce un {porcentaje_inservible_otros:.2f}% del material inservible en comparación con el promedio de otros cursos.") #el :.2f limita a dos decimales


porcentaje_inservible_dalto = ((crudo_canal_dalto - dalto_curso) / crudo_canal_dalto) * 100
print(f"El curso de Dalto reduce un {porcentaje_inservible_dalto:.2f}% del material inservible en comparación con el curso de Dalto.") #el :.2f limita a dos decimales

