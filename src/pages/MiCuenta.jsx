import { useState } from 'react';
import styles from './MiCuenta.module.css';

/**
 * Página MiCuenta — Perfil simulado del usuario
 *
 * CONCEPTOS DE REACT DEMOSTRADOS:
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. useState: cada campo del formulario tiene su propio estado, lo que lo
 *    convierte en un "formulario controlado" (controlled component). React es
 *    el único que gestiona el valor del input; el DOM no guarda su propio estado.
 *
 * 2. onChange: cada input actualiza su estado correspondiente en tiempo real
 *    mediante el evento onChange. Esto mantiene el estado de React sincronizado
 *    con lo que el usuario escribe.
 *
 * 3. onSubmit: el formulario maneja el envío con e.preventDefault() para evitar
 *    que la página se recargue (comportamiento por defecto del navegador).
 *
 * 4. setTimeout: se usa para mostrar un mensaje de éxito durante 3 segundos y
 *    luego ocultarlo automáticamente, demostrando efectos de tiempo con React.
 *
 * 5. Renderizado condicional: el mensaje de éxito solo aparece cuando
 *    guardado === true.
 *
 * NOTA: Esta página no tiene backend. Todo es simulado con estado local.
 * En una app real, el onSubmit haría una llamada a una API (fetch/axios).
 */

// ─────────────────────────────────────────────────────────────────────────────
// DATOS ESTÁTICOS DE EJEMPLO
// En una app real estos vendrían de una base de datos / API.
// Los definimos fuera del componente para que no se recreen en cada render.
// ─────────────────────────────────────────────────────────────────────────────

/** Historial de compras ficticias del usuario */
const boletosComprados = [
  {
    id: 1,
    pelicula: 'Dune: Part Two',
    fecha: '14 Mar 2026',
    boletos: 2,
    metodo: 'Tarjeta de crédito',
    total: '$220.00',
  },
  {
    id: 2,
    pelicula: 'Deadpool & Wolverine',
    fecha: '01 Mar 2026',
    boletos: 3,
    metodo: 'Pago digital (QR)',
    total: '$330.00',
  },
  {
    id: 3,
    pelicula: 'Intensamente 2',
    fecha: '12 Feb 2026',
    boletos: 4,
    metodo: 'Efectivo',
    total: '$440.00',
  },
];

