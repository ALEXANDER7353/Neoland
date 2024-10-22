# Introducción a Flexbox

## ¿Qué es Flexbox?

Flexbox, abreviatura de **Flexible Box Layout**, es un modelo de diseño en CSS que permite organizar y distribuir espacio entre los elementos dentro de un contenedor de manera flexible. Flexbox se diseñó para resolver problemas comunes de diseño en CSS, como:

- Alinear elementos vertical y horizontalmente.
- Distribuir elementos en filas y columnas.
- Ajustar los elementos de manera que ocupen el espacio disponible.

## ¿Qué Problemas Resuelve Flexbox?

Flexbox es útil para:

1. **Alinear elementos sin usar floats**. Esto resuelve problemas como el colapso de márgenes y el uso de clearfix.
2. **Centrar elementos fácilmente** tanto horizontal como verticalmente.
3. **Distribuir espacio** entre elementos para que se expandan o contraigan automáticamente según el espacio disponible.
4. **Crear layouts adaptables** sin necesidad de ajustar los anchos o alturas manualmente.

### Ejemplo de Problema Resuelto por Flexbox:

Imagina un menú de navegación donde quieres que los elementos se alineen en el centro, con espacios iguales entre ellos. Antes de Flexbox, lograr esto requería hacks de CSS o usar propiedades adicionales. Con Flexbox, puedes resolverlo con `justify-content`.

## Estructura de Flexbox: Contenedores y Elementos

Flexbox funciona a través de dos tipos de elementos:

1. **Contenedor Flex (Flex Container)**: Es el elemento padre al que se le aplica `display: flex;`. Controla cómo se distribuyen los elementos hijos.
2. **Elementos Flex (Flex Items)**: Son los elementos hijos directos dentro del contenedor. Son flexibles y se ajustan según las propiedades aplicadas en el contenedor o en ellos mismos.

## Aplicando Flexbox al Contenedor Padre

### Propiedades del Contenedor Padre

Estas propiedades controlan el comportamiento y la distribución de los elementos flexibles dentro del contenedor:

1. **display**
   - Para activar Flexbox, se establece `display: flex;` en el contenedor. Esto convierte el elemento en un contenedor flex.
2. **flex-direction**

   - Define la dirección principal en la que se colocan los elementos.
   - Valores comunes:
     - `row`: Coloca los elementos en una fila horizontal.
     - `column`: Coloca los elementos en una columna vertical.
   - **Ejemplo**: Un menú horizontal frente a una lista de productos en una columna.

3. **justify-content**

   - Controla la alineación de los elementos a lo largo del eje principal.
   - Valores comunes:
     - `flex-start`: Alinea los elementos al inicio.
     - `center`: Alinea los elementos en el centro.
     - `flex-end`: Alinea los elementos al final.
     - `space-between`: Distribuye el espacio igual entre los elementos.
     - `space-around`: Añade espacio alrededor de cada elemento.
   - **Ejemplo**: Centrar un menú o distribuir enlaces con espacio uniforme.

4. **align-items**

   - Controla la alineación de los elementos a lo largo del eje perpendicular.
   - Valores comunes:
     - `flex-start`: Alinea los elementos al inicio del contenedor.
     - `center`: Centra los elementos en el contenedor.
     - `flex-end`: Alinea los elementos al final del contenedor.
     - `stretch`: Estira los elementos para llenar el contenedor.
   - **Ejemplo**: Centrando o extendiendo tarjetas de producto a lo largo de un contenedor vertical.

5. **flex-wrap**
   - Permite que los elementos se ajusten en múltiples líneas.
   - Valores:
     - `nowrap`: Mantiene los elementos en una sola línea.
     - `wrap`: Permite que los elementos se envuelvan en varias líneas.
     - `wrap-reverse`: Envuelve los elementos en varias líneas, pero en orden inverso.
   - **Ejemplo**: Crear filas automáticas de artículos en una galería de imágenes.

## Aplicando Flexbox a los Elementos Hijos

### Propiedades del Elemento Hijo

Estas propiedades definen cómo se comportan y distribuyen los elementos individuales dentro del contenedor:

1. **flex-grow**

   - Controla la capacidad de un elemento para crecer en relación con los otros elementos flexibles.
   - Un valor de `1` permite que el elemento crezca para llenar el espacio disponible.
   - **Ejemplo**: Un contenedor con dos elementos donde uno ocupa más espacio proporcionalmente.

2. **flex-shrink**

   - Define cómo se encogen los elementos si el espacio es limitado.
   - Un valor de `0` evita que el elemento se encoja.
   - **Ejemplo**: Mantener un botón de "compra" siempre visible mientras otros elementos se adaptan.

3. **flex-basis**

   - Establece el tamaño inicial de un elemento antes de aplicar `flex-grow` o `flex-shrink`.
   - Puede usarse con unidades absolutas (`px`) o relativas (`%`).
   - **Ejemplo**: Configurar el ancho inicial de tarjetas de productos en una cuadrícula.

4. **order**

   - Cambia el orden en que se muestran los elementos flexibles.
   - Por defecto, todos los elementos tienen `order: 0;`. Valores negativos o positivos alteran el orden.
   - **Ejemplo**: Mostrar un "destacado" antes de otros artículos sin cambiar el HTML.

5. **align-self**
   - Permite que un solo elemento sobrescriba el valor de `align-items` aplicado al contenedor.
   - Los valores son los mismos que `align-items`.
   - **Ejemplo**: Destacar un solo producto al final de una lista.

## Ejemplos de Uso Común

1. **Centrado Vertical y Horizontal**: Usando `align-items: center;` y `justify-content: center;` puedes centrar fácilmente un cuadro en el medio de la pantalla.
2. **Menús Responsivos**: Con Flexbox, los elementos del menú se distribuyen automáticamente, ocupando espacio uniformemente sin importar el número de elementos.
3. **Tarjetas de Producto**: Con `flex-wrap`, puedes ajustar tarjetas para que se acomoden a diferentes anchos de pantalla, creando un diseño adaptativo.

## Prácticas Recomendadas

- Siempre define `flex-direction` y `justify-content` para un control básico del layout.
- Usa `flex-grow` y `flex-shrink` con precaución para evitar distorsiones en el diseño.
- Combina Flexbox con otras técnicas de CSS para crear layouts más complejos.

---

Esta estructura te prepara para explicar los conceptos de Flexbox y cómo aplicar sus propiedades antes de pasar a los ejercicios. Flexbox es poderoso, y esta guía ayudará a que tus estudiantes tengan una comprensión sólida antes de la práctica.
