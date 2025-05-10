// Conteúdo da página de Notícias: /home/ubuntu/rededepalpites-mvp/src/app/noticias/page.tsx

const article = {
  title: "Mercado da Bola Ferve: Guedes na Mira do Corinthians, Flamengo e Atlético-MG - Quem Leva o Craque?",
  introParagraphs: [
    "O mercado da bola brasileiro está pegando fogo neste meio de temporada de 2025, e um nome em particular tem sido o epicentro de uma verdadeira disputa de gigantes: Roger Guedes. O atacante, que atualmente defende as cores do Al-Rayyan, do Catar, já sinalizou seu desejo de retornar ao futebol brasileiro, e a notícia caiu como uma bomba (positiva!) para as torcidas de Corinthians, Flamengo e Atlético-MG, clubes que aparecem como principais interessados em repatriar o talentoso jogador.",
    "O RedeDePalpites mergulhou fundo nessa história para trazer todos os detalhes, analisar os cenários e, claro, esquentar o debate: qual camisa Roger Guedes vestirá em seu provável retorno ao Brasil?"
  ],
  sections: [
    {
      heading: "O Desejo de Voltar e o Histórico de Sucesso",
      paragraphs: [
        "Roger Guedes nunca escondeu o carinho pelo futebol brasileiro e, após uma passagem lucrativa pelo Catar, a saudade de casa e a vontade de disputar novamente competições de alto nível no Brasil parecem ter pesado. Aos 28 anos (idade em maio de 2025), o atacante está no auge de sua forma física e técnica, o que o torna uma peça extremamente cobiçada.",
        "Seu histórico de sucesso em grandes clubes brasileiros credencia essa disputa. No Palmeiras, despontou como uma grande promessa. No Atlético-MG, teve passagem marcante com gols importantes. E no Corinthians, viveu seu auge, tornando-se ídolo da Fiel com atuações decisivas e faro de gol apurado, sendo peça chave na conquista de títulos."
      ]
    },
    {
      heading: "Corinthians: A Vantagem do Coração e da Identificação",
      paragraphs: [
        "Para muitos, o Corinthians larga com uma certa vantagem emocional na disputa. A identificação de Guedes com o clube e a torcida é inegável. Sua passagem pelo Timão foi marcada por uma sintonia rara, e a Fiel sonha com o retorno do camisa 10 (ou o número que ele consagrou). Além do apelo afetivo, o Corinthians busca um jogador com o perfil de Guedes para qualificar seu setor ofensivo e voltar a brigar por títulos de expressão. A diretoria alvinegra, ciente do desejo da torcida, monitora de perto a situação e pode preparar uma engenharia financeira para viabilizar o negócio.",
        "**Pontos a favor do Corinthians:**",
        "*   Identificação com o clube e a torcida.",
        "*   Protagonismo garantido no time.",
        "*   Pressão da Fiel pela contratação."
      ]
    },
    {
      heading: "Flamengo: O Poderio Financeiro e a Chance de Mais Títulos",
      paragraphs: [
        "O Flamengo, com seu conhecido poderio financeiro e um elenco recheado de estrelas, surge como um forte concorrente. A possibilidade de disputar todos os títulos em um time altamente competitivo e a chance de adicionar mais troféus à sua galeria pessoal podem seduzir Roger Guedes. O Rubro-Negro busca constantemente qualificar seu já estrelado ataque, e a versatilidade de Guedes, que pode atuar pelos lados do campo ou mais centralizado, agrada à comissão técnica. Uma proposta financeira robusta do Flamengo poderia balançar qualquer jogador.",
        "**Pontos a favor do Flamengo:**",
        "*   Alto poder de investimento.",
        "*   Elenco competitivo e chance de brigar por todos os títulos.",
        "*   Estrutura de ponta."
      ]
    },
    {
      heading: "Atlético-MG: Reencontro com a Massa e Projeto Ambicioso",
      paragraphs: [
        "Correndo por fora, mas com suas próprias armas, está o Atlético-MG. Guedes já teve uma passagem positiva pelo Galo antes de ir para a China, e um reencontro com a apaixonada Massa Atleticana não está descartado. O clube mineiro, que também possui um projeto ambicioso e tem investido em grandes nomes, pode ver em Roger Guedes a peça que falta para consolidar um ataque ainda mais poderoso. A figura de um investidor ou um projeto esportivo convincente podem ser os trunfos do Atlético.",
        "**Pontos a favor do Atlético-MG:**",
        "*   Passagem anterior positiva pelo clube.",
        "*   Projeto esportivo ambicioso.",
        "*   Apoio de investidores pode viabilizar a negociação."
      ]
    },
    {
      heading: "O Que Pesa na Decisão de Guedes?",
      paragraphs: [
        "A decisão de Roger Guedes certamente envolverá múltiplos fatores:",
        "*   **Projeto Esportivo:** A chance de ser protagonista e brigar por títulos importantes.",
        "*   **Questões Financeiras:** Salário, luvas e a estabilidade do contrato.",
        "*   **Adaptação Familiar:** O bem-estar da família no retorno ao Brasil.",
        "*   **Relacionamento com Treinador e Elenco:** A perspectiva de trabalhar em um ambiente favorável."
      ]
    },
    {
      heading: "O Impacto no Brasileirão e nas Apostas",
      paragraphs: [
        "A chegada de um jogador do calibre de Roger Guedes a qualquer um desses gigantes certamente mudaria o patamar da equipe e teria um impacto direto na dinâmica do Brasileirão. As odds para títulos e artilharia seriam reavaliadas, e o clube que o contratar ganharia um enorme reforço de mídia e engajamento.",
        "Para os apostadores, a definição do futuro de Guedes é um prato cheio. Acompanhar de perto essa novela pode render boas oportunidades de apostas futuras, seja no desempenho individual do jogador ou nos resultados de sua nova equipe.",
        "O RedeDePalpites continuará de olho em cada capítulo dessa disputa emocionante! E você, torcedor, onde acha que Roger Guedes vai jogar?"
      ]
    }
  ],
  footer: [
    "<strong>Palavras-chave:</strong> Roger Guedes, Mercado da Bola, Transferências Futebol, Corinthians, Flamengo, Atlético-MG, Brasileirão 2025, Futebol Brasileiro, Contratações."
  ]
};

