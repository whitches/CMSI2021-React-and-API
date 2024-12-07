import { useState } from "react";

export default function Input({ action }) {
  const [content, setContent] = useState();

  function submit(e) {
    e.preventDefault();
    console.log(content);
    setContent("");
    action(content);
    console.log(e);
  }

  return (
    <form onSubmit={submit}>
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </form>
  );
}
