# 🎬 Cinemex Clone — Proyecto React

> Proyecto educativo desarrollado con **React + Vite** que replica la experiencia de usuario de Cinemex. Cubre los conceptos fundamentales de React: componentes reutilizables, props, estado con `useState`, eventos, formularios controlados y consumo de datos con `useEffect`.

---

## 📁 Estructura del Proyecto

```
Mi-Primer-Proyectito/
├── public/
│   └── news.json              # JSON local consumido via fetch()
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── header.jsx         # Barra de navegación (reutilizado en toda la app)
│   │   ├── MovieCard.jsx      # Tarjeta de película
│   │   ├── FoodCard.jsx       # Tarjeta de alimento
│   │   ├── PromoCard.jsx      # Tarjeta de promoción
│   │   ├── Button.jsx         # Botón genérico
│   │   ├── News.jsx           # Noticias (useEffect + fetch)
│   │   └── TicketForm.jsx     # Formulario de compra (controlado)
│   ├── pages/                 # Páginas de la aplicación
│   │   ├── Inicio.jsx         # Pantalla de bienvenida
│   │   ├── Cartelera.jsx      # Cartelera de películas (página principal)
│   │   ├── Alimentos.jsx      # Menú de alimentos con carrito
│   │   └── Otros.jsx          # Promociones
│   ├── data/                  # Datos locales (sin hardcodeo en componentes)
│   │   ├── movies.js          # Array de películas
│   │   ├── foods.js           # Array de alimentos
│   │   ├── promotions.js      # Array de promociones
│   │   └── news.json          # JSON de noticias
│   ├── styles/
│   │   └── global.css         # Estilos globales y variables CSS
│   └── App.jsx                # Componente raíz con Router y rutas
```

---

## 🏗️ Arquitectura — Componentes Reutilizables

### División en Componentes

El proyecto separa la interfaz en **componentes de presentación** (components/) y **páginas** (pages/), siguiendo el principio de responsabilidad única:

| Componente | Ubicación | ¿Dónde se reutiliza? |
|---|---|---|
| `Header` | `components/header.jsx` | `App.jsx` — aparece en **todas las páginas** como layout principal |
| `MovieCard` | `components/MovieCard.jsx` | `Cartelera.jsx` — se instancia una vez por cada película (`.map()`) |
| `FoodCard` | `components/FoodCard.jsx` | `Alimentos.jsx` — se instancia una vez por cada alimento (`.map()`) |
| `PromoCard` | `components/PromoCard.jsx` | `Otros.jsx` — se instancia una vez por promoción |
| `TicketForm` | `components/TicketForm.jsx` | `Cartelera.jsx` — se muestra condicionalmente al seleccionar película |
| `News` | `components/News.jsx` | `Cartelera.jsx` — siempre visible al pie de la cartelera |

---

## 📦 Props — Comunicación Entre Componentes

### Props más importantes y su justificación

#### `MovieCard` — `src/components/MovieCard.jsx`
```jsx
const MovieCard = ({ title, posterUrl, genre, duration, rating, onSelect, isSelected }) => { ... }
```
| Prop | Tipo | Por qué es importante |
|---|---|---|
| `onSelect` | `function` | Permite al **hijo notificar al padre** (Cartelera) qué película fue clickeada. Es el patrón fundamental de comunicación hijo→padre en React. |
| `isSelected` | `boolean` | Flujo de datos **padre→hijo**: el padre controla cuál tarjeta está activa y pasa ese estado hacia abajo para que la tarjeta se estilice diferente (borde rojo, escala, insignia). |

#### `TicketForm` — `src/components/TicketForm.jsx`
```jsx
function TicketForm({ movie, onConfirm }) { ... }
```
| Prop | Tipo | Por qué es importante |
|---|---|---|
| `movie` | `string` | Recibe el nombre de la película elegida desde el padre para mostrarlo en el formulario y en el resumen de compra. |
| `onConfirm` | `function` | Callback que el hijo ejecuta tras el `onSubmit`, permitiendo al padre (`Cartelera`) actualizar su propio estado (`confirmed = true`). |

#### `FoodCard` — `src/components/FoodCard.jsx`
```jsx
const FoodCard = ({ name, imageUrl, category, price, onAdd }) => { ... }
```
| Prop | Tipo | Por qué es importante |
|---|---|---|
| `onAdd` | `function` | Callback que actualiza el **estado carrito** en `Alimentos.jsx` cuando el usuario hace click en "Agregar". |

