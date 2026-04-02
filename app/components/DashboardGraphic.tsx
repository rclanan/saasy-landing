export function DashboardGraphic(): React.ReactElement {
  return (
    <div className="relative mx-auto mt-16 max-w-2xl">
      {/* Outer glow */}
      <div
        className="absolute inset-0 -m-4 rounded-2xl
          bg-gradient-to-br from-saasy-pink/5 to-saasy-orange/5
          blur-xl"
      />
      {/* Card */}
      <div
        className="glow-border relative rounded-2xl
          bg-saasy-card/80 p-6 backdrop-blur-sm sm:p-8"
      >
        {/* Title bar dots */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <div className="h-3 w-3 rounded-full bg-green-500/60" />
          <span
            className="ml-3 font-[family-name:var(--font-poppins)]
              text-xs text-saasy-muted"
          >
            Business Command Center
          </span>
        </div>

        {/* Business status bars */}
        <div className="space-y-4">
          {[
            {
              name: "LLC Formation",
              score: "Complete",
              color: "bg-saasy-pink",
              width: "100%",
            },
            {
              name: "Business License",
              score: "In Progress",
              color: "bg-saasy-orange",
              width: "75%",
            },
            {
              name: "Tax Registration",
              score: "Needs Attention",
              color: "bg-saasy-orange",
              width: "45%",
            },
            {
              name: "Insurance Setup",
              score: "Not Started",
              color: "bg-red-500",
              width: "15%",
            },
          ].map((item) => (
            <div key={item.name} className="group">
              <div
                className="mb-1.5 flex items-center
                  justify-between"
              >
                <span
                  className="font-[family-name:var(--font-poppins)]
                    text-sm text-saasy-text"
                >
                  {item.name}
                </span>
                <span
                  className="font-[family-name:var(--font-poppins)]
                    text-sm font-semibold text-saasy-muted"
                >
                  {item.score}
                </span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full
                  bg-saasy-border"
              >
                <div
                  className={`health-bar h-full rounded-full
                    ${item.color}`}
                  style={
                    {
                      "--bar-width": item.width,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Alert badge */}
        <div
          className="mt-6 inline-flex items-center gap-2
            rounded-lg border border-red-500/20 bg-red-500/10
            px-3 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span
            className="font-[family-name:var(--font-poppins)]
              text-xs text-red-400"
          >
            2 compliance deadlines this week
          </span>
        </div>
      </div>
    </div>
  );
}
