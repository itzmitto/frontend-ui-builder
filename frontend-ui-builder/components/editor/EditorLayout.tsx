import PropertyPanel from "./PropertyPanel";
import Preview from "./Preview";
import CodePanel from "./CodePanel";

export default function EditorLayout() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <PropertyPanel /> 
      <Preview />
      <CodePanel />
    </div>
  );
}