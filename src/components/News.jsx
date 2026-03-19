import { useEffect, useState } from "react";

/**
 * Componente News
 * Usa useEffect + fetch() para cargar noticias desde un archivo JSON local (public/news.json).
 * La lista de noticias se guarda en estado con useState y se renderiza dinámicamente.
 */
function News() {
    // Estado que almacenará la lista de noticias cargadas via fetch
    const [news, setNews] = useState([]);

    /**
     * useEffect se ejecuta una sola vez al montar el componente (array vacío de dependencias).
     * Hace un fetch() a public/news.json simulando el consumo de datos de una API externa.
     */
    useEffect(() => {
        // fetch() al JSON local en la carpeta public (accesible desde la raíz del servidor)
        fetch('/news.json')
            .then((response) => response.json())
            .then((data) => setNews(data));
    }, []); // [] = solo se ejecuta al montar el componente

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>📰 Noticias del Cine</h2>
            <ul style={styles.list}>
                {/* Iteramos sobre las noticias del estado para mostrarlas dinámicamente */}
                {news.map((item) => (
                    <li key={item.id} style={styles.item}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Estilos en línea simples para mantener el componente autocontenido
const styles = {
    container: {
        backgroundColor: "#1a1a2e",
        border: "1px solid #e50914",
        borderRadius: "10px",
        padding: "1.5rem",
        marginTop: "2rem",
    },
    heading: {
        color: "#e50914",
        marginBottom: "1rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
    },
    item: {
        backgroundColor: "#16213e",
        color: "#f0f0f0",
        padding: "0.75rem 1rem",
        borderRadius: "6px",
        borderLeft: "3px solid #e50914",
        fontSize: "0.95rem",
    },
};

export default News;

