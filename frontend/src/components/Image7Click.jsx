import SymptomChecker from "./SymptomChecker";

export default function Image7Click({ onClose }) {
  const symptomsList = [
    "pain during urination",
    "burning sensation",
    "swelling",
    "redness",
    "rashes",
    "itching",
    "blood in urine",
    "frequent urination",
    "pain in lower abdomen",
    "fever with genital pain",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Urinary tract infection  
- Kidney stone or urinary irritation  
- Dehydration-related discomfort  

**3. Possible Causes**  
- Low water intake  
- Urinary irritation or infection  
- Pain in the lower abdomen or back  

**4. Suggested Care**  
- Drink water and do not ignore burning urination  
- Avoid delaying urination  
- Get medical evaluation if pain or fever worsens`;

  return <SymptomChecker onClose={onClose} conditionLabel="kidney and penis" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
