// ============================================
// CHAT_THEMES.JS v3 - TODOS OS 11 TEMAS COMPLETOS (PERGUNTAS EXPANDIDAS)
// Importar após chat_main.js
// ============================================

elaboratedChatFlow = [
    // ===== BLOCO UNIVERSAL =====
    { step: 0, section: "TEMA", question: "Qual é o tema da música que você quer criar? 🎵", type: "select", options: [
        { label: "🎂 Aniversário", value: "birthday" },
        { label: "💌 Declaração de amor", value: "love_declaration" },
        { label: "💍 Pedido de casamento", value: "proposal" },
        { label: "👶 Nascimento de filho(a)", value: "birth_child" },
        { label: "👵👶 Nascimento de neto(a)", value: "birth_grandchild" },
        { label: "🌹 Homenagem", value: "tribute" },
        { label: "🤝 Amizade", value: "friendship" },
        { label: "🏢 Música corporativa", value: "corporate" },
        { label: "✨ Oração", value: "prayer" },
        { label: "📢 Anúncio de gravidez", value: "pregnancy_announcement" },
        { label: "🐾 Música para seu Pet", value: "pet" },
        { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.themeId", required: true } },

    // ===== TEMA 1: ANIVERSÁRIO (15 perguntas) =====
    { step: 100, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 101, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 102, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 103, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 104, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 105, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 106, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 107, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 108, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    { step: 109, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "109.5", section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday" && d.step109 === "other", question: "Qual outro estilo musical você tem em mente?", type: "input", placeholder: "Ex: Funk, Eletrônico, Jazz, Samba...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 110, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 111, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 112, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "112.5", section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday" && d.step112 === "other", question: "Qual outro idioma você prefere?", type: "input", placeholder: "Ex.: Francês, Alemão, Holandês...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 113, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 114, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 2: DECLARAÇÃO DE AMOR (13 perguntas) =====
    { step: 200, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Como essa pessoa entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 201, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "De que ponto de vista você quer fazer essa declaração? 🎤", type: "select", options: [
        { label: "💬 Para ela", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 202, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Quando você percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 203, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que mudou em você desde que essa pessoa chegou? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 204, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que você precisa dizer que ainda não disse? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 205, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Descreva uma cena comum e especial de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: 206, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual é um detalhe secreto ou piada interna entre vocês? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 207, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Complete a frase: 'Com você eu me sinto / consigo / aprendi a...' ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    { step: 208, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual estilo musical combina mais com essa declaração? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "208.5", section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration" && d.step208 === "other", question: "Qual outro estilo musical você tem em mente?", type: "input", placeholder: "Ex: Funk, Eletrônico, Jazz, Bossa Nova...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 209, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Que tipo de impacto emocional você quer causar com essa declaração? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 210, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 211, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "211.5", section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration" && d.step211 === "other", question: "Qual outro idioma você prefere?", type: "input", placeholder: "Ex.: Francês, Alemão, Holandês...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 212, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 213, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 3: PEDIDO DE CASAMENTO (11 perguntas) =====
    { step: 300, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 301, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual será o papel dessa música no pedido? 🎶", type: "select", options: [
        { label: "💍 É o pedido em si", value: "is_proposal" }, { label: "🎶 Abre espaço para o pedido", value: "opens_space" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: 302, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual é o momento de certeza de que quer casar com essa pessoa? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: 303, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Quais são 2 promessas reais que você quer fazer? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 304, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Existe algum ritual especial que só vocês fazem? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: 305, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Como você imagina o futuro de vocês dois juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    { step: 306, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
        ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "306.5", section: "CASAMENTO", condition: (d) => d.step0 === "proposal" && d.step306 === "other", question: "Qual outro estilo musical você tem em mente?", type: "input", placeholder: "Ex: Funk, Eletrônico, Jazz, Bossa Nova...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 307, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 308, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 309, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "309.5", section: "CASAMENTO", condition: (d) => d.step0 === "proposal" && d.step309 === "other", question: "Qual outro idioma você prefere?", type: "input", placeholder: "Ex.: Francês, Alemão, Holandês...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 310, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 311, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4: NASCIMENTO DE FILHO(A) - MÚSICA PARA A VIDA (16 perguntas) =====
    { step: 400, section: "FILHO", condition: (d) => d.step0 === "birth_child", question: "Que tipo de música você quer criar? 🎵", type: "select", options: [
        { label: "🎶 Música para a vida", value: "life_song" }, { label: "🌙 Canção de ninar", value: "lullaby" }
    ], metadata: { fieldName: "ai_metadata.subThemeId", required: true } },
    { step: 401, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Quem está falando? 👥", type: "select", options: [
        { label: "👨 Pai", value: "father" }, { label: "👩 Mãe", value: "mother" }, { label: "👨‍👩‍👧 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.creatorRole", required: true } },
    { step: 402, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O bebê já nasceu? 👶", type: "select", options: [
        { label: "✅ Já nasceu", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 403, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual o nome ou apelido? 🎤", type: "input", placeholder: "Como chamam?", minLength: 1, metadata: { fieldName: "recipient.babyName", required: true } },
    { step: 404, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O que você sentiu ao descobrir? 💭", type: "textarea", placeholder: "Emoções naquele momento…", minLength: 15, metadata: { fieldName: "lyricDetails.firstFeeling", required: true } },
    { step: 405, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Conte uma cena marcante dessa fase (teste, ultrassom, abraço, etc.). 🎬", type: "textarea", placeholder: "Teste, ultrassom, abraço…", minLength: 15, metadata: { fieldName: "lyricDetails.markantScene", required: true } },
    { step: 406, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Se fosse uma carta para o futuro dessa criança, o que precisaria dizer? 📜", type: "textarea", placeholder: "O que essa criança deve saber aos 15…", minLength: 20, metadata: { fieldName: "lyricDetails.letterToFuture", required: true } },
    { step: 407, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual é o valor principal que você quer transmitir? ✨", type: "input", placeholder: "Coragem, bondade, autenticidade…", minLength: 3, metadata: { fieldName: "lyricDetails.coreValue", required: true } },
    { step: 408, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual é um detalhe simbólico importante? 🌟", type: "input", placeholder: "Lugar, frase, objeto, música…", minLength: 3, metadata: { fieldName: "lyricDetails.symbolicDetail", required: true } },
    { step: 409, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "409.5", section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step409 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 410, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 411, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 412, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "412.5", section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step412 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 413, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 414, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4B: NASCIMENTO DE FILHO(A) - CANÇÃO DE NINAR (13 perguntas) =====
    { step: 401, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Quem canta? 👥", type: "select", options: [
        { label: "👨 Pai", value: "father" }, { label: "👩 Mãe", value: "mother" }, { label: "👨‍👩‍👧 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.creatorRole", required: true } },
    { step: 402, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Já nasceu? 👶", type: "select", options: [
        { label: "✅ Já", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 403, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Nome do bebê? 🎤", type: "input", placeholder: "Como chamam?", minLength: 1, metadata: { fieldName: "recipient.babyName", required: true } },
    { step: 415, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Apelido carinhoso? 💕", type: "input", placeholder: "Bebê, neném, filho(a)…", minLength: 1, metadata: { fieldName: "recipient.babyNickname", required: true } },
    { step: 416, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual sensação você quer que predomine? 🛡️", type: "select", options: [
        { label: "🛡️ Segurança", value: "security" }, { label: "☮️ Paz", value: "peace" }, { label: "🤗 Aconchego", value: "warmth" }
    ], metadata: { fieldName: "lyricDetails.sensation", required: true } },
    { step: 417, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Que sensação essa música deve trazer na hora de dormir? 😴", type: "textarea", placeholder: "Protegida, tudo bem, amada…", minLength: 15, metadata: { fieldName: "lyricDetails.sleepPurpose", required: true } },
    { step: 418, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual palavra-chave pode ser um mantra de calma na música? 🔄", type: "input", placeholder: "Paz, luz, sonho, amor…", minLength: 2, metadata: { fieldName: "lyricDetails.anchorWord", required: true } },
    { step: 419, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual estilo musical combina mais? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "419.5", section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step419 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 420, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 421, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 422, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "422.5", section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step422 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 423, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 424, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 5: NASCIMENTO DE NETO(A) (14 perguntas) =====
    { step: 500, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Quem vai falar nessa música? 👥", type: "select", options: [
        { label: "👴 Avô", value: "grandfather" }, { label: "👵 Avó", value: "grandmother" }, { label: "👴👵 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.speakerRole", required: true } },
    { step: 501, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Para quem você quer falar principalmente? 👶", type: "select", options: [
        { label: "👶 Para o neto(a)", value: "grandchild" }, { label: "👨‍👧 Para o filho(a)", value: "child" }, { label: "🔄 Para os dois", value: "both" }
    ], metadata: { fieldName: "ai_metadata.primaryAddressee", required: true } },
    { step: 502, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Já nasceu? 👶", type: "select", options: [
        { label: "✅ Já", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 503, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "O que mudou em você com a chegada dessa criança? 🌟", type: "textarea", placeholder: "Orgulho, ternura, recomeço…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 504, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Como é ver seu filho(a) virar pai/mãe? 👨‍👩‍👧", type: "textarea", placeholder: "Como é ver essa nova fase…", minLength: 15, metadata: { fieldName: "lyricDetails.childBecomingParent", required: true } },
    { step: 505, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual mensagem você quer deixar para o futuro? 📜", type: "textarea", placeholder: "O que quer que lembre…", minLength: 15, metadata: { fieldName: "lyricDetails.messageToGrandchild", required: true } },
    { step: 506, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Descreva uma cena que você sonha viver com esse neto(a). 🎬", type: "textarea", placeholder: "Histórias, passear, brincar…", minLength: 15, metadata: { fieldName: "lyricDetails.dreaming", required: true } },
    { step: 507, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual tradição familiar você quer passar? 👨‍👩‍👧‍👦", type: "input", placeholder: "Valores, histórias, hábitos…", minLength: 3, metadata: { fieldName: "lyricDetails.familyTradition", required: true } },
    { step: 508, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "508.5", section: "NETO", condition: (d) => d.step0 === "birth_child" && d.step508 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 509, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 510, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 511, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "511.5", section: "NETO", condition: (d) => d.step0 === "birth_grandchild" && d.step511 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 512, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 513, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 6: HOMENAGEM (14 perguntas) =====
    { step: 600, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Quem você quer homenagear? 👤", type: "input", placeholder: "Meu pai João, minha mãe…", minLength: 3, metadata: { fieldName: "recipient.name", required: true } },
    { step: 601, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Conte a história da relação de vocês 📖", type: "textarea", placeholder: "Como era? O que representou…", minLength: 20, metadata: { fieldName: "lyricDetails.relationshipHistory", required: true } },
    { step: 602, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "De que ponto de vista você quer contar essa homenagem? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre essa pessoa", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 603, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual foi a maior lição que essa pessoa te deixou? 💡", type: "textarea", placeholder: "Ensinamento que mudou a vida…", minLength: 15, metadata: { fieldName: "lyricDetails.biggestLesson", required: true } },
    { step: 604, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual é um sacrifício invisível que essa pessoa fez? 💔", type: "textarea", placeholder: "Algo que talvez ninguém veja…", minLength: 15, metadata: { fieldName: "lyricDetails.invisibleSacrifice", required: true } },
    { step: 605, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Descreva uma cena cotidiana especial 🎬", type: "textarea", placeholder: "Gesto, hábito, cheiro, frase…", minLength: 15, metadata: { fieldName: "lyricDetails.dailyScene", required: true } },
    { step: 606, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Obrigado por… (seja específico) 🙏", type: "textarea", placeholder: "Seja específico…", minLength: 15, metadata: { fieldName: "lyricDetails.gratitude", required: true } },
    { step: 607, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Essa homenagem é para alguém em vida ou em memória? 💫", type: "select", options: [
        { label: "💚 Em vida", value: "alive" }, { label: "💫 Em memória", value: "memory" }
    ], metadata: { fieldName: "ai_metadata.lifeStatus", required: true } },
    { step: 608, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "608.5", section: "HOMENAGEM", condition: (d) => d.step0 === "tribute" && d.step608 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 609, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 610, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 611, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "611.5", section: "HOMENAGEM", condition: (d) => d.step0 === "tribute" && d.step611 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 612, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 613, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 7: AMIZADE (13 perguntas) =====
    { step: 700, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Como se chama essa pessoa? 👤", type: "input", placeholder: "Bruno (Bru), Mariana (Mari)…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 701, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Como essa amizade começou? 📖", type: "textarea", placeholder: "Onde, por que conectaram…", minLength: 15, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 702, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre essa pessoa", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 703, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual foi o momento que provou a amizade entre vocês? 💎", type: "textarea", placeholder: "Pensou: essa pessoa é família…", minLength: 15, metadata: { fieldName: "lyricDetails.proofMoment", required: true } },
    { step: 704, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual foi um desafio que vocês venceram juntos? 💪", type: "textarea", placeholder: "Pequeno ou grande, significativo…", minLength: 15, metadata: { fieldName: "lyricDetails.sharedChallenge", required: true } },
    { step: 705, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual é a piada interna entre vocês? 😄", type: "input", placeholder: "Só vocês entendem…", minLength: 3, metadata: { fieldName: "lyricDetails.insideJoke", required: true } },
    { step: 706, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual qualidade dessa pessoa você mais admira? ⭐", type: "input", placeholder: "Lealdade, coragem, humor…", minLength: 3, metadata: { fieldName: "lyricDetails.admiredQuality", required: true } },
    { step: 707, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Pelo que exatamente vocês estariam brindando nessa amizade? 🥂", type: "textarea", placeholder: "Pelo riso, parceria, recomeços…", minLength: 15, metadata: { fieldName: "lyricDetails.toast", required: true } },
    { step: 708, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "708.5", section: "AMIZADE", condition: (d) => d.step0 === "friendship" && d.step708 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 709, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 710, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 711, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "711.5", section: "FILHO", condition: (d) => d.step0 === "friendship" && d.step711 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 712, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 713, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 8: MÚSICA CORPORATIVA (13 perguntas) =====
    { step: 800, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Para quem é essa música? 👥", type: "select", options: [
        { label: "👥 Time", value: "team" }, { label: "🎤 Público/Clientes", value: "public" }, { label: "🎉 Evento", value: "event" }, { label: "👔 Liderança", value: "leadership" }
    ], metadata: { fieldName: "ai_metadata.audience", required: true } },
    { step: 801, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Quem fala nessa música? 🎤", type: "select", options: [
        { label: "🌱 Fundador(a)", value: "founder" }, { label: "👔 Liderança", value: "leadership" }, { label: "👥 Time", value: "team" }, { label: "🏢 Institucional", value: "institutional" }
    ], metadata: { fieldName: "ai_metadata.narratorRole", required: true } },
    { step: 802, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Como a empresa nasceu? 🌱", type: "textarea", placeholder: "Qual problema, sonho, momento…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 803, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual foi o maior desafio? 💪", type: "textarea", placeholder: "O que quase fez desistir…", minLength: 15, metadata: { fieldName: "lyricDetails.mainChallenge", required: true } },
    { step: 804, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Conte uma cena de bastidor que represente bem a cultura da empresa. 🎬", type: "textarea", placeholder: "Momento autêntico real…", minLength: 15, metadata: { fieldName: "lyricDetails.backstageScene", required: true } },
    { step: 805, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Descreva a cultura em 3 palavras 📝", type: "input", placeholder: "Criatividade, resiliência…", minLength: 3, metadata: { fieldName: "lyricDetails.cultureKeywords", required: true } },
    { step: 806, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual é o principal objetivo dessa música na empresa? 🎯", type: "textarea", placeholder: "Inspirar, celebrar, reforçar…", minLength: 15, metadata: { fieldName: "lyricDetails.desiredImpact", required: true } },
    { step: 807, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Propaganda, jingle, falsidade…", minLength: 15, metadata: { fieldName: "lyricDetails.avoid", required: true } },
    { step: 808, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "808.5", section: "CORPORATIVO", condition: (d) => d.step0 === "corporate" && d.step808 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 809, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 810, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 811, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "811.5", section: "CORPORATIVO", condition: (d) => d.step0 === "corporate" && d.step811 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 812, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 9: ORAÇÃO EM FORMA DE MÚSICA (15 perguntas) =====
    { step: 900, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual é sua religião ou tradição espiritual? 🙏", type: "input", placeholder: "Católica, Evangélica, Espírita…", minLength: 2, metadata: { fieldName: "ai_metadata.tradition", required: true } },
    { step: 901, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Como você se refere ao divino? 🌟", type: "input", placeholder: "Deus, Senhor, Universo…", minLength: 2, metadata: { fieldName: "lyricDetails.divineReference", required: true } },
    { step: 902, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual é a principal intenção dessa oração em forma de música? 💭", type: "select", options: [
        { label: "🙏 Gratidão", value: "gratitude" }, { label: "🌟 Pedido", value: "request" }, { label: "✨ Entrega", value: "surrender" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.prayerIntention", required: true } },
    { step: 903, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Em qual momento de vida você está quando sente essa necessidade? 📖", type: "textarea", placeholder: "Fase, perda, recomeço…", minLength: 15, metadata: { fieldName: "lyricDetails.lifeContext", required: true } },
    { step: 904, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Se resumisse essa oração em uma ideia central, qual seria? ✨", type: "input", placeholder: "Perdão, luz, cura…", minLength: 2, metadata: { fieldName: "lyricDetails.centralIdea", required: true } },
    { step: 905, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Existe alguma referência espiritual que te inspira? (opcional) 📖", type: "textarea", placeholder: "Passagem, salmo, ensinamento…", minLength: 5, metadata: { fieldName: "lyricDetails.spiritualReference", required: false } },
    { step: 906, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual sensação você quer que predomine? 💖", type: "select", options: [
        { label: "☮️ Paz", value: "peace" }, { label: "💪 Força", value: "strength" }, { label: "🌅 Esperança", value: "hope" }, { label: "🔗 Conexão", value: "connection" }
    ], metadata: { fieldName: "lyricDetails.desiredFeeling", required: true } },
    { step: 907, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Suave", value: "calm" }, { label: "📈 Crescente", value: "intense" }, { label: "🔥 Intensa", value: "strong" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 908, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },
    { step: 909, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "909.5", section: "ORAÇÃO", condition: (d) => d.step0 === "prayer" && d.step909 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 910, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 911, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "911.5", section: "ORAÇÃO", condition: (d) => d.step0 === "prayer" && d.step911 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 912, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 10: ANÚNCIO DE GRAVIDEZ (15 perguntas) =====
    { step: 1000, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Para quem você quer fazer esse anúncio? 👥", type: "select", options: [
        { label: "Esposo(a)/parceiro(a)", value: "spouse" }, { label: "Meus pais", value: "parents" }, { label: "Sogros", value: "in_laws" },
        { label: "Família toda", value: "family" }, { label: "Amigos(as)", value: "friends" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.audience", required: true } },
    { step: 1001, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step10 === "other", question: "Para quem especificamente? 🎯", type: "input", placeholder: "Irmãos, chefe, grupo…", minLength: 3, metadata: { fieldName: "ai_metadata.audienceOther", required: true } },
    { step: 1002, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Quem fala nessa música? 🎤", type: "select", options: [
        { label: "Gestante", value: "pregnant" }, { label: "Parceiro(a)", value: "partner" }, { label: "Casal", value: "couple" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.narratorRole", required: true } },
    { step: 1003, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Em qual momento vocês estão? 🤰", type: "select", options: [
        { label: "Descobrimos há pouco", value: "just_discovered" }, { label: "Já contamos pra alguns", value: "told_some" }, { label: "Ainda ninguém sabe", value: "secret" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.pregnancyStage", required: true } },
    { step: 1004, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Conte a história dessa gravidez até aqui (planejado, surpresa, tentativas, etc.). 📖", type: "textarea", placeholder: "Planejado, surpresa, tentativa longa…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1005, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Descreva a cena em que descobriram 🎬", type: "textarea", placeholder: "Cena concreta…", minLength: 15, metadata: { fieldName: "lyricDetails.scene", required: true } },
    { step: 1006, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual reação emocional você quer que a pessoa tenha? 💖", type: "textarea", placeholder: "Surpresa, choro, alegria…", minLength: 15, metadata: { fieldName: "lyricDetails.desiredImpact", required: true } },
    { step: 1007, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Existe um detalhe simbólico importante? 🌟", type: "input", placeholder: "Apelido, data, objeto…", minLength: 3, metadata: { fieldName: "lyricDetails.symbolicDetail", required: true } },
    { step: 1008, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual frase você imagina usando na música para anunciar a gravidez? 💬", type: "input", placeholder: "Em breve seremos três…", minLength: 3, metadata: { fieldName: "lyricDetails.announcementLine", required: true } },
    { step: 1009, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Piadas, religião, exagero…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },
    { step: 1010, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "1010.5", section: "FILGRAVIDEZHO", condition: (d) => d.step0 === "pregnancy_announcement" && d.step1010 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1011, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1012, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1013, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "1013.5", section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step1013 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 1014, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 11: OUTRO - TEMA ABERTO (17 perguntas) =====
    { step: 1100, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que aconteceu? Conte em poucas linhas o que quer expressar em forma de música 💭", type: "textarea", placeholder: "Situação e o que quer expressar…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1101, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Existe uma pessoa central nessa história? 👤", type: "select", options: [
        { label: "✅ Sim", value: "yes" }, { label: "❌ Não", value: "no" }
    ], metadata: { fieldName: "ai_metadata.hasCentralPerson", required: true } },
    { step: 1102, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step11_1 === "yes", question: "Conte a história da relação com essa pessoa 📖", type: "textarea", placeholder: "Como se conheceram…", minLength: 15, metadata: { fieldName: "lyricDetails.relationshipHistory", required: true } },
    { step: 1103, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step11_1 === "yes", question: "Como você a chama? 👤", type: "input", placeholder: "Como chama…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1104, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step11_1 === "yes", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre essa pessoa", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 1105, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Descreva uma cena real que represente bem essa situação. 🎬", type: "textarea", placeholder: "Momento importante…", minLength: 15, metadata: { fieldName: "lyricDetails.scene", required: true } },
    { step: 1106, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que você sentiu? 💭", type: "textarea", placeholder: "Medo e coragem, tristeza e esperança…", minLength: 15, metadata: { fieldName: "lyricDetails.feelings", required: true } },
    { step: 1107, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que você nunca conseguiu dizer? 💬", type: "textarea", placeholder: "Sua verdade sem filtro…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 1108, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual é um detalhe único que não pode faltar nessa música? 🌟", type: "input", placeholder: "Lugar, frase, cheiro…", minLength: 3, metadata: { fieldName: "lyricDetails.uniqueDetail", required: true } },
    { step: 1109, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "1109.5", section: "OUTRO", condition: (d) => d.step0 === "other" && d.step1109 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1110, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1111, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1112, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "1112.5", section: "OUTRO", condition: (d) => d.step0 === "other" && d.step1112 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 1113, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 1114, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 1: PET 
    { step: 1200, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o nome do seu pet?", type: "input", placeholder: "Ex: Nome...", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1201, section: "PET", condition: (d) => d.step0 === "pet", question: "Que animal é seu pet?", type: "input", placeholder: "Ex: Cachorro, gato, etc...", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1202, section: "PET", condition: (d) => d.step0 === "pet", question: "Cite algumas características especiais do seu pet.", type: "textarea", placeholder: "Ex: Personalidade...", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1203, section: "PET", condition: (d) => d.step0 === "pet", question: "Conte algumas memórias marcantes sua com seu pet?", type: "textarea", placeholder: "Ex: Momentos...", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1204, section: "PET", condition: (d) => d.step0 === "pet", question: "Escreva uma mensagem pro seu pet.", type: "textarea", placeholder: "Ex: O que quer dizer...", minLength: 15, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    { step: 1205, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual estilo musical combina? 🎸", type: "select", options: [{ label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" }, { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" }, { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "1205.5", section: "PET", condition: (d) => d.step0 === "pet" && d.step1205 === "other", question: "Qual outro estilo?", type: "input", placeholder: "Ex: Estilo...", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1206, section: "PET", condition: (d) => d.step0 === "pet", question: "Que tipo de impacto emocional você gostaria que a música trouxesse", type: "select", options: [{ label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" }, { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1207, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [{ label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1208, section: "PET", condition: (d) => d.step0 === "pet", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [{ label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" }, { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "1208.5", section: "PET", condition: (d) => d.step0 === "pet" && d.step1208 === "other", question: "Qual outro idioma?", type: "input", placeholder: "Ex: Idioma...", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 1209, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [{ label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" }, { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" }, { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }], metadata: { fieldName: "productionDetails.vocalApproach", required: true } }
];

console.log('✅ CHAT_THEMES_12_TEMAS_COMPLETO.js carregado!');
console.log('✅ Total de steps:', elaboratedChatFlow.length);
console.log('✅ 12 temas completos com hints (adendo contextual)');
console.log('✅ Pronto para uso no seu projeto!');
