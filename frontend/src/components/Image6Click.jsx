import SymptomChecker from "./SymptomChecker";

export default function Image6Click({ onClose }) {
  const symptomsList = [
    "cramping",
    "aching pain",
    "sharp pain",
    "joint pain",
    "leg feels shaky",
    "visible veins",
    "pain while walking",
    "heaviness",
    "coldness in leg",
    "skin discoloration",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Muscle cramp or strain  
- Fatigue-related pain  
- Circulation-related discomfort  

**3. Possible Causes**  
- Walking or standing too long  
- Low hydration or mineral imbalance  
- Muscle overuse  

**4. Suggested Care**  
- Rest and stretch gently  
- Drink water and avoid overexertion  
- Seek help if swelling or severe pain appears`;

  return <SymptomChecker onClose={onClose} conditionLabel="leg" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
