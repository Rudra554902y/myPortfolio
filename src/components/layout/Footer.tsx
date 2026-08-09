export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-custom bg-bg-base/40 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-semibold text-sm font-sans tracking-tight text-text-primary">
            CHANDRA KESHWAR
          </span>
          <span className="text-xs text-text-secondary font-mono uppercase tracking-wider">
            AI / Systems / Software
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Rudra554902y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary hover:text-accent-cobalt transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/chandra-keshwar-jaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary hover:text-accent-cobalt transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kanhaiyajaiswal1812@gmail.com"
            className="text-xs text-text-secondary hover:text-accent-cobalt transition-colors duration-200"
          >
            Email
          </a>
        </div>

        <span className="text-xs text-text-secondary font-mono">
          &copy; {currentYear} &middot; All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
