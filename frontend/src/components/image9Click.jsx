import SymptomChecker from "./SymptomChecker";

export default function Image9Click({ onClose }) {
  const symptomsList = [
    "pain",
    "burning sensation",
    "itching",
    "redness",
    "dryness",
    "pain during urination",
    "pain in pelvic area",
    "painful menstruation",
    "rashes",
    "swelling",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Urinary tract infection  
- Yeast infection or irritation  
- Menstrual or pelvic pain  

**3. Possible Causes**  
- Local irritation or infection  
- Hormonal changes  
- Dehydration or hygiene-related irritation  

**4. Suggested Care**  
- Keep the area clean and dry  
- Drink water and avoid irritants  
- Get checked if pain, burning, or discharge continues`;

  return <SymptomChecker onClose={onClose} conditionLabel="femalegenital" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
