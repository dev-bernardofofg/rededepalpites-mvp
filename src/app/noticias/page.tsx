// Conteúdo atualizado da página de Notícias

const article = {
  title:
    "Senador Defende Proibição Total das Bets e Critica Influência no Futebol Brasileiro",
  introParagraphs: [
    'O debate sobre as apostas esportivas no Brasil ganhou um novo capítulo polêmico na última sexta-feira (16), quando o senador Eduardo Girão (Novo-CE) defendeu abertamente a proibição total das plataformas de apostas online no país. Em pronunciamento contundente no Plenário do Senado, Girão não poupou críticas ao setor e chegou a classificar a situação como uma "tragédia humanitária".',
    '"Nós precisamos barrar essa tragédia humanitária que são as <em>bets</em>. Só poucos ganham: magnatas. E quem perde são milhões", declarou o senador, que revelou ter um projeto de lei para proibir novamente as apostas esportivas no Brasil.',
  ],
  sections: [
    {
      heading: "Críticas ao Endividamento e Vício",
      paragraphs: [
        "O parlamentar responsabilizou diretamente o setor de apostas pelo aumento do endividamento das famílias brasileiras e pela escalada nos casos de dependência em jogos. A preocupação com o impacto social das apostas tem sido recorrente em seus discursos, especialmente após a regulamentação do setor, que começou a operar oficialmente em janeiro deste ano.",
        "Para os apostadores de plantão, a posição do senador representa uma ameaça concreta ao mercado que vem se consolidando no país. Caso propostas como a de Girão ganhem força no Congresso, o cenário regulatório pode mudar drasticamente nos próximos meses.",
      ],
    },
    {
      heading: "Patrocínios no Futebol na Mira",
      paragraphs: [
        'Outro ponto destacado por Girão foi a forte presença das casas de apostas como patrocinadoras do futebol brasileiro. O senador criticou a dependência financeira da CBF e dos clubes em relação às empresas de <em>bets</em>, classificando essa relação como "prejudicial para o esporte".',
        "Em um movimento que chamou atenção, Girão elogiou o técnico Filipe Luís, do Flamengo, por se recusar a participar de campanhas publicitárias de casas de apostas, mesmo treinando um clube patrocinado por essas plataformas.",
      ],
    },
    {
      heading: "Mercado Ilegal de Apostas Movimenta Milhões",
      paragraphs: [
        "Enquanto o debate sobre a regulamentação continua, um mercado paralelo de apostas esportivas está crescendo rapidamente no Brasil. Segundo dados recentes divulgados pelo site Aposta Legal, apenas nos primeiros dois meses de 2025, o Brasil registrou movimentação de aproximadamente R$ 350 milhões em apostas ilegais, com mais de 30 milhões de acessos a sites não regulamentados.",
        'Os protagonistas desse cenário são os chamados "cambistas de bets", intermediários que facilitam apostas para casas não autorizadas e para pessoas impedidas de apostar pelos canais oficiais, como menores de idade. Esses intermediários usam principalmente as redes sociais para captar clientes, oferecendo condições aparentemente mais vantajosas, como prêmios maiores e bônus proibidos pela regulamentação.',
      ],
    },
    {
      heading: "Brasileirão 2025: Rodada 9 Promete Agitar as Apostas",
      paragraphs: [
        "Enquanto o cenário regulatório segue em discussão, o Campeonato Brasileiro 2025 continua a todo vapor, com a nona rodada prometendo fortes emoções para torcedores e apostadores. O fim de semana será marcado por quatro clássicos estaduais de alta rivalidade: Flamengo x Botafogo, Corinthians x Santos, Cruzeiro x Atlético-MG e Bahia x Vitória.",
        'Para os apostadores, esses duelos representam excelentes oportunidades, mas também desafios únicos. Afinal, em clássicos, como diz o velho ditado do futebol, "a tabela não importa" - o que pode gerar resultados surpreendentes e odds atraentes.',
        "A rodada começa neste sábado (17/05) com três partidas e continua no domingo com mais sete jogos. Os destaques ficam por conta dos clássicos estaduais, que devem movimentar significativamente as casas de apostas em todo o país.",
      ],
    },
    {
      heading: "Dicas para Apostadores",
      paragraphs: [
        "Para quem deseja apostar com segurança e dentro da legalidade, o RedeDePalpites recomenda:",
        "1. <strong>Verifique a licença</strong>: Aposte apenas em casas autorizadas pela Secretaria de Prêmios e Apostas do Ministério da Fazenda.",
        "2. <strong>Desconfie de ofertas muito vantajosas</strong>: Se o prêmio parece bom demais para ser verdade, provavelmente é um golpe.",
        '3. <strong>Nunca faça depósitos adicionais para "liberar prêmios"</strong>: Esta é uma tática comum de golpistas.',
        "4. <strong>Evite intermediários</strong>: Aposte diretamente nas plataformas oficiais das casas de apostas.",
        "5. <strong>Denuncie atividades suspeitas</strong>: Contribua para um mercado mais seguro reportando sites e perfis que promovem apostas ilegais.",
        "O RedeDePalpites continuará acompanhando de perto os desdobramentos do mercado de apostas esportivas no Brasil e trazendo as melhores análises para você fazer suas apostas com segurança e conhecimento.",
      ],
    },
  ],
  footer: [
    "<strong>Palavras-chave:</strong> Apostas Esportivas, Regulamentação Bets, Mercado Ilegal Apostas, Brasileirão 2025, Clássicos Estaduais, Dicas Apostadores, Segurança nas Apostas.",
  ],
};

export default function NoticiasPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
      <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6 md:text-4xl text-center text-blue-600 dark:text-blue-400">
          {article.title}
        </h1>
        {article.introParagraphs.map((p, i) => (
          <p
            key={`intro-p-${i}`}
            className="mb-4 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}

        {article.sections.map((section, sectionIndex) => (
          <section key={`section-${sectionIndex}`} className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 mt-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-blue-500 dark:text-blue-300">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, paraIndex) => (
              <p
                key={`section-${sectionIndex}-p-${paraIndex}`}
                className="mb-4 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </section>
        ))}

        <div className="mt-10 pt-6 border-t-2 border-blue-500 dark:border-blue-400">
          {article.footer.map((f, i) => (
            <p
              key={`footer-p-${i}`}
              className="text-sm text-gray-600 dark:text-gray-400 mb-2"
              dangerouslySetInnerHTML={{ __html: f }}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
