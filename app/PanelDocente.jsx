const quickActions = [
  { title: 'Manual de convivencia', description: 'Actualiza normas y flujos institucionales.', icon: '📘' },
  { title: 'Ruta RAI', description: 'Consulta seguimiento y protocolos de atención.', icon: '🧭' },
  { title: 'Planeación', description: 'Organiza actividades, horarios y evaluaciones.', icon: '🗓️' },
];

const stats = [
  { label: 'Estudiantes', value: '1.240' },
  { label: 'Docentes', value: '86' },
  { label: 'Grados', value: '12' },
];

const normativa = [
  'Promover la convivencia escolar respetuosa y segura.',
  'Atender de manera oportuna las alertas y reportes de la comunidad.',
  'Documentar decisiones y compromisos con responsabilidad.',
];

export default function PanelDocente() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>I.E. La Amistad</p>
          <h1 style={styles.title}>Panel docente</h1>
        </div>
        <button style={styles.primaryButton}>+ Nuevo registro</button>
      </header>

      <section style={styles.statsRow}>
        {stats.map((item) => (
          <article key={item.label} style={styles.statCard}>
            <strong style={styles.statValue}>{item.value}</strong>
            <span style={styles.statLabel}>{item.label}</span>
          </article>
        ))}
      </section>

      <main style={styles.grid}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Acciones rápidas</h2>
          <div style={styles.actionList}>
            {quickActions.map((action) => (
              <button key={action.title} style={styles.actionButton} type="button">
                <span style={styles.icon}>{action.icon}</span>
                <span>
                  <strong style={styles.actionTitle}>{action.title}</strong>
                  <small style={styles.actionText}>{action.description}</small>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Normativa y seguimiento</h2>
          <ul style={styles.list}>
            {normativa.map((item) => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    padding: '32px 24px',
    background: 'linear-gradient(180deg, #f4f7ff 0%, #eaf2ff 100%)',
    color: '#152238',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    maxWidth: '1100px',
    margin: '0 auto 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  },
  eyebrow: {
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '12px',
    color: '#4a6cf7',
    fontWeight: 700,
  },
  title: {
    margin: '4px 0 0',
    fontSize: 'clamp(2rem, 6vw, 3rem)',
  },
  primaryButton: {
    border: 'none',
    borderRadius: '12px',
    padding: '12px 18px',
    background: '#173ea8',
    color: '#fff',
    fontWeight: 700,
    cursor: 'pointer',
  },
  statsRow: {
    maxWidth: '1100px',
    margin: '0 auto 24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
  },
  statCard: {
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 12px 30px rgba(23, 62, 168, 0.08)',
    padding: '22px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  statValue: {
    fontSize: '2rem',
    color: '#173ea8',
  },
  statLabel: {
    color: '#4b5d7b',
    fontWeight: 600,
  },
  grid: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 16px 36px rgba(17, 24, 39, 0.08)',
    padding: '22px',
  },
  cardTitle: {
    margin: '0 0 18px',
    fontSize: '1.35rem',
  },
  actionList: {
    display: 'grid',
    gap: '12px',
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #dfe8ff',
    borderRadius: '14px',
    background: '#f7f9ff',
    textAlign: 'left',
    cursor: 'pointer',
  },
  icon: {
    display: 'grid',
    placeItems: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: '#e8eeff',
    fontSize: '22px',
  },
  actionTitle: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '4px',
  },
  actionText: {
    display: 'block',
    color: '#4b5d7b',
    lineHeight: 1.4,
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    display: 'grid',
    gap: '12px',
    lineHeight: 1.6,
    color: '#30415d',
  },
  listItem: {
    paddingLeft: '4px',
  },
};
