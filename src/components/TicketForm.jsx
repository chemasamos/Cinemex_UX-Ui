import { useState } from "react";

/**
 * Componente TicketForm — Formulario Controlado de Compra de Boletos
 *
 * Demuestra:
 * - useState para controlar los campos del formulario (formulario controlado)
 * - onChange en input y select para actualizar el estado en tiempo real
 * - onSubmit para manejar el envío del formulario
 * - Mostrar el resumen de compra en pantalla tras enviar
 *
 * Props:
 * - movie: string — nombre de la película seleccionada
 * - onConfirm: función — callback que se llama cuando la compra se confirma
 */
function TicketForm({ movie, onConfirm }) {
    // Estado para la cantidad de boletos (input controlado)
    const [tickets, setTickets] = useState("");

    // Estado para el método de pago (select controlado)
    const [payment, setPayment] = useState("");

    // Estado para almacenar el resumen de compra después de enviar
    const [resumen, setResumen] = useState(null);

    /**
     * handleSubmit — maneja el evento onSubmit del formulario
     * Previene la recarga de la página, guarda el resumen y llama a onConfirm.
     */
    const handleSubmit = (e) => {
        // Prevenimos el comportamiento por defecto del formulario (recarga de página)
        e.preventDefault();

        // Guardamos el resumen de compra en el estado para mostrarlo
        setResumen({
            pelicula: movie || "Sin seleccionar",
            boletos: tickets,
            pago: payment,
        });

        // Notificamos al componente padre que la compra fue confirmada
        onConfirm();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>🎟️ Compra de Boletos</h2>

            {/* Película seleccionada actualmente */}
            {movie && (
                <p style={styles.movieLabel}>
                    Película seleccionada: <strong style={{ color: "#e50914" }}>{movie}</strong>
                </p>
            )}

            {/* Formulario controlado — cada input está vinculado al estado */}
            <form onSubmit={handleSubmit} style={styles.form}>

                {/* Input controlado: cantidad de boletos — usa onChange */}
                <div style={styles.fieldGroup}>
                    <label style={styles.label}>Cantidad de boletos</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        placeholder="Ej: 2"
                        value={tickets}                              // valor enlazado al estado
                        onChange={(e) => setTickets(e.target.value)} // onChange actualiza el estado
                        required
                        style={styles.input}
                    />
                </div>

                {/* Select controlado: método de pago — usa onChange */}
                <div style={styles.fieldGroup}>
                    <label style={styles.label}>Método de pago</label>
                    <select
                        value={payment}                               // valor enlazado al estado
                        onChange={(e) => setPayment(e.target.value)} // onChange actualiza el estado
                        required
                        style={styles.select}
                    >
                        <option value="">-- Selecciona un método --</option>
                        <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                        <option value="Tarjeta de débito">Tarjeta de débito</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Pago digital (QR)">Pago digital (QR)</option>
                    </select>
                </div>

                {/* Vista previa en tiempo real mientras el usuario llena el formulario */}
                {tickets && payment && (
                    <p style={styles.preview}>
                        Vista previa: {tickets} boleto(s) | {payment}
                    </p>
                )}

                {/* Botón de envío — dispara el evento onSubmit */}
                <button
                    type="submit"
                    disabled={!tickets || !payment || !movie}
                    style={{
                        ...styles.button,
                        opacity: (!tickets || !payment || !movie) ? 0.5 : 1,
                        cursor: (!tickets || !payment || !movie) ? "not-allowed" : "pointer",
                    }}
                >
                    Confirmar Compra
                </button>
            </form>

            {/* Resumen de compra — se muestra solo después de enviar el formulario */}
            {resumen && (
                <div style={styles.resumen}>
                    <h3 style={{ color: "#2ecc71", marginBottom: "0.5rem" }}>
                        ✅ Resumen de tu compra:
                    </h3>
                    <p>🎬 Película: <strong>{resumen.pelicula}</strong></p>
                    <p>🎟️ Boletos: <strong>{resumen.boletos}</strong></p>
                    <p>💳 Método de pago: <strong>{resumen.pago}</strong></p>
                </div>
            )}
        </div>
    );
}

// Estilos en línea del componente
const styles = {
    container: {
        backgroundColor: "#1a1a2e",
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "2rem",
        marginTop: "2rem",
    },
    heading: {
        color: "#f0f0f0",
        marginBottom: "1rem",
        fontSize: "1.3rem",
    },
    movieLabel: {
        color: "#ccc",
        marginBottom: "1rem",
        fontSize: "0.95rem",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    fieldGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
    },
    label: {
        color: "#ccc",
        fontSize: "0.9rem",
        fontWeight: "bold",
    },
    input: {
        padding: "0.6rem 0.8rem",
        borderRadius: "6px",
        border: "1px solid #555",
        backgroundColor: "#16213e",
        color: "#fff",
        fontSize: "1rem",
        outline: "none",
    },
    select: {
        padding: "0.6rem 0.8rem",
        borderRadius: "6px",
        border: "1px solid #555",
        backgroundColor: "#16213e",
        color: "#fff",
        fontSize: "1rem",
        outline: "none",
    },
    preview: {
        color: "#aaa",
        fontSize: "0.85rem",
        fontStyle: "italic",
        backgroundColor: "#16213e",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        border: "1px dashed #555",
    },
    button: {
        backgroundColor: "#e50914",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        transition: "transform 0.1s ease",
        alignSelf: "flex-start",
    },
    resumen: {
        marginTop: "1.5rem",
        backgroundColor: "#0f3460",
        borderRadius: "8px",
        padding: "1.25rem",
        color: "#f0f0f0",
        lineHeight: "1.8",
        border: "1px solid #2ecc71",
    },
};

export default TicketForm;
