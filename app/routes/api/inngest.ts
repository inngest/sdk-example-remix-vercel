import { serve } from "inngest/remix";
import fns from "~/inngest";

const handler = serve("My Remix App", fns);

export { handler as loader, handler as action };
