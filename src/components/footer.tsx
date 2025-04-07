const Footer = () => {
  return (
    <footer className="bg-black/[0.96] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Bruno Souza Vieira.
          </p>
          <p className="text-white/50 text-xs">
            Feito com React e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 