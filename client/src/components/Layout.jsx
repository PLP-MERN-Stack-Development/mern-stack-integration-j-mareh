import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <header className="flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 shadow-md backdrop-blur-md">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          MyBlog
        </Link>
        <nav className="flex gap-6 text-gray-700 dark:text-gray-300">
          <Link to="/">🏠 Home</Link>
          <Link to="/create">✍️ Create Post</Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>

      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} MyBlog — Built with ❤️ using MERN
      </footer>
    </div>
  );
}
