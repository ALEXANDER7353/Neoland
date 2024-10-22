Aquí tienes una lista de ejercicios prácticos para que tus alumnos puedan aplicar los conceptos de Flexbox que has enseñado. Cada ejercicio se centra en una propiedad específica para ayudar a reforzar su comprensión.

### Ejercicios de Flexbox

#### **Ejercicio 1: Cambiando la Dirección con `flex-direction`**

- **Objetivo**: Experimentar con la disposición de los elementos en fila y columna.
- **Instrucciones**:
  1. Crea un contenedor flexible y añade cuatro elementos dentro de él.
  2. Usa `flex-direction: row` para alinear los elementos horizontalmente.
  3. Cambia a `flex-direction: column` y observa cómo los elementos se alinean verticalmente.
- **Pregunta**: ¿Cómo afecta `flex-direction` al diseño general de tus elementos?

#### **Ejercicio 2: Espaciado con `justify-content`**

- **Objetivo**: Alinear elementos en el eje principal usando diferentes valores de `justify-content`.
- **Instrucciones**:
  1. Crea un contenedor con cinco elementos flexibles.
  2. Prueba diferentes valores de `justify-content`: `flex-start`, `center`, `flex-end`, `space-between` y `space-around`.
  3. Observa cómo se distribuyen los elementos en el contenedor.
- **Pregunta**: ¿Cuál es la diferencia entre `space-between` y `space-around`?

#### **Ejercicio 3: Alineación Vertical con `align-items`**

- **Objetivo**: Ajustar la alineación de los elementos en el eje perpendicular.
- **Instrucciones**:
  1. Crea un contenedor flexible con tres elementos de diferente altura.
  2. Usa `align-items` con valores como `flex-start`, `center`, `flex-end` y `stretch`.
  3. Ajusta la altura del contenedor para ver cómo cambia la alineación de los elementos.
- **Pregunta**: ¿Qué sucede cuando usas `stretch` y el contenedor tiene una altura fija?

#### **Ejercicio 4: Ajuste de Línea con `flex-wrap`**

- **Objetivo**: Entender cómo `flex-wrap` permite que los elementos se ajusten en varias líneas.
- **Instrucciones**:
  1. Crea un contenedor flexible con siete elementos.
  2. Establece `flex-wrap: nowrap` y observa cómo los elementos se colocan en una sola línea.
  3. Cambia a `flex-wrap: wrap` y observa cómo los elementos se ajustan en varias líneas si es necesario.
  4. Prueba `wrap-reverse` y observa el orden de las líneas.
- **Pregunta**: ¿Qué sucede con los elementos cuando el contenedor tiene un ancho más pequeño?

#### **Ejercicio 5: Control de Crecimiento con `flex-grow`**

- **Objetivo**: Practicar el uso de `flex-grow` para controlar cómo los elementos ocupan el espacio disponible.
- **Instrucciones**:
  1. Crea un contenedor con tres elementos.
  2. Establece `flex-grow` en `1` para el primer y tercer elemento, y en `2` para el segundo.
  3. Observa cómo el segundo elemento ocupa el doble de espacio que los otros.
  4. Ajusta el ancho del contenedor y observa cómo cambian los tamaños de los elementos.
- **Pregunta**: ¿Cómo afecta el cambio de valores en `flex-grow` al diseño cuando el contenedor es más ancho?

#### **Ejercicio 6: Encogimiento con `flex-shrink`**

- **Objetivo**: Ver cómo `flex-shrink` permite que los elementos se encojan cuando el espacio es limitado.
- **Instrucciones**:
  1. Crea un contenedor con cuatro elementos y establece un ancho fijo.
  2. Asigna diferentes valores de `flex-shrink` a cada elemento, por ejemplo, `1`, `2`, `3` y `0`.
  3. Reduce el ancho del contenedor y observa cómo se encogen los elementos.
- **Pregunta**: ¿Qué sucede cuando un elemento tiene `flex-shrink: 0`?

#### **Ejercicio 7: Alineación Individual con `align-self`**

- **Objetivo**: Usar `align-self` para sobrescribir el valor de `align-items` en un elemento específico.
- **Instrucciones**:
  1. Crea un contenedor con cinco elementos y establece `align-items: center`.
  2. Usa `align-self` para alinear el segundo elemento a `flex-end` y el cuarto a `flex-start`.
  3. Observa cómo cambian de posición solo esos elementos.
- **Pregunta**: ¿Cómo cambia la posición de los elementos cuando usan valores diferentes de `align-self`?

#### **Ejercicio 8: Proyecto Final de Flexbox**

- **Objetivo**: Crear un layout completo aplicando los conceptos de Flexbox aprendidos.
- **Instrucciones**:
  1. Crea un contenedor principal para una página web simple (encabezado, contenido, barra lateral y pie de página).
  2. Usa Flexbox para organizar estos elementos de manera responsiva.
  3. Alinea el contenido y ajusta el espacio entre los elementos usando `justify-content` y `align-items`.
  4. Usa `flex-wrap` para hacer que la barra lateral y el contenido se ajusten a una nueva línea en pantallas más pequeñas.
- **Pregunta**: ¿Qué propiedades de Flexbox fueron más útiles para construir este layout? ¿Por qué?

Estos ejercicios guiarán a tus alumnos paso a paso para que experimenten con cada propiedad de Flexbox y comprendan su funcionalidad y aplicaciones prácticas.
