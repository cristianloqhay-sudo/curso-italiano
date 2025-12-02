import { Category, CategoryKey } from './types';

export const DATA: Record<CategoryKey, Category> = {
  saludos: {
    title: "Saludos y Expresiones Básicas",
    desc: "Los saludos son la puerta de entrada a cualquier conversación. 'Ciao' es informal, mientras que 'Buongiorno' y 'Buonasera' son formales.",
    items: [
      { it: "Ciao", pron: "cháo", es: "Hola / Adiós", context: "Informal y versátil", fraseIt: "Ciao, come stai?", fraseEs: "Hola, ¿cómo estás?", frasePron: "cháo, kó-me stái?" },
      { it: "Buongiorno", pron: "buon-yór-no", es: "Buenos días", context: "Formal (Mañana/Mediodía)", fraseIt: "Buongiorno, vorrei un caffè.", fraseEs: "Buenos días, me gustaría un café.", frasePron: "buon-yór-no, vo-réi un ka-fé" },
      { it: "Buonasera", pron: "buo-na-sé-ra", es: "Buenas tardes/noches", context: "Formal (Tarde/Noche)", fraseIt: "Buonasera, ho una prenotazione.", fraseEs: "Buenas noches, tengo una reserva.", frasePron: "buo-na-sé-ra, o ú-na pre-no-ta-tsió-ne" },
      { it: "Buonanotte", pron: "buo-na-nó-te", es: "Buenas noches", context: "Despedida al dormir", fraseIt: "Buonanotte, dormi bene.", fraseEs: "Buenas noches, duerme bien.", frasePron: "buo-na-nó-te, dór-mi bé-ne" },
      { it: "Grazie", pron: "grá-tsi-e", es: "Gracias", context: "Cortesía fundamental", fraseIt: "Grazie mille per l'aiuto.", fraseEs: "Mil gracias por la ayuda.", frasePron: "grá-tsi-e míl-le per l'ai-ú-to" },
      { it: "Per favore", pron: "per fa-vó-re", es: "Por favor", context: "Para pedir algo", fraseIt: "Un bicchiere d'acqua, per favore.", fraseEs: "Un vaso de agua, por favor.", frasePron: "un bi-kié-re d'ák-kua, per fa-vó-re" },
      { it: "Scusa", pron: "skú-sa", es: "Disculpa", context: "Informal", fraseIt: "Scusa, dov'è il bagno?", fraseEs: "Disculpa, ¿ dónde está el baño?", frasePron: "skú-sa, do-vé il bá-ño?" },
      { it: "Mi scusi", pron: "mi skú-si", es: "Disculpe", context: "Formal", fraseIt: "Mi scusi, posso passare?", fraseEs: "Disculpe, ¿puedo pasar?", frasePron: "mi skú-si, pós-so pa-sa-re?" },
      { it: "Come stai?", pron: "kó-me stái", es: "¿Cómo estás?", context: "Pregunta común", fraseIt: "Sto bene, e tu?", fraseEs: "Estoy bien, ¿y tú?", frasePron: "sto bé-ne, e tú?" }
    ]
  },
  presentacion: {
    title: "Presentaciones Personales",
    desc: "Estructuras directas y amigables para presentarte. 'Piacere' es esencial al conocer a alguien nuevo.",
    items: [
      { it: "Mi chiamo...", pron: "mi kiá-mo", es: "Me llamo...", context: "Tu nombre", fraseIt: "Mi chiamo Marco e sono qui per lavoro.", fraseEs: "Me llamo Marco y estoy aquí por trabajo.", frasePron: "mi kiá-mo már-ko e só-no kuí per la-vó-ro" },
      { it: "Sono di...", pron: "só-no di", es: "Soy de...", context: "Tu origen", fraseIt: "Sono di Argentina, ma vivo a Milano.", fraseEs: "Soy de Argentina, pero vivo en Milán.", frasePron: "só-no di ar-yen-tí-na, ma ví-vo a mi-lá-no" },
      { it: "Vivo a...", pron: "ví-vo a", es: "Vivo en...", context: "Tu residencia", fraseIt: "Vivo a Roma da due anni.", fraseEs: "Vivo en Roma desde hace dos años.", frasePron: "ví-vo a ró-ma da dú-e án-ni" },
      { it: "Ho ... anni", pron: "o ... án-ni", es: "Tengo ... años", context: "Tu edad", fraseIt: "Ho trenta anni e un lavoro interessante.", fraseEs: "Tengo treinta años y un trabajo interesante.", frasePron: "o trén-ta án-ni e un la-vó-ro in-te-res-sán-te" },
      { it: "Piacere", pron: "pia-ché-re", es: "Mucho gusto", context: "Saludo inicial", fraseIt: "Piacere di conoscerti finalmente.", fraseEs: "Encantado de conocerte finalmente.", frasePron: "pia-ché-re di ko-nó-sher-ti fi-nal-mén-te" },
      { it: "Di dove sei?", pron: "di dó-ve séi", es: "¿De dónde eres?", context: "Pregunta", fraseIt: "Sei qui per vacanza? Di dove sei?", fraseEs: "¿Estás aquí de vacaciones? ¿De dónde eres?", frasePron: "séi kuí per va-kán-tsa? di dó-ve séi?" }
    ]
  },
  numeros: {
    title: "Números (1-10)",
    desc: "Esenciales para precios, horas y cantidades. Nota el sonido 'ch' en 'cinque' y 'dieci'.",
    items: [
      { it: "Uno", pron: "ú-no", es: "Uno", context: "Para contar", fraseIt: "Vorrei un biglietto, per favore.", fraseEs: "Quisiera un billete, por favor.", frasePron: "vo-réi un bi-yét-to, per fa-vó-re" },
      { it: "Due", pron: "dú-e", es: "Dos", context: "Para contar", fraseIt: "Un tavolo per due persone.", fraseEs: "Una mesa para dos personas.", frasePron: "un tá-vo-lo per dú-e per-só-ne" },
      { it: "Tre", pron: "tré", es: "Tres", context: "Para contar", fraseIt: "La stazione è a tre chilometri.", fraseEs: "La estación está a tres kilómetros.", frasePron: "la sta-tsió-ne e a tré ki-ló-me-tri" },
      { it: "Quattro", pron: "kuá-tro", es: "Cuatro", context: "Para contar", fraseIt: "Sono le quattro del pomeriggio.", fraseEs: "Son las cuatro de la tarde.", frasePron: "só-no le kuá-tro del po-me-rí-yo" },
      { it: "Cinque", pron: "chín-kue", es: "Cinco", context: "Sonido 'ch' suave", fraseIt: "Il mio numero è il cinque.", fraseEs: "Mi número es el cinco.", frasePron: "il mío nú-me-ro e il chín-kue" },
      { it: "Sei", pron: "séi", es: "Seis", context: "Para contar", fraseIt: "Ci vediamo alle sei.", fraseEs: "Nos vemos a las seis.", frasePron: "chi ve-diá-mo ál-le séi" },
      { it: "Sette", pron: "sé-te", es: "Siete", context: "Para contar", fraseIt: "Siamo un gruppo di sette amici.", fraseEs: "Somos un grupo de siete amigos.", frasePron: "siá-mo un grúp-po di sét-te a-mí-chi" },
      { it: "Otto", pron: "ó-to", es: "Ocho", context: "Para contar", fraseIt: "Il treno parte alle otto e mezza.", fraseEs: "El tren sale a las ocho y media.", frasePron: "il tré-no pár-te ál-le ót-to e mé-tsa" },
      { it: "Nove", pron: "nó-ve", es: "Nueve", context: "Para contar", fraseIt: "Questo costa nove euro.", fraseEs: "Esto cuesta nueve euros.", frasePron: "kués-to cós-ta nó-ve éu-ro" },
      { it: "Dieci", pron: "dié-chi", es: "Diez", context: "Para contar", fraseIt: "Pago dieci euro in contanti.", fraseEs: "Pago diez euros en efectivo.", frasePron: "pá-go dié-chi éu-ro in kon-tán-ti" }
    ]
  },
  colores: {
    title: "Colores Esenciales",
    desc: "Para describir objetos y entornos. Muchos se parecen al español.",
    items: [
      { it: "Rosso", pron: "ró-so", es: "Rojo", context: "Mi maglia è rossa.", color: "#EF4444", text: "white", fraseIt: "Il semaforo è rosso, ferma la macchina.", fraseEs: "El semáforo está rojo, para el coche.", frasePron: "il se-má-fo-ro e rós-so, fér-ma la mák-ki-na" },
      { it: "Verde", pron: "vér-de", es: "Verde", context: "L'erba è verde.", color: "#22C55E", text: "white", fraseIt: "Il colore della bandiera italiana è verde.", fraseEs: "El color de la bandera italiana es verde.", frasePron: "il ko-ló-re dél-la ban-dié-ra i-ta-liá-na e vér-de" },
      { it: "Giallo", pron: "yá-lo", es: "Amarillo", context: "La luce del sole è gialla.", color: "#FACC15", text: "black", fraseIt: "Voglio comprare una giacca gialla.", fraseEs: "Quiero comprar una chaqueta amarilla.", frasePron: "vó-ño kom-prá-re ú-na yák-ka yál-la" },
      { it: "Nero", pron: "né-ro", es: "Negro", context: "Il cielo è nero di notte.", color: "#000000", text: "white", fraseIt: "Ho un vestito elegante nero.", fraseEs: "Tengo un vestido negro elegante.", frasePron: "o un ves-tí-to e-le-gán-te né-ro" },
      { it: "Bianco", pron: "bián-ko", es: "Blanco", context: "La neve è bianca.", color: "#FFFFFF", text: "black", border: true, fraseIt: "Preferisco le pareti bianche per la luce.", fraseEs: "Prefiero las paredes blancas por la luz.", frasePron: "pre-fe-rís-ko le pa-ré-ti bián-ke per la lú-che" },
      { it: "Blu", pron: "blu", es: "Azul", context: "Il cielo è blu.", color: "#3B82F6", text: "white", fraseIt: "Il mio colore preferito è il blu scuro.", fraseEs: "Mi color favorito es el azul oscuro.", frasePron: "il mío ko-ló-re pre-fe-rí-to e il blu skú-ro" }
    ]
  },
  animales: {
    title: "Animales y Objetos del Hogar",
    desc: "Vocabulario para describir tu entorno cotidiano.",
    items: [
      { it: "Cane", pron: "ká-ne", es: "Perro", context: "Animal", icon: "🐕", fraseIt: "Il cane del mio vicino abbaia forte.", fraseEs: "El perro de mi vecino ladra fuerte.", frasePron: "il ká-ne del mío vi-chí-no ab-bái-a fór-te" },
      { it: "Gatto", pron: "gá-to", es: "Gato", context: "Animal", icon: "🐈", fraseIt: "Il gatto dorme sempre sul letto.", fraseEs: "El gato duerme siempre en la cama.", frasePron: "il gá-to dór-me sém-pre sul lét-to" },
      { it: "Uccello", pron: "uché-lo", es: "Pájaro", context: "Animal", icon: "🐦", fraseIt: "C'è un uccello che canta sulla finestra.", fraseEs: "Hay un pájaro que canta en la ventana.", frasePron: "che un u-ché-lo ke kan-ta súl-la fi-nés-tra" },
      { it: "Pesce", pron: "pé-she", es: "Pez", context: "Animal", icon: "🐟", fraseIt: "Vorrei un pesce fresco per cena.", fraseEs: "Quisiera un pescado fresco para cenar.", frasePron: "vo-réi un pé-she frés-ko per ché-na" },
      { it: "Tavolo", pron: "tá-vo-lo", es: "Mesa", context: "Hogar", icon: "🪑", fraseIt: "Lascia le chiavi sul tavolo.", fraseEs: "Deja las llaves sobre la mesa.", frasePron: "lá-sha le kiá-vi sul tá-vo-lo" },
      { it: "Letto", pron: "lét-to", es: "Cama", context: "Hogar", icon: "🛏️", fraseIt: "Devo rifare il letto prima di uscire.", fraseEs: "Debo hacer la cama antes de salir.", frasePron: "dé-vo ri-fá-re il lét-to prí-ma di u-shí-re" },
      { it: "Finestra", pron: "fi-nés-tra", es: "Ventana", context: "Hogar", icon: "🪟", fraseIt: "Per favore, apri la finestra, fa caldo.", fraseEs: "Por favor, abre la ventana, hace calor.", frasePron: "per fa-vó-re, á-pri la fi-nés-tra, fa kál-do" },
      { it: "Porta", pron: "pór-ta", es: "Puerta", context: "Hogar", icon: "🚪", fraseIt: "La porta d'ingresso è chiusa a chiave.", fraseEs: "La puerta de entrada está cerrada con llave.", frasePron: "la pór-ta d'in-grés-so e kiú-sa a kiá-ve" }
    ]
  },
  viajes: {
    title: "Viajes y Salud",
    desc: "Frases críticas para el aeropuerto y emergencias médicas.",
    items: [
      { it: "Passaporto", pron: "pasa-pór-to", es: "Pasaporte", context: "Aeropuerto", fraseIt: "Dove devo mostrare il passaporto?", fraseEs: "¿Dónde debo mostrar el pasaporte?", frasePron: "dó-ve dé-vo mos-trá-re il pa-sa-pór-to?" },
      { it: "Uscita", pron: "u-shí-ta", es: "Salida / Puerta", context: "Aeropuerto", fraseIt: "Qual è l'uscita per il volo Roma?", fraseEs: "¿Cuál es la puerta para el vuelo a Roma?", frasePron: "kual e l'u-shí-ta per il vó-lo ró-ma?" },
      { it: "Bagaglio", pron: "ba-gá-ño", es: "Equipaje", context: "Aeropuerto", fraseIt: "Ho perso il mio bagaglio, dove devo andare?", fraseEs: "He perdido mi equipaje, ¿ónde debo ir?", frasePron: "o pér-so il mío ba-gá-ño, dó-ve dé-vo an-dá-re?" },
      { it: "Mi sento male", pron: "mi sén-to má-le", es: "Me siento mal", context: "Salud", fraseIt: "Mi sento male, ho bisogno di riposo.", fraseEs: "Me siento mal, necesito descansar.", frasePron: "mi sén-to má-le, o bi-zó-ño di ri-pó-so" },
      { it: "Ho bisogno di un dottore", pron: "o bi-zó-ño di un dot-tó-re", es: "Necesito un doctor", context: "Emergencia", fraseIt: "Ho bisogno di un dottore urgentemente.", fraseEs: "Necesito un doctor urgentemente.", frasePron: "o bi-zó-ño di un dot-tó-re ur-yen-te-mén-te" },
      { it: "Aiuto", pron: "ai-ú-to", es: "Ayuda", context: "Emergencia", fraseIt: "Aiuto! Chiama la polizia, per favore!", fraseEs: "¡Ayuda! ¡Llama a la policía, por favor!", frasePron: "ai-ú-to! kiá-ma la po-li-tsí-a, per fa-vó-re!" }
    ]
  },
  clima: {
    title: "Clima y el Tiempo",
    desc: "Expresiones meteorológicas y momentos del día.",
    items: [
      { it: "Fa freddo", pron: "fa fré-do", es: "Hace frío", context: "Clima", icon: "❄️", fraseIt: "Fa freddo oggi, devo mettere un cappotto.", fraseEs: "Hace frío hoy, tengo que ponerme un abrigo.", frasePron: "fa fré-do ód-yi, dé-vo mét-te-re un kap-pót-to" },
      { it: "Fa caldo", pron: "fa cál-do", es: "Hace calor", context: "Clima", icon: "☀️", fraseIt: "Fa caldo! Andiamo al mare?", fraseEs: "¡Hace calor! ¿Vamos al mar?", frasePron: "fa kál-do! an-diá-mo al má-re?" },
      { it: "Piove", pron: "pió-ve", es: "Llueve", context: "Clima", icon: "🌧️", fraseIt: "Non uscire, piove molto forte.", fraseEs: "No salgas, llueve muy fuerte.", frasePron: "non u-shí-re, pió-ve mól-to fór-te" },
      { it: "Di mattina", pron: "di ma-tí-na", es: "Por la mañana", context: "Tiempo", fraseIt: "La lezione inizia di mattina presto.", fraseEs: "La clase comienza por la mañana temprano.", frasePron: "la le-tsió-ne in-ní-tsia di ma-tí-na prés-to" },
      { it: "Di sera", pron: "di sé-ra", es: "Por la noche", context: "Tiempo", fraseIt: "Ceniamo insieme di sera?", fraseEs: "¿Cenamos juntos por la noche?", frasePron: "che-niá-mo in-sié-me di sé-ra?" }
    ]
  }
};