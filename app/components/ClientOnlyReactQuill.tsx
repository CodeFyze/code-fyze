import { useEffect, useState } from "react";

export default function ClientOnlyReactQuill({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [ReactQuill, setReactQuill] = useState<any>(null);

  useEffect(() => {
    // Only runs on client
    import("react-quill").then((quill) => {
      setReactQuill(() => quill.default);
    });
  }, []);

  if (!ReactQuill) {
    return <p className="text-gray-500 text-sm">Loading editor...</p>;
  }

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow"
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["link", "blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"]
        ],
      }}
    />
  );
}
