import SymptomChecker from "./SymptomChecker";

export default function Image3Click({ onClose }) {
  const symptomsList = [
    "stomach pain",
    "vomiting",
    "indigestion",
    "gas",
    "diarrhea",
    "constipation",
    "stomach swelling",
    "pain after meals",
    "feeling of heaviness",
    "stomach discomfort",
  ];

  const demoFallbackAnswer = `**1. Urgency Level**  
**⚠️ Consult a doctor for evaluation.**

**2. Related Diseases**  
- Indigestion or gas  
- Gastritis or acidity  
- Constipation or digestive upset  

**3. Possible Causes**  
- Food irritation or overeating  
- Stress or irregular meals  
- Low water intake  

**4. Suggested Care**  
- Eat smaller meals and stay hydrated  
- Avoid oily, spicy, or very heavy food  
- Rest and monitor for vomiting or fever`;

  return <SymptomChecker onClose={onClose} conditionLabel="stomach" symptomsList={symptomsList} demoFallbackAnswer={demoFallbackAnswer} />;
}
