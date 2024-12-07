import { useState, useEffect } from "react";
import Input from "./Input";
import Cloud from "./Cloud";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("generate a cloud");
  const [data, setData] = useState(null);
  useEffect(() => {
    const textLow = encodeURIComponent(text.toLowerCase());
    // https://quickchart.io/documentation/word-cloud-api/
    const url = `https://quickchart.io/wordcloud?text=${text}`;
    const parameters = {
      method: "GET",
      headers: { "Content-Type": "application/json", format: "png" },
    };
    fetch(url, parameters)
      .then((r) => r.blob())
      .then((r) => setData(URL.createObjectURL(r)))
      .catch((e) => setData(`${e}`));
  }, [text]);
  console.log(data);

  return (
    <div className="App">
      <h1>Word Cloud Generator</h1>
      <h2>Paste your text below and hit enter</h2>
      <Input action={setText} />
      <Cloud image={data} />
    </div>
  );
}
