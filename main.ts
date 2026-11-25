import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The best advice I ever got, in one sentence.
const SENTENCE =
  "My father counted his tips at our kitchen table after every double shift and told me to put the first dollar of every payday aside and live on whatever was left.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
