import { cx } from "#src/lib/css";
import { Button } from "#src/ui/button.tsx";

export function App() {
  return (
    <div>
      <main>
        <h1 className={cx("text-4xl font-semibold")}>App</h1>
        <Button>Button</Button>
      </main>
    </div>
  );
}
