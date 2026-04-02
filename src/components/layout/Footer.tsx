export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-elevated/80 px-6 py-10 text-sm text-text-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-text-primary">CineVault</p>
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} CineVault, Inc. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a href="#" className="hover:text-text-primary">
            Help
          </a>
          <a href="#" className="hover:text-text-primary">
            Terms
          </a>
          <a href="#" className="hover:text-text-primary">
            Privacy
          </a>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-accent-primary/20 px-4 py-1 text-text-primary">
            Members save 20%
          </span>
          <button className="rounded-full border border-accent-primary/60 px-4 py-1 text-accent-primary hover:border-accent-soft">
            Join Free
          </button>
        </div>
      </div>
    </footer>
  );
}
