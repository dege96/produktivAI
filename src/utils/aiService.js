// Kunskap om webbplatsens innehåll
const knowledgeBase = {
  kvalitetssäkring: {
    keywords: ['kvalitet', 'kvalitetssäkring', 'säkerställa', 'kontroll', 'granska', 'faktakontroll'],
    responses: [
      'Vi erbjuder omfattande kvalitetssäkring av AI-genererat innehåll genom faktakontroll och språklig precision. Läs mer på <a href="/process#kvalitetssakring" class="text-blue-600 hover:underline">vår sida om kvalitetssäkring</a>',
      'Vår kvalitetssäkringsprocess inkluderar varumärkesanpassning och innehållsverifiering. Läs mer på <a href="/process#kvalitetssakring" class="text-blue-600 hover:underline">vår sida om kvalitetssäkring</a>',
      'Vi använder en trestegsprocess för kvalitetssäkring: faktakontroll, språkgranskning och varumärkesanpassning. Läs mer på <a href="/process#kvalitetssakring" class="text-blue-600 hover:underline">vår sida om kvalitetssäkring</a>',
    ]
  },
  tips: {
    keywords: ['tips', 'tips och tricks'],
    responses: [
      'Tydliga instruktioner ger bättre resultat när det gäller AI så:<br><br> • Var specifik<br> • Förbättra iterativt<br>• Testa och Validera <br> <br> Läs mer på <a href="/prompt-engineering" class="text-blue-600 hover:underline">vår sida om tips och tricks</a>'
    ]
  },
  implementering: {
    keywords: ['implementering', 'strategi', 'införa', 'integration', 'process', 'implementation'],
    responses: [
      'Vår implementeringsprocess fokuserar på att effektivt integrera AI-lösningar i din verksamhet. Läs mer på <a href="/process#implementering" class="text-blue-600 hover:underline">vår sida om strategisk implementering</a>',
      'Vi erbjuder en strukturerad approach för AI-implementation med fokus på ROI och skalbarhet. Läs mer på <a href="/process#implementering" class="text-blue-600 hover:underline">vår sida om strategisk implementering</a>',
      'Implementeringsprocessen inkluderar analys, pilotprojekt och fullskalig utrullning. Läs mer på <a href="/process#implementering" class="text-blue-600 hover:underline">vår sida om strategisk implementering</a>',
    ]
  },
  prompt: {
    keywords: ['prompt', 'prompts', 'instruktion', 'fråga', 'input', 'engineering'],
    responses: [
      'Prompt engineering handlar om att skapa effektiva instruktioner för AI-system.',
      'Vi lär ut tekniker för att optimera dina AI-prompts för bästa resultat.',
      'Genom rätt prompt-design kan du få betydligt bättre resultat från AI-system.',
      'Läs mer på <a href="/prompt-engineering" class="text-blue-600 hover:underline">vår sida om prompt engineering</a>'
    ]
  },
  användningsområden: {
    keywords: ['chatgpt', 'gpt', 'ai', 'modell', 'språkmodell', 'bot','använd', 'användning', 'användningsområden', 'exempel', 'case', 'tillämpning'],
    responses: [
      'Här är exempel på användningsområden för AI:<br><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="automatisering">Automatisering & Optimering</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="datahantering">Datahantering & Analys</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="innehall">Innehållshantering & Skapande</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="forsaljning">Försäljning & Marknadsföring</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="kundsupport">Kundsupport</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="projektledning">Projektledning</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="effektivisering">Effektivisering & Planering</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="utbildning">Utbildning & Utveckling</a><br>' +
      '• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="teknisk">Teknisk Support</a><br><br>' +
      'Välj ett område ovan för att få mer information.'
    ]
  },
  automatisering: {
    keywords: ['automatisering', 'optimering', 'rutinuppgifter', 'arbetsflöden'],
    responses: [
      'Automatisering & Optimering inkluderar:<br><br>' +
      '• Automatisering av rutinuppgifter och tidskrävande processer<br>' +
      '• Optimering av arbetsflöden genom AI-driven analys<br>' +
      '• Effektiv resursallokering baserad på arbetsbelastning<br>' +
      '• Förbättrad resursplanering med AI-algoritmer<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  datahantering: {
    keywords: ['data', 'analys', 'beslut', 'prediktion'],
    responses: [
      'Datahantering & Analys omfattar:<br><br>' +
      '• Datadriven beslutsfattning med realtidsinsikter<br>' +
      '• Prediktiv analys av trender och mönster<br>' +
      '• Smart organisering av digitala filer och dokument<br>' +
      '• AI-driven analys för välgrundade beslut<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  innehall: {
    keywords: ['innehåll', 'text', 'skriva', 'redigering'],
    responses: [
      'Innehållshantering & Skapande innefattar:<br><br>' +
      '• Skriv- och redigeringsstöd för olika typer av texter<br>' +
      '• Innehållsproduktion för olika kanaler<br>' +
      '• Effektiv kunskapsinhämtning och informationssökning<br>' +
      '• Kreativt stöd för innehållsskapande<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  forsaljning: {
    keywords: ['försäljning', 'marknadsföring', 'leads', 'kunder'],
    responses: [
      'Försäljning & Marknadsföring omfattar:<br><br>' +
      '• Automatiserad leadgenerering och kvalificering<br>' +
      '• Personaliserad kundkommunikation<br>' +
      '• Intelligent målgruppsanalys<br>' +
      '• Optimering av säljprocesser<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  kundsupport: {
    keywords: ['support', 'kundtjänst', 'ärenden'],
    responses: [
      'Kundsupport med AI innebär:<br><br>' +
      '• Intelligent automatiserad kundsupport dygnet runt<br>' +
      '• Snabb och precis hantering av vanliga frågor<br>' +
      '• Effektiv ärendehantering och prioritering<br>' +
      '• Förbättrad kundupplevelse genom AI-stöd<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  projektledning: {
    keywords: ['projekt', 'ledning', 'team', 'samarbete'],
    responses: [
      'Projektledning med AI inkluderar:<br><br>' +
      '• Smart fördelning av projektuppgifter<br>' +
      '• Effektiv resursallokering i team<br>' +
      '• Förbättrat teamsamarbete genom AI-verktyg<br>' +
      '• Automatiserad projektövervakning<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  effektivisering: {
    keywords: ['effektivisering', 'planering', 'tid', 'schema'],
    responses: [
      'Effektivisering & Planering omfattar:<br><br>' +
      '• Intelligent schemaläggning av möten och uppgifter<br>' +
      '• Optimerad tidshantering och prioritering<br>' +
      '• Automatiserade påminnelser och deadlines<br>' +
      '• Effektiv resursplanering<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  utbildning: {
    keywords: ['utbildning', 'utveckling', 'lärande', 'team'],
    responses: [
      'Utbildning & Utveckling innefattar:<br><br>' +
      '• AI-stödd introduktion för nyanställda<br>' +
      '• Personanpassade utbildningsplaner<br>' +
      '• Teamutveckling och samarbetsförbättring<br>' +
      '• Kontinuerlig kompetensutveckling<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  teknisk: {
    keywords: ['teknisk', 'support', 'kod', 'utveckling'],
    responses: [
      'Teknisk Support med AI omfattar:<br><br>' +
      '• Intelligent kodassistans och felsökning<br>' +
      '• Automatiserade kodsuggestioner<br>' +
      '• Teknisk dokumentationshjälp<br>' +
      '• Effektiv problemlösning<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  ansvarsfull: {
    keywords: ['ansvar', 'etik', 'säkerhet', 'integritet', 'risk', 'policy'],
    responses: [
      'Ansvarsfull AI-användning handlar om att balansera innovation med etik och säkerhet. Vi hjälper företag implementera AI på ett säkert och etiskt sätt. Läs mer på <a href="/process#ansvarsfull-ai" class="text-blue-600 hover:underline">vår sida om ansvarsfull AI</a>'
    ]
  },
  kontakt: {
    keywords: ['kontakt', 'hjälp', 'support', 'fråga', 'pris', 'kostnad', 'konsultation', 'kontakta', 'personal'],
    responses: [
      'Kontakta oss för en kostnadsfri konsultation om dina AI-behov. <br><br> Du når oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a> eller 076-191 46 17.',

      '<br><br>Vi finns tillgängliga vardagar 09:00-17:00 för att svara på dina frågor.',
    ]
  },
  varförai: {
    keywords: ['varför'],
    responses: [
      'AI kan hjälpa dig att spara tid och resurser, förbättra effektiviteten och ge bättre resultat. Läs mer på <a href="/use-cases" class="text-blue-600 hover:underline">vår sida om användningsområden</a>',
    ]
  },
  datahantering: {
    keywords: ['data', 'analys', 'beslut', 'prediktion'],
    responses: [
      'Datahantering & Analys omfattar:<br><br>' +
      '• Datadriven beslutsfattning med realtidsinsikter<br>' +
      '• Prediktiv analys av trender och mönster<br>' +
      '• Smart organisering av digitala filer och dokument<br>' +
      '• AI-driven analys för välgrundade beslut<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },
  projektledning: {
    keywords: ['projekt', 'ledning', 'team', 'samarbete'],
    responses: [
      'Projektledning med AI inkluderar:<br><br>' +
      '• Smart fördelning av projektuppgifter<br>' +
      '• Effektiv resursallokering i team<br>' +
      '• Förbättrat teamsamarbete genom AI-verktyg<br>' +
      '• Automatiserad projektövervakning<br><br>' +
      'Vill du veta mer om något annat område? Navigera till <a href="/use-cases" class="text-blue-600 hover:underline">användning</a> eller kontakta oss på <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>'
    ]
  },

};

// Beräkna likhet mellan två strängar
function calculateStringSimilarity(str1, str2) {
  const a = str1.toLowerCase();
  const b = str2.toLowerCase();
  
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return 1 - matrix[b.length][a.length] / Math.max(a.length, b.length);
}

// Hitta bästa matchning för användarens fråga
function findBestMatch(userInput) {
  const input = userInput.toLowerCase();
  let bestMatch = {
    category: null,
    similarity: 0
  };

  // Dela upp användarens input i ord
  const inputWords = input.split(/\s+/);

  // Gå igenom alla kategorier och deras nyckelord
  for (const [category, data] of Object.entries(knowledgeBase)) {
    for (const keyword of data.keywords) {
      // Kontrollera varje ord i användarens input
      for (const word of inputWords) {
        const similarity = calculateStringSimilarity(word, keyword);
        if (similarity > bestMatch.similarity) {
          bestMatch = {
            category,
            similarity
          };
        }
      }
    }
  }

  return bestMatch;
}

// Generera svar baserat på matchning
export function generateResponse(userInput) {
  const match = findBestMatch(userInput);
  
  // Om vi hittar en bra matchning (över 60% likhet)
  if (match.similarity > 0.6 && match.category) {
    const responses = knowledgeBase[match.category].responses;
    
    // Specialhantering för kontaktkategorin - returnera alla svar
    if (match.category === 'kontakt') {
      return responses.join('\n\n');
    }
    
    // För andra kategorier - välj ett slumpmässigt svar
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Om vi inte hittar en bra matchning
  return `Jag förstår att du frågar om "${userInput}". Jag kan hjälpa dig med information om våra huvudtjänster:<br><br>
  • Användningsområden för AI<br>
  • Kvalitetssäkring av AI-innehåll<br>
  • Strategisk AI-implementering<br>
  • Prompt Engineering<br>
  • Ansvarsfull AI-användning<br><br>
  Vilken av dessa områden intresserar dig mest?`;
}

// Huvudfunktion för att hantera chatbot-svar
export async function getAIResponse(userInput) {
  try {
    console.log('Processing input:', userInput);
    
    // Generera svar från kunskapsbasen
    const response = generateResponse(userInput);
    console.log('Response:', response);
    return response;
    
  } catch (error) {
    console.error('Error in getAIResponse:', error);
    return 'Tyvärr kunde jag inte processa din förfrågan just nu. Kan du försöka omformulera din fråga eller kontakta oss via <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a>?';
  }
}

// Funktion för att generera text med DeepSeek-R1
export async function generateText(messages) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_HUGGING_FACE_API_KEY}`
        },
        body: JSON.stringify({ 
          inputs: messages,
          options: {
            wait_for_model: true,
            use_cache: false,
            max_new_tokens: 250
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error('Kunde inte generera text');
    }

    const result = await response.json();
    return result[0].generated_text;
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
} 