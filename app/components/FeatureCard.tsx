interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps): React.ReactElement {
  return (
    <div
      className="group relative rounded-2xl border
        border-saasy-border bg-saasy-card/50 p-8
        transition-all duration-300
        hover:border-saasy-teal/30 hover:bg-saasy-card-hover"
    >
      <div className="mb-5">{icon}</div>
      <h3
        className="mb-3 font-[family-name:var(--font-sora)]
          text-xl font-semibold text-white"
      >
        {title}
      </h3>
      <p
        className="font-[family-name:var(--font-dm-sans)]
          leading-relaxed text-saasy-muted"
      >
        {description}
      </p>
    </div>
  );
}
