const Wave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 800" {...props}>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(265, 55%, 30%)" />
        <stop offset="100%" stopColor="hsl(265, 55%, 60%)" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#a)" strokeLinecap="round" strokeWidth={2}>
      <path d="M0 72q600-7 1200 328T2400 72" opacity={0.44} />
      <path d="M0 68q600-3 1200 332T2400 68" opacity={0.57} />
      <path d="M0 64q600 1 1200 336T2400 64" opacity={0.95} />
      <path d="M0 60q600 5 1200 340T2400 60" opacity={0.76} />
      <path d="M0 56q600 9 1200 344T2400 56" opacity={0.3} />
      <path d="M0 52q600 13 1200 348T2400 52" opacity={0.26} />
      <path d="M0 48q600 17 1200 352T2400 48" opacity={0.72} />
      <path d="M0 44q600 21 1200 356T2400 44" opacity={0.53} />
      <path d="M0 40q600 25 1200 360T2400 40" opacity={0.5} />
      <path d="M0 36q600 29 1200 364T2400 36" opacity={0.39} />
      <path d="M0 32q600 33 1200 368T2400 32" opacity={0.67} />
      <path d="M0 28q600 37 1200 372T2400 28" opacity={0.46} />
      <path d="M0 24q600 41 1200 376T2400 24" opacity={0.63} />
      <path d="M0 20q600 45 1200 380T2400 20" opacity={0.8} />
      <path d="M0 16q600 49 1200 384T2400 16" opacity={0.37} />
      <path d="M0 12q600 53 1200 388T2400 12" opacity={0.42} />
      <path d="M0 8q600 57 1200 392T2400 8" opacity={0.36} />
    </g>
  </svg>
);
export default Wave;
