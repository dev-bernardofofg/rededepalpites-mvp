import Link from 'next/link';
import Image from 'next/image'; // Importar o componente Image

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50"> {/* Ajuste no padding e background */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">Bem-vindo ao RedeDePalpites!</h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Seus palpites, nossa expertise. Encontre as melhores análises, notícias e guias sobre apostas esportivas, tudo em um só lugar.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-gray-800">Destaques da Semana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card para Últimas Notícias */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image
                src="/images/stock/futebol_torcida_estadio.jpeg"
                alt="Torcedores vibrando em um estádio de futebol"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Últimas Notícias</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm">Fique por dentro das novidades do mundo esportivo que podem impactar suas apostas.</p>
              <div className="mt-auto">
                {/* <p className="mb-2 text-sm"><Link href="/noticias/noticia1" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Reviravolta no Campeonato!</Link></p>
                <p className="mb-2 text-sm"><Link href="/noticias/noticia2" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Lesão de Estrela Preocupa</Link></p> */}
                <Link href="/noticias" className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm" aria-label="Ver todas as notícias">Ver notícias &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Card para Palpites (Super Odds) */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image
                src="/images/stock/futebol_campo_bola_estadio.webp"
                alt="Bola de futebol no centro do campo de um estádio"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Palpites com SuperOdds</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm">Confira nossos palpites e aproveite as SuperOdds selecionadas para maximizar seus ganhos.</p>
              <div className="mt-auto">
                {/* <p className="mb-2 text-sm"><Link href="/palpites/palpite1" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Final Eletrizante da Copa!</Link></p> */}
                <Link href="/palpites" className="inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm" aria-label="Ver todos os palpites com SuperOdds">Ver palpites &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Card para Guias de Apostas */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image
                src="/images/stock/futebol_goleiro_defesa.jpeg"
                alt="Goleiro fazendo uma defesa espetacular"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Guias de Apostas</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm">Aprenda tudo sobre apostas esportivas com nossos guias completos, do básico ao avançado.</p>
              <div className="mt-auto">
                {/* <p className="mb-2 text-sm"><Link href="/guias/guia-iniciante-apostas" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Guia para Iniciantes</Link></p> */}
                <Link href="/guias" className="inline-block bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-sm" aria-label="Ver todos os guias de apostas">Ver guias &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Card para Análise Tática */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image
                src="/images/stock/futebol_jogador_correndo_campo.webp"
                alt="Jogador de futebol correndo com a bola em um campo iluminado"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Análise Tática</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm">Desvendamos as táticas por trás dos principais jogos e estratégias das equipes.</p>
              <div className="mt-auto">
                {/* <p className="mb-2 text-sm"><Link href="/analise-tatica/analise-tatica-jogo-semana" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">O Segredo da Vitória!</Link></p> */}
                <Link href="/analise-tatica" className="inline-block bg-purple-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200 text-sm" aria-label="Ver todas as análises táticas">Ver análises &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-16 py-10 bg-gray-800 rounded-lg shadow-inner">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Pronto para Mergulhar no Mundo das Apostas?</h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">Explore nossas seções, aprimore suas estratégias e junte-se à comunidade RedeDePalpites!</p>
        <div>
          <Link href="/guias/guia-iniciante-apostas" className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg shadow-md">Comece a Aprender Agora!</Link>
        </div>
      </section>
    </div>
  );
}

