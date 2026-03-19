/**
 * Footer — Réplica del footer de Cinemex
 *
 * Estructura:
 * - Columna izquierda: teléfono + redes sociales
 * - Columna centro: links institucionales
 * - Columna derecha: app badges + logos de socios
 * - Copyright al fondo
 */

/* ─── Iconos SVG inline ─────────────────────────────────────────────── */
const IconFacebook = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const IconX = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const IconInstagram = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
);

const IconYoutube = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a2e" />
    </svg>
);

/* ─── Links institucionales ─────────────────────────────────────────── */
const institutionalLinks = [
    'Sobre Cinemex',
    'Factura Electrónica',
    'Ventas Corporativas',
    'Términos y Condiciones',
    'Política de precios',
    'Política de reembolsos',
    'Atracción de Talento',
    'Aviso de Privacidad',
];

/* ─── Estilos inline ────────────────────────────────────────────────── */
const s = {
    footer: {
        backgroundColor: 'var(--secondary-black)',
        color: 'var(--white)',
        borderTop: '3px solid var(--primary-red)',
        padding: '3rem 2rem 0',
        fontFamily: 'inherit',
    },
    grid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
        paddingBottom: '2.5rem',
    },
    colTitle: {
        fontSize: '0.75rem',
        fontWeight: '700',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--primary-red)',
        marginBottom: '1rem',
    },
    phone: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '1.2rem',
        color: 'var(--white)',
    },
    socialRow: {
        display: 'flex',
        gap: '14px',
        alignItems: 'center',
    },
    socialBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1px solid #444',
        color: 'var(--white)',
        cursor: 'pointer',
        transition: 'background 0.2s, border-color 0.2s',
        background: 'transparent',
        textDecoration: 'none',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.55rem',
    },
    link: {
        color: '#ccc',
        textDecoration: 'none',
        fontSize: '0.88rem',
        transition: 'color 0.2s',
        cursor: 'pointer',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#111',
        border: '1px solid #444',
        borderRadius: '8px',
        padding: '8px 14px',
        marginBottom: '10px',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
        width: 'fit-content',
    },
    badgeLabel: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.2,
    },
    badgeSmall: { fontSize: '0.65rem', color: '#aaa' },
    badgeBig: { fontSize: '0.95rem', fontWeight: 'bold', color: '#fff' },
    partnersRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '1rem',
    },
    partnerChip: {
        border: '1px solid #444',
        borderRadius: '6px',
        padding: '4px 10px',
        fontSize: '0.75rem',
        color: '#bbb',
        letterSpacing: '0.06em',
    },
    copyright: {
        borderTop: '1px solid #333',
        textAlign: 'center',
        padding: '1.2rem 0',
        fontSize: '0.78rem',
        color: '#777',
        maxWidth: '1200px',
        margin: '0 auto',
    },
};

/* ─── Componente ────────────────────────────────────────────────────── */
function Footer() {
    return (
        <footer style={s.footer}>
            <div style={s.grid}>

                {/* ── Columna izquierda: Contacto + Redes ── */}
                <div>
                    <p style={s.colTitle}>Contáctanos</p>
                    <p style={s.phone}>📞 55 5257-6969</p>
                    <p style={s.colTitle}>Síguenos</p>
                    <div style={s.socialRow}>
                        <a href="https://facebook.com/cinemex" target="_blank" rel="noreferrer" style={s.socialBtn} aria-label="Facebook">
                            <IconFacebook />
                        </a>
                        <a href="https://twitter.com/cinemex" target="_blank" rel="noreferrer" style={s.socialBtn} aria-label="X (Twitter)">
                            <IconX />
                        </a>
                        <a href="https://instagram.com/cinemex" target="_blank" rel="noreferrer" style={s.socialBtn} aria-label="Instagram">
                            <IconInstagram />
                        </a>
                        <a href="https://youtube.com/cinemex" target="_blank" rel="noreferrer" style={s.socialBtn} aria-label="YouTube">
                            <IconYoutube />
                        </a>
                    </div>
                </div>

                {/* ── Columna centro: Links institucionales ── */}
                <div>
                    <p style={s.colTitle}>Información</p>
                    <ul style={s.linkList}>
                        {institutionalLinks.map((text) => (
                            <li key={text}>
                                <span style={s.link}>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Columna derecha: App + Socios ── */}
                <div>
                    <p style={s.colTitle}>Descarga la app</p>

                    {/* App Store */}
                    <div style={s.badge}>
                        <span style={{ fontSize: '1.6rem' }}>🍎</span>
                        <div style={s.badgeLabel}>
                            <span style={s.badgeSmall}>Disponible en</span>
                            <span style={s.badgeBig}>App Store</span>
                        </div>
                    </div>

                    {/* Google Play */}
                    <div style={s.badge}>
                        <span style={{ fontSize: '1.6rem' }}>▶️</span>
                        <div style={s.badgeLabel}>
                            <span style={s.badgeSmall}>Disponible en</span>
                            <span style={s.badgeBig}>Google Play</span>
                        </div>
                    </div>

                    <p style={{ ...s.colTitle, marginTop: '1.2rem' }}>Alianzas</p>
                    <div style={s.partnersRow}>
                        {['CANACINE', 'AIBOA', 'ARENA', 'PayPal'].map((name) => (
                            <span key={name} style={s.partnerChip}>{name}</span>
                        ))}
                    </div>
                </div>

            </div>

            {/* ── Copyright ── */}
            <div style={s.copyright}>
                <p style={{ margin: 0 }}>
                    Derechos reservados &copy; Cadena Mexicana de exhibición S.A de CV 2013
                </p>
            </div>
        </footer>
    );
}

export default Footer;
