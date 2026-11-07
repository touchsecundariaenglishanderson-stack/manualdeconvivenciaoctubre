# Auditoría comparativa del Manual de Convivencia

## Alcance

Se comparó el bloque `defaultData` del archivo de referencia `documento-comparar.txt` con el Manual integrado en `src/app/PanelDocente.jsx`, y se revisaron las tipologías, los protocolos de la Ruta de Atención Integral, las acciones pedagógicas y las referencias normativas visibles en el panel.

La referencia contiene una propuesta que describe agresiones físicas, verbales, gestuales, relacionales y digitales dentro de la sección Tipo III. Esa descripción es útil como inventario de conductas, pero su ubicación puede dar a entender que toda agresión es Tipo III. Se reemplazó en el Manual activo por una guía contextual de clasificación, sin eliminar las formas de agresión descritas.

## Hallazgos y correcciones aplicadas

1. **Criterios de clasificación:** se alinearon las descripciones con el artículo 40 del Decreto 1965 de 2013. Tipo I comprende situaciones esporádicas sin daño al cuerpo o a la salud; Tipo II requiere repetición/sistematicidad o daño físico o mental sin incapacidad, cuando no se trate de un presunto delito; Tipo III corresponde a hechos que puedan constituir delitos contra la libertad, integridad y formación sexuales u otros delitos previstos en la ley penal.
2. **Escalamiento automático:** se retiraron reglas que convertían automáticamente en Tipo II o III la cantidad de reportes, el consumo o porte de sustancias, el material íntimo o la pertenencia a grupos. La clasificación debe depender de los hechos y de los criterios aplicables; la institución no determina responsabilidad penal.
3. **Debido proceso y justicia restaurativa:** se eliminaron formulaciones que presumían una persona responsable o imponían disculpas, mediación, reconciliación o reparación. Las medidas restaurativas deben ser apropiadas, seguras y voluntarias, y no reemplazan la protección, la Ruta ni el debido proceso.
4. **Referencias penales:** se corrigieron afirmaciones sobre el supuesto artículo 229C y su atribución a la Ley 2080 de 2021. No se presentan esas referencias como fundamento jurídico.
5. **Privacidad y protección:** se precisó la necesidad de evitar la revictimización, proteger la intimidad y acudir a las autoridades competentes según los hechos, sin ordenar separaciones o sanciones automáticas.
6. **Interfaz:** las disposiciones ahora distinguen las situaciones Tipo I, II y III de una orientación cuya clasificación depende de los hechos; ya no las rotulan como faltas leves, moderadas o graves.
7. **Datos guardados:** se añadió una migración selectiva de contenido para actualizar las situaciones y disposiciones revisadas en los datos locales guardados, conservando elementos personalizados no afectados por la auditoría.
8. **Medidas pedagógicas y académicas:** se retiraron acciones humillantes o desproporcionadas (como planas, tareas durante el descanso o disculpas públicas), límites automáticos de calificación ajenos al SIEE y la retención mensual de dispositivos. Se orientan las respuestas hacia apoyos, evaluación individual y medidas proporcionales.
9. **Imágenes manipuladas con IA:** se agregó una conducta expresa contra crear, editar o difundir sin autorización imágenes íntimas, sexualizadas o degradantes de docentes o estudiantes, incluidos los llamados *deepfakes*. Si hay indicios de un delito, se activa la Ruta Tipo III y se remite a las autoridades; si no, se clasifica solo con los criterios legales de Tipo I o II. Tomar una fotografía, por sí solo, no se declara delito ni Tipo III.
10. **Difusión en redes:** se precisó que la valoración contextual del alcance puede considerar el contenido, el canal, el impacto (por ejemplo, seguidores y reproducciones) y la periodicidad o reiteración; la cantidad de vistas o la viralidad no cambia automáticamente la tipología escolar ni determina una sanción.
11. **T-240 de 2018:** se incorporó la decisión, que examinó un caso escolar de difusión de fotografías íntimas en redes y encontró respetado el debido proceso en ese caso concreto. No resolvió sobre *deepfakes* ni permite imponer una sanción automática en casos distintos.
12. **Cuidado de evidencia:** se añadió la indicación de no copiar ni reenviar contenido sexual, en especial si involucra a menores; se debe proteger su identidad y comunicar la situación de manera segura a las autoridades competentes.
13. **Alcance de la investigación:** entre las fuentes oficiales revisadas no se identificó un precedente de la Corte Constitucional que resuelva específicamente la creación con IA de imágenes sexuales falsas de docentes. La redacción incorpora el análisis general de redes de SU-420 de 2019 y la analogía limitada con T-240 de 2018, sin presentarlas como decisiones sobre *deepfakes*.

## Referencias oficiales

- [Decreto 1965 de 2013 — Gestor Normativo de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54537)
- [Ley 1620 de 2013 — Gestor Normativo de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287)
- [Ley 1581 de 2012 — Gestor Normativo de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981)
- [Sentencia T-240 de 2018 — Corte Constitucional](https://www.corteconstitucional.gov.co/relatoria/2018/T-240-18.htm)
- [Sentencia SU-420 de 2019 — Corte Constitucional](https://www.corteconstitucional.gov.co/relatoria/2019/SU420-19.htm)

## Aspectos que requieren validación institucional

Esta auditoría de consistencia no sustituye una revisión jurídica profesional ni la aprobación formal del Consejo Directivo. Antes de adoptar el Manual como norma institucional, la institución debe revisar el texto completo, sus sanciones y procedimientos, confirmar la vigencia de las normas citadas y aprobar las modificaciones mediante el procedimiento que corresponda.

El archivo de referencia se conserva sin cambios para mantener trazabilidad.
