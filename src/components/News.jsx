import { useEffect, useState } from "react";
// Importamos el archivo JSON local con las noticias del cine
import newsData from "../data/news.json";

/**
 * Componente News
 * Usa useEffect para simular la carga de noticias desde una fuente de datos local (JSON).
 * La lista de noticias se guarda en estado con useState y se renderiza dinámicamente.
 */
function News() {
    // Estado que almacenará la lista de noticias
    const [news, setNews] = useState([]);

    /**
     * useEffect se ejecuta una sola vez al montar el componente (array vacío de dependencias).
     * Simula la carga de datos externos (como una llamada a API) cargando el JSON local.
     */
    useEffect(() => {
        // Cargamos los datos del JSON al estado
        setNews(newsData);
    }, []); // El array vacío [] garantiza que solo se ejecuta al montar

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
