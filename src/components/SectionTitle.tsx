interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle = ({ children, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12 space-y-2">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