---

## 🎨 Diseño, Layout y Responsividad

### Flexbox y Grid

- **`Cartelera.jsx`** usa CSS Grid (`styles.grid`) para mostrar las tarjetas de películas en un layout de múltiples columnas responsivo.
- **`Alimentos.jsx`** usa CSS Grid (`styles.grid`) para organizar las tarjetas de comida por categorías.
- **`header.jsx`** usa **Flexbox** (`display: flex`, `justifyContent: 'space-between'`) para alinear el logo y la navegación.
- **`TicketForm.jsx`** usa Flexbox con `flexDirection: 'column'` para apilar los campos del formulario verticalmente.

### Diseño Responsivo

El proyecto utiliza variables CSS globales (`--primary-red`, `--secondary-black`, `--white`) definidas en `styles/global.css` y una clase contenedora `.container` con `max-width` y `margin: auto` que adapta el contenido a diferentes tamaños de pantalla.

### Secciones Adicionales

- ✅ **Alimentos** (`/alimentos`): Página completa con menú de comida agrupado por categorías y carrito de compras.
- ✅ **Otros / Promociones** (`/otros`): Sección de promociones con `PromoCard`.

### Coherencia Visual

Todo el proyecto sigue la paleta de colores de Cinemex: **rojo `#e50914`** como color primario, **negro profundo** (`#1a1a2e`, `#16213e`) como fondos, y **blanco `#f0f0f0`** para el texto. Se mantiene la misma tipografía y espaciado en todos los componentes.

---

## ⚡ Estado con `useState`

### Los 2+ Estados Funcionales Implementados

#### Estado 1: `selectedMovie` — `src/pages/Cartelera.jsx` (línea 20)
```jsx
const [selectedMovie, setSelectedMovie] = useState(null);
```
- **Dónde está**: `Cartelera.jsx`
- **Qué hace**: Almacena el objeto de la película actualmente seleccionada por el usuario. Empieza en `null` (ninguna película elegida). Al hacer click en una `MovieCard`, se actualiza con el objeto completo de la película.
- **Renderizado dinámico**: Controla la aparición/desaparición del `TicketForm`, el mensaje de selección activa, y el estilo de cada `MovieCard` (borde rojo + escala).

#### Estado 2: `confirmed` — `src/pages/Cartelera.jsx` (línea 23)
```jsx
const [confirmed, setConfirmed] = useState(false);
```
- **Dónde está**: `Cartelera.jsx`
- **Qué hace**: Booleano que indica si el usuario confirmó la compra de boletos. Pasa a `true` cuando `TicketForm` ejecuta el callback `onConfirm`.
- **Renderizado dinámico**: Al ser `true`, aparece en pantalla el mensaje de confirmación "✅ ¡Compra confirmada con éxito!".

#### Estado 3: `carrito` — `src/pages/Alimentos.jsx` (línea 9)
```jsx
const [carrito, setCarrito] = useState([]);
```
- **Dónde está**: `Alimentos.jsx`
- **Qué hace**: **Arreglo de objetos** que almacena los productos que el usuario agrega. Cada click en "Agregar" hace un spread del array anterior más el nuevo elemento (inmutabilidad).
- **Renderizado dinámico**: El contador del carrito (`carrito.length`) y el total calculado se muestran en tiempo real.

#### Estados internos en `TicketForm` — `src/components/TicketForm.jsx` (líneas 18-24)
```jsx
const [tickets, setTickets] = useState("");    // número de boletos
const [payment, setPayment] = useState("");    // método de pago seleccionado
const [resumen, setResumen] = useState(null);  // objeto resumen tras el envío
```
- `resumen` es un **objeto** con `{ pelicula, boletos, pago }` que se muestra al enviar el formulario.

### Evidencia de Renderizado Dinámico en Pantalla

| Acción del usuario | Cambio visible en pantalla |
|---|---|
| Click en una `MovieCard` | Aparece el `TicketForm` + mensaje con el título de la película + borde rojo en la tarjeta |
| Llenar los campos del formulario | Vista previa en tiempo real: "Vista previa: 2 boleto(s) \| Tarjeta de crédito" |
| Submit del formulario | Resumen de compra con película, boletos y método de pago |
| Click en "Confirmar Compra" | Banner verde "✅ ¡Compra confirmada con éxito!" |
| Click en "Agregar" en Alimentos | Contador del carrito y total se actualizan inmediatamente |

---

## 🖱️ Eventos y Formularios

