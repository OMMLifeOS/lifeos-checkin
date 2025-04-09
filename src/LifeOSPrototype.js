import { useState } from "react";

export default function LifeOSPrototype() {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState(5);
  const [journal, setJournal] = useState("");
  const [response, setResponse] = useState("");

  const handleCheckIn = () => {
    const feedback = `Thanks for sharing. When you're feeling a ${mood}/10, it's helpful to take a breath and reflect. Remember: "This too shall pass." You got this.`;
    setResponse(feedback);
    setStep(3);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      {step === 1 && (
        <div>
          <h2>Welcome to LifeOS Check-In</h2>
          <label>How are you feeling today? (1–10)</label><br />
          <input
            type="number"
            min={1}
            max={10}
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          /><br />
          <label>What's on your mind?</label><br />
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Type anything you’re feeling or thinking..."
          /><br />
          <button onClick={handleCheckIn}>Submit Check-In</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>AI Response</h3>
          <p>{response}</p>
          <button onClick={() => setStep(1)}>Do Another Check-In</button>
        </div>
      )}
    </div>
  );
}
