import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              RedeDePalpites
            </h3>
            <p className="text-sm">
              Seus palpites, nossa expertise. O seu portal definitivo para
              notícias, análises e as melhores dicas do mundo das apostas
              esportivas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/palpites"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Palpites (Super Odds)
                </Link>
              </li>
              <li>
                <Link
                  href="/guias"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Guias de Apostas
                </Link>
              </li>
              <li>
                <Link
                  href="/analise-tatica"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Análise Tática
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre-nos"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-e-condicoes"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/jogo-responsavel"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Jogo Responsável
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} RedeDePalpites. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Apostas esportivas devem ser encaradas como uma forma de
            entretenimento. Aposte com responsabilidade. Conteúdo para maiores
            de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
