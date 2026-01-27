// ============================================
// CHAT_THEMES.JS v2 - TODOS OS 11 TEMAS COMPLETOS
// Importar após chat_main.js
// ============================================

elaboratedChatFlow = [
    // ===== BLOCO UNIVERSAL =====
    { step: 0, section: "TEMA", question: "Qual é o tema da música? 🎵", type: "select", options: [
        { label: "🎂 Aniversário", value: "birthday" }, { label: "💌 Declaração de amor", value: "love_declaration" },
        { label: "💍 Pedido de casamento", value: "proposal" }, { label: "👶 Nascimento de filho(a)", value: "birth_child" },
        { label: "👵👶 Nascimento de neto(a)", value: "birth_grandchild" }, { label: "🌹 Homenagem", value: "tribute" },
        { label: "🤝 Amizade", value: "friendship" }, { label: "🏢 Música corporativa", value: "corporate" },
        { label: "✨ Oração", value: "prayer" }, { label: "📢 Anúncio de gravidez", value: "pregnancy_announcement" },
        { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.themeId", required: true } },

    // ===== TEMA 1: ANIVERSÁRIO (15 perguntas) =====
    { step: 1, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1.1, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1.2, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1.3, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "De que ponto de vista? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 1.4, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1.5, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "3 palavras não-clichês 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 1.6, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Um detalhe secreto 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 1.7, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que mais admira? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 1.8, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Desejo para o futuro? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    { step: 1.9, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 1.10, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1.11, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1.12, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 1.13, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 1.14, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que NÃO quer? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 2: DECLARAÇÃO DE AMOR (13 perguntas) =====
    { step: 2, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Como entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 2.1, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Ponto de vista? 🎤", type: "select", options: [
        { label: "💬 Para", value: "second_person" }, { label: "🌍 Sobre", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 2.2, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Quando percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 2.3, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que mudou em você? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 2.4, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que quer dizer? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 2.5, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Cena simples de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: 2.6, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Detalhe secreto? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 2.7, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Com você eu… ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    { step: 2.8, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 2.9, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 2.10, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 2.11, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 2.12, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 2.13, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Limites? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 3: PEDIDO DE CASAMENTO (11 perguntas) =====
    { step: 3, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 3.1, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Papel da música? 🎶", type: "select", options: [
        { label: "💍 É o pedido", value: "is_proposal" }, { label: "🎶 Abre espaço", value: "opens_space" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: 3.2, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Momento de certeza? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: 3.3, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "2 promessas reais? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 3.4, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Ritual especial? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: 3.5, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Futuro juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    { step: 3.6, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 3.7, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 3.8, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 3.9, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 3.10, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 3.11, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Limites? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4: NASCIMENTO DE FILHO(A) - MÚSICA PARA A VIDA (16 perguntas) =====
    { step: 4, section: "FILHO", condition: (d) => d.step0 === "birth_child", question: "Que tipo de música? 🎵", type: "select", options: [
        { label: "🎶 Música para a vida", value: "life_song" }, { label: "🌙 Canção de ninar", value: "lullaby" }
    ], metadata: { fieldName: "ai_metadata.subThemeId", required: true } },
    { step: 4.1, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Quem está falando? 👥", type: "select", options: [
        { label: "👨 Pai", value: "father" }, { label: "👩 Mãe", value: "mother" }, { label: "👨‍👩‍👧 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.creatorRole", required: true } },
    { step: 4.2, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O bebê já nasceu? 👶", type: "select", options: [
        { label: "✅ Já nasceu", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 4.3, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Nome ou apelido? 🎤", type: "input", placeholder: "Como chamam?", minLength: 1, metadata: { fieldName: "recipient.babyName", required: true } },
    { step: 4.4, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O que sentiu ao descobrir? 💭", type: "textarea", placeholder: "Emoções naquele momento…", minLength: 15, metadata: { fieldName: "lyricDetails.firstFeeling", required: true } },
    { step: 4.5, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Cena marcante? 🎬", type: "textarea", placeholder: "Teste, ultrassom, abraço…", minLength: 15, metadata: { fieldName: "lyricDetails.markantScene", required: true } },
    { step: 4.6, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Carta para o futuro? 📜", type: "textarea", placeholder: "O que essa criança deve saber aos 15…", minLength: 20, metadata: { fieldName: "lyricDetails.letterToFuture", required: true } },
    { step: 4.7, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Valor a transmitir? ✨", type: "input", placeholder: "Coragem, bondade, autenticidade…", minLength: 3, metadata: { fieldName: "lyricDetails.coreValue", required: true } },
    { step: 4.8, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Detalhe simbólico? 🌟", type: "input", placeholder: "Lugar, frase, objeto, música…", minLength: 3, metadata: { fieldName: "lyricDetails.symbolicDetail", required: true } },
    { step: 4.9, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 4.10, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 4.11, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 4.12, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 4.13, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 4.14, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Limites? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4B: NASCIMENTO DE FILHO(A) - CANÇÃO DE NINAR (13 perguntas) =====
    { step: 4.1, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Quem canta? 👥", type: "select", options: [
        { label: "👨 Pai", value: "father" }, { label: "👩 Mãe", value: "mother" }, { label: "👨‍👩‍👧 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.creatorRole", required: true } },
    { step: 4.2, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Já nasceu? 👶", type: "select", options: [
        { label: "✅ Já", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 4.3, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Nome do bebê? 🎤", type: "input", placeholder: "Como chamam?", minLength: 1, metadata: { fieldName: "recipient.babyName", required: true } },
    { step: 4.15, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Apelido carinhoso? 💕", type: "input", placeholder: "Bebê, neném, filho(a)…", minLength: 1, metadata: { fieldName: "recipient.babyNickname", required: true } },
    { step: 4.16, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Sensação desejada? 🛡️", type: "select", options: [
        { label: "🛡️ Segurança", value: "security" }, { label: "☮️ Paz", value: "peace" }, { label: "🤗 Aconchego", value: "warmth" }
    ], metadata: { fieldName: "lyricDetails.sensation", required: true } },
    { step: 4.17, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Função ao dormir? 😴", type: "textarea", placeholder: "Protegida, tudo bem, amada…", minLength: 15, metadata: { fieldName: "lyricDetails.sleepPurpose", required: true } },
    { step: 4.18, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Palavra-âncora? 🔄", type: "input", placeholder: "Paz, luz, sonho, amor…", minLength: 2, metadata: { fieldName: "lyricDetails.anchorWord", required: true } },
    { step: 4.19, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 4.20, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 4.21, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 4.22, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 4.23, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 4.24, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Limites? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 5: NASCIMENTO DE NETO(A) (14 perguntas) =====
    { step: 5, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Quem fala? 👥", type: "select", options: [
        { label: "👴 Avô", value: "grandfather" }, { label: "👵 Avó", value: "grandmother" }, { label: "👴👵 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.speakerRole", required: true } },
    { step: 5.1, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Para quem? 👶", type: "select", options: [
        { label: "👶 Para o neto(a)", value: "grandchild" }, { label: "👨‍👧 Para o filho(a)", value: "child" }, { label: "🔄 Para os dois", value: "both" }
    ], metadata: { fieldName: "ai_metadata.primaryAddressee", required: true } },
    { step: 5.2, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Já nasceu? 👶", type: "select", options: [
        { label: "✅ Já", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 5.3, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "O que mudou em você? 🌟", type: "textarea", placeholder: "Orgulho, ternura, recomeço…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 5.4, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Seu filho(a) virou pai/mãe? 👨‍👩‍👧", type: "textarea", placeholder: "Como é ver essa nova fase…", minLength: 15, metadata: { fieldName: "lyricDetails.childBecomingParent", required: true } },
    { step: 5.5, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Mensagem pro futuro? 📜", type: "textarea", placeholder: "O que quer que lembre…", minLength: 15, metadata: { fieldName: "lyricDetails.messageToGrandchild", required: true } },
    { step: 5.6, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Cena sonhada? 🎬", type: "textarea", placeholder: "Histórias, passear, brincar…", minLength: 15, metadata: { fieldName: "lyricDetails.dreaming", required: true } },
    { step: 5.7, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Tradição familiar? 👨‍👩‍👧‍👦", type: "input", placeholder: "Valores, histórias, hábitos…", minLength: 3, metadata: { fieldName: "lyricDetails.familyTradition", required: true } },
    { step: 5.8, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 5.9, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 5.10, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 5.11, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 5.12, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 5.13, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Limites? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 6: HOMENAGEM (14 perguntas) =====
    { step: 6, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Quem é? 👤", type: "input", placeholder: "Meu pai João, minha mãe…", minLength: 3, metadata: { fieldName: "recipient.name", required: true } },
    { step: 6.1, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "História da relação 📖", type: "textarea", placeholder: "Como era? O que representou…", minLength: 20, metadata: { fieldName: "lyricDetails.relationshipHistory", required: true } },
    { step: 6.2, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Ponto de vista? 🎤", type: "select", options: [
        { label: "💬 Para", value: "second_person" }, { label: "🌍 Sobre", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 6.3, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Maior lição? 💡", type: "textarea", placeholder: "Ensinamento que mudou a vida…", minLength: 15, metadata: { fieldName: "lyricDetails.biggestLesson", required: true } },
    { step: 6.4, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Sacrifício invisível? 💔", type: "textarea", placeholder: "Algo que talvez ninguém veja…", minLength: 15, metadata: { fieldName: "lyricDetails.invisibleSacrifice", required: true } },
    { step: 6.5, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Cena cotidiana? 🎬", type: "textarea", placeholder: "Gesto, hábito, cheiro, frase…", minLength: 15, metadata: { fieldName: "lyricDetails.dailyScene", required: true } },
    { step: 6.6, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Obrigado por… 🙏", type: "textarea", placeholder: "Seja específico…", minLength: 15, metadata: { fieldName: "lyricDetails.gratitude", required: true } },
    { step: 6.7, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Status? 💫", type: "select", options: [
        { label: "💚 Em vida", value: "alive" }, { label: "💫 Em memória", value: "memory" }
    ], metadata: { fieldName: "ai_metadata.lifeStatus", required: true } },
    { step: 6.8, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 6.9, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 6.10, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 6.11, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 6.12, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 6.13, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Limites? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 7: AMIZADE (13 perguntas) =====
    { step: 7, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Como se chama? 👤", type: "input", placeholder: "Bruno (Bru), Mariana (Mari)…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 7.1, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Como começou? 📖", type: "textarea", placeholder: "Onde, por que conectaram…", minLength: 15, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 7.2, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Ponto de vista? 🎤", type: "select", options: [
        { label: "💬 Para", value: "second_person" }, { label: "🌍 Sobre", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 7.3, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Prova de verdade? 💎", type: "textarea", placeholder: "Pensou: essa pessoa é família…", minLength: 15, metadata: { fieldName: "lyricDetails.proofMoment", required: true } },
    { step: 7.4, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Desafio vencido? 💪", type: "textarea", placeholder: "Pequeno ou grande, significativo…", minLength: 15, metadata: { fieldName: "lyricDetails.sharedChallenge", required: true } },
    { step: 7.5, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Piada interna? 😄", type: "input", placeholder: "Só vocês entendem…", minLength: 3, metadata: { fieldName: "lyricDetails.insideJoke", required: true } },
    { step: 7.6, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qualidade admirada? ⭐", type: "input", placeholder: "Lealdade, coragem, humor…", minLength: 3, metadata: { fieldName: "lyricDetails.admiredQuality", required: true } },
    { step: 7.7, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Brinde? 🥂", type: "textarea", placeholder: "Pelo riso, parceria, recomeços…", minLength: 15, metadata: { fieldName: "lyricDetails.toast", required: true } },
    { step: 7.8, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 7.9, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 7.10, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 7.11, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 7.12, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 7.13, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Limites? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 8: MÚSICA CORPORATIVA (13 perguntas) =====
    { step: 8, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Para quem? 👥", type: "select", options: [
        { label: "👥 Time", value: "team" }, { label: "🎤 Público/Clientes", value: "public" }, { label: "🎉 Evento", value: "event" }, { label: "👔 Liderança", value: "leadership" }
    ], metadata: { fieldName: "ai_metadata.audience", required: true } },
    { step: 8.1, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Quem fala? 🎤", type: "select", options: [
        { label: "🌱 Fundador(a)", value: "founder" }, { label: "👔 Liderança", value: "leadership" }, { label: "👥 Time", value: "team" }, { label: "🏢 Institucional", value: "institutional" }
    ], metadata: { fieldName: "ai_metadata.narratorRole", required: true } },
    { step: 8.2, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Como nasceu? 🌱", type: "textarea", placeholder: "Qual problema, sonho, momento…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 8.3, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Maior desafio? 💪", type: "textarea", placeholder: "O que quase fez desistir…", minLength: 15, metadata: { fieldName: "lyricDetails.mainChallenge", required: true } },
    { step: 8.4, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Cena de bastidor? 🎬", type: "textarea", placeholder: "Momento autêntico real…", minLength: 15, metadata: { fieldName: "lyricDetails.backstageScene", required: true } },
    { step: 8.5, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Cultura em 3 palavras 📝", type: "input", placeholder: "Criatividade, resiliência…", minLength: 3, metadata: { fieldName: "lyricDetails.cultureKeywords", required: true } },
    { step: 8.6, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Objetivo da música? 🎯", type: "textarea", placeholder: "Inspirar, celebrar, reforçar…", minLength: 15, metadata: { fieldName: "lyricDetails.desiredImpact", required: true } },
    { step: 8.7, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "O que evitar? 🚫", type: "textarea", placeholder: "Propaganda, jingle, falsidade…", minLength: 15, metadata: { fieldName: "lyricDetails.avoid", required: true } },
    { step: 8.8, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 8.9, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 8.10, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 8.11, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 8.12, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 9: ORAÇÃO EM FORMA DE MÚSICA (15 perguntas) =====
    { step: 9, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Sua religião? 🙏", type: "input", placeholder: "Católica, Evangélica, Espírita…", minLength: 2, metadata: { fieldName: "ai_metadata.tradition", required: true } },
    { step: 9.1, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Como se refere ao divino? 🌟", type: "input", placeholder: "Deus, Senhor, Universo…", minLength: 2, metadata: { fieldName: "lyricDetails.divineReference", required: true } },
    { step: 9.2, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Intenção? 💭", type: "select", options: [
        { label: "🙏 Gratidão", value: "gratitude" }, { label: "🌟 Pedido", value: "request" }, { label: "✨ Entrega", value: "surrender" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.prayerIntention", required: true } },
    { step: 9.3, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Momento de vida? 📖", type: "textarea", placeholder: "Fase, perda, recomeço…", minLength: 15, metadata: { fieldName: "lyricDetails.lifeContext", required: true } },
    { step: 9.4, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Ideia central? ✨", type: "input", placeholder: "Perdão, luz, cura…", minLength: 2, metadata: { fieldName: "lyricDetails.centralIdea", required: true } },
    { step: 9.5, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Referência espiritual? (opt) 📖", type: "textarea", placeholder: "Passagem, salmo, ensinamento…", minLength: 5, metadata: { fieldName: "lyricDetails.spiritualReference", required: false } },
    { step: 9.6, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Sensação desejada? 💖", type: "select", options: [
        { label: "☮️ Paz", value: "peace" }, { label: "💪 Força", value: "strength" }, { label: "🌅 Esperança", value: "hope" }, { label: "🔗 Conexão", value: "connection" }
    ], metadata: { fieldName: "lyricDetails.desiredFeeling", required: true } },
    { step: 9.7, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Suave", value: "calm" }, { label: "📈 Crescente", value: "intense" }, { label: "🔥 Intensa", value: "strong" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 9.8, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Limites? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },
    { step: 9.9, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 9.10, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 9.11, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 9.12, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 10: ANÚNCIO DE GRAVIDEZ (15 perguntas) =====
    { step: 10, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Para quem? 👥", type: "select", options: [
        { label: "Esposo(a)/parceiro(a)", value: "spouse" }, { label: "Meus pais", value: "parents" }, { label: "Sogros", value: "in_laws" },
        { label: "Família toda", value: "family" }, { label: "Amigos(as)", value: "friends" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.audience", required: true } },
    { step: 10.1, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step10 === "other", question: "Para quem? 🎯", type: "input", placeholder: "Irmãos, chefe, grupo…", minLength: 3, metadata: { fieldName: "ai_metadata.audienceOther", required: true } },
    { step: 10.2, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Quem fala? 🎤", type: "select", options: [
        { label: "Gestante", value: "pregnant" }, { label: "Parceiro(a)", value: "partner" }, { label: "Casal", value: "couple" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.narratorRole", required: true } },
    { step: 10.3, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Em qual momento? 🤰", type: "select", options: [
        { label: "Descobrimos há pouco", value: "just_discovered" }, { label: "Já contamos pra alguns", value: "told_some" }, { label: "Ainda ninguém sabe", value: "secret" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.pregnancyStage", required: true } },
    { step: 10.4, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "História até aqui? 📖", type: "textarea", placeholder: "Planejado, surpresa, tentativa longa…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 10.5, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Como descobriram? 🎬", type: "textarea", placeholder: "Cena concreta…", minLength: 15, metadata: { fieldName: "lyricDetails.scene", required: true } },
    { step: 10.6, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Reação desejada? 💖", type: "textarea", placeholder: "Surpresa, choro, alegria…", minLength: 15, metadata: { fieldName: "lyricDetails.desiredImpact", required: true } },
    { step: 10.7, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Detalhe simbólico? 🌟", type: "input", placeholder: "Apelido, data, objeto…", minLength: 3, metadata: { fieldName: "lyricDetails.symbolicDetail", required: true } },
    { step: 10.8, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Frase que entrega? 💬", type: "input", placeholder: "Em breve seremos três…", minLength: 3, metadata: { fieldName: "lyricDetails.announcementLine", required: true } },
    { step: 10.9, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Limites? 🚫", type: "textarea", placeholder: "Piadas, religião, exagero…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },
    { step: 10.10, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 10.11, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 10.12, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 10.13, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 10.14, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 11: OUTRO - TEMA ABERTO (17 perguntas) =====
    { step: 11, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que aconteceu? 💭", type: "textarea", placeholder: "Situação e o que quer expressar…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 11.1, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Pessoa central? 👤", type: "select", options: [
        { label: "✅ Sim", value: "yes" }, { label: "❌ Não", value: "no" }
    ], metadata: { fieldName: "ai_metadata.hasCentralPerson", required: true } },
    { step: 11.2, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step11_1 === "yes", question: "História da relação 📖", type: "textarea", placeholder: "Como se conheceram…", minLength: 15, metadata: { fieldName: "lyricDetails.relationshipHistory", required: true } },
    { step: 11.3, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step11_1 === "yes", question: "Nome/apelido? 👤", type: "input", placeholder: "Como chama…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 11.4, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step11_1 === "yes", question: "Ponto de vista? 🎤", type: "select", options: [
        { label: "💬 Para", value: "second_person" }, { label: "🌍 Sobre", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 11.5, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Cena real 🎬", type: "textarea", placeholder: "Momento importante…", minLength: 15, metadata: { fieldName: "lyricDetails.scene", required: true } },
    { step: 11.6, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que sentiu? 💭", type: "textarea", placeholder: "Medo e coragem, tristeza e esperança…", minLength: 15, metadata: { fieldName: "lyricDetails.feelings", required: true } },
    { step: 11.7, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que nunca disse? 💬", type: "textarea", placeholder: "Sua verdade sem filtro…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 11.8, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Detalhe único? 🌟", type: "input", placeholder: "Lugar, frase, cheiro…", minLength: 3, metadata: { fieldName: "lyricDetails.uniqueDetail", required: true } },
    { step: 11.9, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Estilo? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 11.10, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Impacto? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 11.11, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 11.12, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Língua? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 11.13, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 11.14, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Limites? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];
