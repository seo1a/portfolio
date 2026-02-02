import githubButton from "../assets/github.png";
import emailButton from "../assets/email.png";

export default function Footer() {
  return (
    <footer className="w-full mt-28 mb-12">
      <div className="flex justify-center items-center gap-6">
        {/* GitHub */}
        <a
            href="https://github.com/seo1a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
        >
            <img
                src={githubButton}
                alt="GitHub"
                className="w-10 h-10 lg:w-10 lg:h-10"
            />
        </a>

        {/* Mail */}
        <a
            href="mailto:icehsa171868@gmail.com"
            className="hover:opacity-80 transition"
        >
            <img
                src={emailButton}
                alt="Email"
                className="w-10 h-10 lg:w-10 lg:h-10"
            />
        </a>
      </div>
    </footer>
  );
}
