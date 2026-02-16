// Esta función recibe dos propiedades: recibir un texto y alguna acción se ejecutará al clickear

function Button({ text, onClick }) {
  return (
    <button
      // Evento de React: se ejecuta cuando el usuario hace clic
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#ff9800",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "8px"
      }}
    >
      {/* Mostramos el texto recibido como prop */}
      {text}
    </button>
  )
}

// Exportamos el componente para poder reutilizarlo
export default Button