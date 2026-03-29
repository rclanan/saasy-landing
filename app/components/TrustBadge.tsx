interface TrustBadgeProps {
  label: string;
  sublabel: string;
}

export function TrustBadge({
  label,
  sublabel,
}: TrustBadgeProps): React.ReactElement {
  return (
    <div className="text-center">
      <div
        className="font-[family-name:var(--font-sora)]
          text-2xl font-bold text-white"
      >
        {label}
      </div>
      <div
        className="mt-1 font-[family-name:var(--font-dm-sans)]
          text-sm text-saasy-muted"
      >
        {sublabel}
      </div>
    </div>
  );
}
