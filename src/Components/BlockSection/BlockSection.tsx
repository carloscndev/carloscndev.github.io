import './BlockSection.css'

interface BlockSectionProps {
  title: string;
  children: React.ReactNode;
}

const BlockSection = ({ title, children }: BlockSectionProps) => {
  return (
    <section className="block-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default BlockSection;