export default function NoticiasPage() {
  return (
    <div className=\"container mx-auto px-4 py-8 text-gray-800 dark:text-gray-200\">
      <article className=\"max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8\">
        <h1 className=\"text-3xl font-bold mb-6 md:text-4xl text-center text-blue-600 dark:text-blue-400\">{article.title}</h1>
        {article.introParagraphs.map((p, i) => <p key={`intro-p-${i}`} className=\"mb-4 text-lg leading-relaxed\" dangerouslySetInnerHTML={{ __html: p }} />)}
        
        {article.sections.map((section, sectionIndex) => (
          <section key={`section-${sectionIndex}`} className=\"mb-6\">
            <h2 className=\"text-2xl font-semibold mb-4 mt-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-blue-500 dark:text-blue-300\">{section.heading}</h2>
            {section.paragraphs.map((p, paraIndex) => (
              <p key={`section-${sectionIndex}-p-${paraIndex}`} className=\"mb-4 text-lg leading-relaxed\" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </section>
        ))}

        <div className=\"mt-10 pt-6 border-t-2 border-blue-500 dark:border-blue-400\">
          {article.footer.map((f, i) => (
            <p key={`footer-p-${i}`} className=\"text-sm text-gray-600 dark:text-gray-400 mb-2\" dangerouslySetInnerHTML={{ __html: f }} />
          ))}
        </div>
      </article>
    </div>
  );
}

