import type { PyConfigProperties } from "../components/PyConfig";

declare module "solid-js" {
  namespace JSX {
    interface ExplicitAttributes {
      config?: string;
      target?: string;
      worker?: string;
      terminal?: string;
      async?: string;
      env?: string;
    }
    interface IntrinsicElements {
      ["py-config"]: PyConfigProperties;
    }
  }
}