### Eventos Implementados

| Evento | Componente | Archivo | Qué hace |
|---|---|---|---|
| `onClick` | Botón "Seleccionar" | `MovieCard.jsx` (línea 44) | Llama a `onSelect`, actualizando `selectedMovie` en `Cartelera` |
| `onClick` | Botón "Agregar" | `FoodCard.jsx` (línea 23) | Llama a `onAdd`, agrega el producto al estado `carrito` en `Alimentos` |
| `onChange` | `<input type="number">` | `TicketForm.jsx` (línea 68) | Actualiza `tickets` en tiempo real: `setTickets(e.target.value)` |
| `onChange` | `<select>` | `TicketForm.jsx` (línea 79) | Actualiza `payment` en tiempo real: `setPayment(e.target.value)` |
| `onSubmit` | `<form>` | `TicketForm.jsx` (línea 57) | Ejecuta `handleSubmit`, previene recarga y genera el resumen |

### Formulario Controlado

`TicketForm` es un **formulario completamente controlado**: cada campo de entrada está enlazado bidireccionalmente al estado de React.

```jsx
// El valor del input SIEMPRE refleja el estado, no el DOM
<input
  value={tickets}                              // ← estado controla el valor
  onChange={(e) => setTickets(e.target.value)} // ← DOM notifica cambios al estado
/>
```

Esto significa que React es la **única fuente de verdad** del formulario en todo momento.

### Uso de `preventDefault()`

En `TicketForm.jsx` (línea 32), el handler `handleSubmit` previene el comportamiento por defecto del navegador (recargar la página):

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // ← evita la recarga de la página al enviar el formulario
  setResumen({ pelicula: movie, boletos: tickets, pago: payment });
  onConfirm();
};
```

### Visualización Dinámica de la Información Ingresada

El formulario muestra **dos capas de feedback visual en tiempo real**:

1. **Vista previa mientras el usuario llena los campos** (antes de enviar):
   ```jsx
   {tickets && payment && (
     <p>Vista previa: {tickets} boleto(s) | {payment}</p>
   )}
   ```

2. **Resumen completo después de enviar** (objeto `resumen` en estado):
   ```jsx
   {resumen && (
     <div>
       <p>🎬 Película: <strong>{resumen.pelicula}</strong></p>
       <p>🎟️ Boletos: <strong>{resumen.boletos}</strong></p>
       <p>💳 Método de pago: <strong>{resumen.pago}</strong></p>
     </div>
   )}
   ```

---

## 🌐 Consumo de Datos Dinámicos

### `useEffect` + `fetch` — `src/components/News.jsx`

```jsx
import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/news.json')              // fetch a JSON local en carpeta public/
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []); // [] = solo se ejecuta al montar el componente (una vez)

  return (
    <ul>
      {news.map((item) => (         // renderizado dinámico desde el estado
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

- **`useEffect`** con dependencias vacías `[]` garantiza que el fetch solo ocurre **al montar el componente**, no en cada re-render.
- Los datos vienen de `/news.json` (carpeta `public/`), accesible como si fuera una URL de API externa.
- El resultado se guarda en estado con `setNews(data)` y se renderiza dinámicamente con `.map()`.

### Datos sin Hardcodeo — `src/data/`

En lugar de escribir datos directamente en los componentes, todos los datos están externalizados en módulos de la carpeta `src/data/`:

| Archivo | Datos que contiene | Consumido en |
|---|---|---|
| `movies.js` | Array de 4 películas con título, poster, género, duración, clasificación | `Cartelera.jsx` |
| `foods.js` | Array de alimentos con nombre, imagen, categoría y precio | `Alimentos.jsx` |
| `promotions.js` | Array de promociones | `Otros.jsx` |
| `news.json` | Array de noticias con id y título | `News.jsx` via `fetch()` |

```js
// Ejemplo: Cartelera.jsx importa las películas desde el módulo de datos
import { movies } from '../data/movies';

// Luego las renderiza dinámicamente con .map()
{movies.map((movie) => (
  <MovieCard key={movie.id} {...movie} onSelect={...} isSelected={...} />
))}
```

---

## 🚀 Cómo Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

---

## 🧱 Tecnologías Utilizadas

- **React 18** con Hooks (`useState`, `useEffect`)
- **Vite** como bundler y servidor de desarrollo
- **React Router DOM v6** para navegación SPA
- **CSS Modules** para estilos encapsulados por componente
- **CSS Variables** para consistencia visual global
