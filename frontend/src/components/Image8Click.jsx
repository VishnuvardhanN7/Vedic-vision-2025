import SymptomChecker from "./SymptomChecker";

export default function Image8Click({ onClose }) {
  const symptomsList = [
    "muscle tightness",
    "sharp pain",
    "upper back pain",
    "lower back pain",
    "pain while coughing or sneezing",
    "back feels weak",
    "pain while bending",
    "pain while standing",
    "pain that spreads",
    "burning sensation",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Posture-related back strain  
- Muscle spasm  
- Disc or spinal irritation  

**3. Possible Causes**  
- Long sitting or poor posture  
- Lifting heavy objects  
- Muscle tension from stress  

**4. Suggested Care**  
- Use proper posture and rest the back  
- Avoid lifting heavy weight for now  
- See a doctor if numbness or weakness occurs`;

  return <SymptomChecker onClose={onClose} conditionLabel="backbone" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
