// Functional component to render an icon card
export default function IconCard({ id, className, children }) {
  return (
    <section className={`icon-card ${className}`} id={id}>
      {children}
    </section>
  );
}
