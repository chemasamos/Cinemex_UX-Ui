// Vista de detalle de una película
function Detalle() {
  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h2>¿Cómo llegué aquí?</h2>

      <img
        src="link de la imagen"
        alt="Nombre de la película"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>
        AQUÍ VA UNA SINÓPSIS DE LA PELÍCULA
      </p>
    </main>
  )
}

// Exportamos la vista
export default Detalle