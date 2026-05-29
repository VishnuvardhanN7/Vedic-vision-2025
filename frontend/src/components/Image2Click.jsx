import SymptomChecker from "./SymptomChecker";

export default function Image2Click({ onClose }) {
  const symptomsList = [
    "chest pain",
    "sweating",
    "dizziness",
    "rapid heartbeat",
    "very tired",
    "fainting",
    "difficulty breathing",
    "pain in back",
    "jaw pain",
    "left hand pain",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Acid reflux or indigestion  
- Chest muscle strain  
- Anxiety or stress-related discomfort  

**3. Possible Causes**  
- Overexertion or posture strain  
- Acid reflux after eating  
- Stress, panic, or breathing strain  

**4. Suggested Care**  
- Rest and avoid heavy physical activity  
- Eat lighter meals and stay upright after eating  
- Seek urgent care if chest pain or breathing trouble worsens`;

  return <SymptomChecker onClose={onClose} conditionLabel="chest" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