/** Tarjeta de pago ficticia del usuario */
const tarjetaGuardada = {
  tipo: 'Tarjeta de Crédito',
  banco: 'BBVA',
  ultimosDigitos: '4872',
  vencimiento: '08/28',
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────

function MiCuenta() {
  // ── Estados del formulario (formulario controlado) ──────────────────────────
  // Cada campo del formulario tiene su propio estado.
  // Inicializamos con valores de ejemplo para simular un perfil ya cargado.
  const [nombre, setNombre] = useState('Juan');
  const [apellido, setApellido] = useState('García');
  const [email, setEmail] = useState('juan.garcia@email.com');
  const [fechaNacimiento, setFechaNacimiento] = useState('1998-05-20');
  const [telefono, setTelefono] = useState('5512345678');

  // ── Estado para el mensaje de confirmación ──────────────────────────────────
  // Cuando el usuario guarda cambios, este estado cambia a true, mostrando
  // el mensaje. Después de 3 segundos, setTimeout lo vuelve a false.
  const [guardado, setGuardado] = useState(false);

  /**
   * handleGuardar — maneja el evento onSubmit del formulario.
   *
   * e.preventDefault() evita que el navegador recargue la página,
   * que es el comportamiento predeterminado de un <form> en HTML.
   *
   * setTimeout() es una función de JavaScript (no de React) que ejecuta
   * un callback después de un tiempo en milisegundos. Aquí la usamos para
   * ocultar el mensaje de éxito 3 segundos después de mostrarlo.
   */
  const handleGuardar = (e) => {
    // Prevenir la recarga de la página al enviar el formulario
    e.preventDefault();

    // Mostrar el mensaje de éxito
    setGuardado(true);

    // Ocultar el mensaje después de 3000ms (3 segundos)
    setTimeout(() => {
      setGuardado(false);
    }, 3000);
  };

  return (
    <main className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>Mi Cuenta</h1>

        {/* ── MENSAJE DE ÉXITO (renderizado condicional) ────────────────────
            Solo se muestra cuando guardado === true.
            El operador && en JSX renderiza el elemento derecho solo si
            el valor izquierdo es verdadero (truthy). */}
        {guardado && (
          <div className={styles.successBanner} role="alert">
            ✅ ¡Cambios guardados correctamente!
          </div>
        )}

        {/* ── SECCIÓN 1: FORMULARIO DE PERFIL ───────────────────────────────
            Este es un formulario controlado (controlled form).
            Cada input está vinculado a un estado de React mediante:
            - value={estado}         ← React controla el valor mostrado
            - onChange={actualizador} ← React actualiza el estado al escribir */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>👤</span> Datos Personales
          </h2>

          <form onSubmit={handleGuardar} className={styles.form}>
            {/* Fila de dos columnas: Nombre y Apellido */}
            <div className={styles.formRow}>
              {/* ── INPUT CONTROLADO: Nombre ──
                  value={nombre} → React define el valor del input
                  onChange={...} → Actualiza el estado en cada tecla pulsada */}
              <div className={styles.fieldGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  className={styles.input}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* ── INPUT CONTROLADO: Apellido ── */}
              <div className={styles.fieldGroup}>
                <label htmlFor="apellido" className={styles.label}>
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  className={styles.input}
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Tu apellido"
                  required
                />
              </div>
            </div>

            {/* ── INPUT CONTROLADO: Email ── */}
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            {/* Fila de dos columnas: Fecha y Teléfono */}
            <div className={styles.formRow}>
              {/* ── INPUT CONTROLADO: Fecha de nacimiento ──
                  type="date" genera un selector nativo del navegador */}
              <div className={styles.fieldGroup}>
                <label htmlFor="fechaNacimiento" className={styles.label}>
                  Fecha de nacimiento
                </label>
                <input
                  id="fechaNacimiento"
                  type="date"
                  className={styles.input}
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                />
              </div>

              {/* ── INPUT CONTROLADO: Teléfono ── */}
              <div className={styles.fieldGroup}>
                <label htmlFor="telefono" className={styles.label}>
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className={styles.input}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="10 dígitos"
                />
              </div>
            </div>

            {/* Botón de envío — dispara el evento onSubmit del <form> */}
            <button type="submit" className={styles.saveButton}>
              💾 Guardar Cambios
            </button>
          </form>
        </section>

        {/* ── SECCIÓN 2: MIS BOLETOS COMPRADOS ────────────────────────────────
            Datos estáticos (hardcoded) que simulan el historial de compras.
            En un proyecto real, estos vendrían de una API con useEffect + fetch.
            Se renderiza con .map() — patrón estándar de React para listas.
            La prop key es obligatoria para que React identifique cada elemento. */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🎟️</span> Mis Boletos Comprados
          </h2>

          <div className={styles.ticketList}>
            {boletosComprados.map((compra) => (
              <div key={compra.id} className={styles.ticketCard}>
                {/* Nombre de la película con acento rojo */}
                <p className={styles.ticketMovie}>{compra.pelicula}</p>

                <div className={styles.ticketDetails}>
                  <span>📅 {compra.fecha}</span>
                  <span>🎟️ {compra.boletos} boleto(s)</span>
                  <span>💳 {compra.metodo}</span>
                  <span className={styles.ticketTotal}>{compra.total}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECCIÓN 3: MÉTODOS DE PAGO ───────────────────────────────────────
            Muestra una tarjeta ficticia guardada.
            Los últimos dígitos están enmascarados por seguridad (simulado). */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>💳</span> Métodos de Pago
          </h2>

          <div className={styles.paymentCard}>
            <div className={styles.paymentInfo}>
              <p className={styles.paymentType}>
                {tarjetaGuardada.tipo} — {tarjetaGuardada.banco}
              </p>
              <p className={styles.paymentNumber}>
                **** **** **** {tarjetaGuardada.ultimosDigitos}
              </p>
              <p className={styles.paymentExpiry}>
                Vence: {tarjetaGuardada.vencimiento}
              </p>
            </div>
            {/* Chip decorativo visual */}
            <div className={styles.chipDecoration} aria-hidden="true">
              <div className={styles.chip} />
            </div>
          </div>

          {/* Botón para agregar nueva tarjeta (solo UI, sin funcionalidad) */}
          <button className={styles.addCardButton} type="button">
            + Agregar nueva tarjeta
          </button>
        </section>
      </div>
    </main>
  );
}

export default MiCuenta;
