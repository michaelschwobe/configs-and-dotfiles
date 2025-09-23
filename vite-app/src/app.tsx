import { twMerge } from "tailwind-merge";
import { Button } from "#src/ui/button.tsx";

export function App() {
  return (
    <div>
      <main>
        <h1 className={twMerge("text-4xl font-semibold")}>App</h1>
        <Button>Button</Button>
      </main>
    </div>
  );
}
