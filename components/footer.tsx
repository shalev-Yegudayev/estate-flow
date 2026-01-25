export function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center md:text-left">
            © 2026 EstateFlow. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-[#2563EB] hover:underline transition-colors">
              About
            </a>
            <span className="text-gray-300 hidden md:inline">•</span>
            <a href="#" className="hover:text-[#2563EB] hover:underline transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-300 hidden md:inline">•</span>
            <a href="#" className="hover:text-[#2563EB] hover:underline transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-300 hidden md:inline">•</span>
            <a href="#" className="hover:text-[#2563EB] hover:underline transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
