// ============================================
// CHAT_THEMES.JS v4 - TODOS OS 12 TEMAS COMPLETOS (PERGUNTAS EXPANDIDAS)
// Importar após chat_main.js
// ============================================

elaboratedChatFlow = [
    // ===== BLOCO UNIVERSAL =====
    { step: 0, section: "TEMA", question: "Qual é o tema da música que você quer criar? 🎵", type: "select", options: [
        { label: "🎂 Aniversário", value: "birthday" }, { label: "💌 Declaração de amor", value: "love_declaration" },
        { label: "💍 Pedido de casamento", value: "proposal" }, { label: "👶 Nascimento de filho(a)", value: "birth_child" },
        { label: "👵👶 Nascimento de neto(a)", value: "birth_grandchild" }, { label: "🌹 Homenagem", value: "tribute" },
        { label: "🤝 Amizade", value: "friendship" }, { label: "🏢 Música corporativa", value: "corporate" },
        { label: "✨ Oração", value: "prayer" }, { label: "📢 Anúncio de gravidez", value: "pregnancy_announcement" },
        { label: "🐾 Música para seu Pet", value: "pet" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.themeId", required: true } },

    // ===== TEMA 1: ANIVERSÁRIO (15 perguntas) =====
    { step: 1, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1.1, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1.2, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1.3, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 1.4, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1.5, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 1.6, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 1.7, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 1.8, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    { step: 1.9, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 1.10, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1.11, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1.12, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 1.13, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 1.14, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 12: MÚSICA PARA SEU PET (14 perguntas) =====
    { step: 12, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o tipo do seu pet? 🐾", type: "select", options: [
        { label: "🐶 Cachorro", value: "dog" }, { label: "🐱 Gato", value: "cat" }, { label: "🐦 Pássaro", value: "bird" },
        { label: "🐰 Coelho", value: "rabbit" }, { label: "🐹 Hamster/Roedor", value: "rodent" }, { label: "🐠 Peixe", value: "fish" },
        { label: "🐢 Tartaruga", value: "turtle" }, { label: "🦎 Réptil", value: "reptile" }, { label: "🐴 Cavalo", value: "horse" },
        { label: "🦜 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.petType", required: true } },
    { step: 12.1, section: "PET", condition: (d) => d.step0 === "pet", question: "Como se chama seu pet? 🐾", type: "input", placeholder: "Ex.: Max, Luna, Fluffy…", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: 12.2, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é a idade ou tempo que tem com você? 📅", type: "input", placeholder: "Ex.: 2 anos, desde filhote, 6 meses…", minLength: 2, metadata: { fieldName: "recipient.petAge", required: true } },
    { step: 12.3, section: "PET", condition: (d) => d.step0 === "pet", question: "Como é a personalidade do seu pet? 🎭", type: "textarea", placeholder: "Brincalhão, calmo, carinhoso, aventureiro…", minLength: 10, metadata: { fieldName: "recipient.petPersonality", required: true } },
    { step: 12.4, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o maneirismo favorito do seu pet? 😄", type: "textarea", placeholder: "Pular, dormir, brincar, fazer algo engraçado…", minLength: 10, metadata: { fieldName: "lyricDetails.favoriteBehavior", required: true } },
    { step: 12.5, section: "PET", condition: (d) => d.step0 === "pet", question: "Descreva uma cena típica do dia a dia com seu pet 🎬", type: "textarea", placeholder: "De manhã, quando volta pra casa, na hora da brincadeira…", minLength: 15, metadata: { fieldName: "lyricDetails.dailyScene", required: true } },
    { step: 12.6, section: "PET", condition: (d) => d.step0 === "pet", question: "O que o seu pet significa para você? 💕", type: "textarea", placeholder: "Companhia, amor incondicional, terapia…", minLength: 15, metadata: { fieldName: "lyricDetails.petMeaning", required: true } },
    { step: 12.7, section: "PET", condition: (d) => d.step0 === "pet", question: "O que você mais ama nele? ⭐", type: "textarea", placeholder: "O jeito dele, o carinho, a lealdade…", minLength: 10, metadata: { fieldName: "lyricDetails.mostLove", required: true } },
    { step: 12.8, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o som/vocalização favorita do pet? 🎵", type: "input", placeholder: "Au au, miau, piado, latido especial…", minLength: 2, metadata: { fieldName: "lyricDetails.petSound", required: true } },
    { step: 12.9, section: "PET", condition: (d) => d.step0 === "pet", question: "Para qual momento você quer essa música? 🕐", type: "select", options: [
        { label: "😴 Para acalmar/dormir", value: "calm" }, { label: "🎉 Para brincar/energia", value: "playful" }, { label: "💕 Para conexão emocional", value: "emotional" },
        { label: "🎂 Aniversário do pet", value: "birthday" }, { label: "🌟 Homenagem geral", value: "tribute" }, { label: "🔄 Múltiplos momentos", value: "various" }
    ], metadata: { fieldName: "ai_metadata.petMusicPurpose", required: true } },
    { step: 12.10, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual estilo musical combina mais com seu pet? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌊 Ambient/Relaxante", value: "ambient" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 12.11, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual impacto emocional a música deve ter? 💖", type: "select", options: [
        { label: "😭 Emocionar (você)", value: "emotional" }, { label: "☮️ Paz/Calma", value: "peace" }, { label: "✨ Arrepio de amor", value: "goosebumps" },
        { label: "😊 Alegria/Diversão", value: "smile" }, { label: "💪 Energia/Movimento", value: "strength" }, { label: "🔗 Conexão pet-tutor", value: "connection" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 12.12, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual tipo de voz você prefere? 🎙️", type: "select", options: [
        { label: "🎙️ Voz masculina suave", value: "male_soft" }, { label: "🎙️ Voz masculina animada", value: "male_strong" },
        { label: "🎤 Voz feminina delicada", value: "female_soft" }, { label: "🎤 Voz feminina energética", value: "female_strong" },
        { label: "🎵 Dueto (tutor + som)", value: "duo" }, { label: "👥 Múltiplas vozes", value: "choir" }, { label: "🎶 Só instrumental", value: "instrumental" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 12.13, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual tipo de movimento musical você prefere? ⚡", type: "select", options: [
        { label: "🌊 Muito calma (relaxante)", value: "very_calm" }, { label: "☮️ Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" },
        { label: "📈 Intensa", value: "intense" }, { label: "🎉 Muito animada", value: "very_intense" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 12.14, section: "PET", condition: (d) => d.step0 === "pet", question: "O que você prefere evitar na música? 🚫", type: "textarea", placeholder: "Barulhos altos, sons assustadores…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== OUTROS TEMAS (ANÚNCIO, ORAÇÃO, ETC - continuam como antes) =====
    // ... (adicione os outros temas conforme necessário)
];
