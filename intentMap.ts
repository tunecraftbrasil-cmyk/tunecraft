// supabase/functions/generate-lyrics/intentMap.ts

export const questionIntentMap: Record<string, string> = {
  // ======================
  // TEMA / META
  // ======================
  "ai_metadata.themeId": [
    "- Define o 'papel' da música (homenagem, aniversário, oração etc).",
    "- Muda o tipo de narrativa: celebração, gratidão, compromisso, fé, institucional.",
    "- Ajusta o nível de reverência vs leveza."
  ].join("\n"),

  "ai_metadata.pov": [
    "- Define a perspectiva da letra: 1ª pessoa (eu), 2ª pessoa (você), 3ª pessoa (ele/ela).",
    "- Afeta intimidade e escolha de pronomes/chamadas no refrão.",
    "- Controla o tom (carta direta x narrativa)."
  ].join("\n"),

  "ai_metadata.lifeStatus": [
    "- Define se a homenagem é em vida ou em memória.",
    "- Afeta a paleta emocional: admiração presente vs saudade/legado.",
    "- Ajuda a evitar temas proibidos (ex: morte) quando 'alive'."
  ].join("\n"),

  // ======================
  // DESTINATÁRIO
  // ======================
  "recipient.name": [
    "- Define o nome que deve aparecer em momentos-chave (verso/refrão/ponte).",
    "- Ajuda a personalizar chamadas e rimas internas com o nome (sem forçar).",
    "- Fortalece a sensação de 'carta cantada'."
  ].join("\n"),

  // ======================
  // CONTEÚDO DA HISTÓRIA
  // ======================
  "lyricDetails.relationshipHistory": [
    "- Fonte de fatos e imagens concretas para os versos (não só sentimento).",
    "- Deve virar cenas específicas (ações, hábitos, frases, jeitos).",
    "- Ajuda a evitar generalidades e clichês."
  ].join("\n"),

  "lyricDetails.biggestLesson": [
    "- Define a mensagem central/ensinamento (pode virar ponte ou refrão).",
    "- Traz densidade emocional e propósito para a letra.",
    "- Conecta admiração com uma ideia 'mãe' recorrente."
  ].join("\n"),

  "lyricDetails.invisibleSacrifice": [
    "- Fornece um detalhe humano forte (pequeno sacrifício = grande amor).",
    "- Ideal para verso 2 ou ponte: revela cuidado silencioso.",
    "- Ajuda a criar emoção sem melodrama."
  ].join("\n"),

  "lyricDetails.dailyScene": [
    "- Gera uma cena do presente (rotina), com detalhes sensoriais.",
    "- Deve virar imagens cantáveis (lugar, hora, gesto, quem está junto).",
    "- Excelente para autenticidade e memória."
  ].join("\n"),

  "lyricDetails.gratitude": [
    "- Lista de 'obrigados' concretos: vira linhas do refrão ou pós-refrão.",
    "- Ajuda a transformar emoção em texto direto, sem ficar genérico.",
    "- Pode servir como âncora de repetição (variações inteligentes)."
  ].join("\n"),

  "lyricDetails.avoid": [
    "- Restrições explícitas: temas/palavras/climas a evitar.",
    "- Deve filtrar metáforas e evitar gatilhos (ex: morte/tristeza)."
  ].join("\n"),

  "lyricDetails.language": [
    "- Define o idioma final e a naturalidade do vocabulário.",
    "- Afeta sonoridade, rimas e escolhas de palavras cantáveis."
  ].join("\n"),

  // ======================
  // MÚSICA / PRODUÇÃO
  // ======================
  "musicStyle.primaryGenre": [
    "- Define o guarda-chuva de gênero (estrutura e estética).",
    "- Afeta padrão de rima, métrica e densidade de linguagem."
  ].join("\n"),

  "musicStyle.primaryGenreOther": [
    "- Referência estética (música/artista): direciona textura, harmonia implícita e vibe.",
    "- Ajuda a calibrar 'quão conversado' vs 'quão poético'.",
    "- Serve de base para o campo suno_payload.style (em inglês)."
  ].join("\n"),

  "musicStyle.mood": [
    "- Define o impacto emocional dominante (emocionar, animar, confortar).",
    "- Afeta escolha de palavras, intensidade, e progressão da letra.",
    "- Determina se o refrão cresce (vertical) ou mantém calma (horizontal)."
  ].join("\n"),

  "musicStyle.tempo": [
    "- Define o 'movimento' percebido: lento, equilibrado, rápido.",
    "- Afeta comprimento de frases (curtas x longas), respiração e pausas.",
    "- Influencia repetição e espaço entre imagens."
  ].join("\n"),

  "productionDetails.vocalApproach": [
    "- Define a sensação de timbre e entrega (suave, potente, íntimo).",
    "- Afeta escolha de palavras (consoantes leves vs ataque), e dinâmica.",
    "- Ajuda a definir suno_payload.style (tipo vocal)."
  ].join("\n"),
};
