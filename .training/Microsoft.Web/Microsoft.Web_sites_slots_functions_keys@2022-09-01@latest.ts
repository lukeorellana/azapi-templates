import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsFunctionsKeysProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsFunctionsKeys resource
 */
export class WebSitesSlotsFunctionsKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsFunctionsKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/functions/keys@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsFunctionsKeysProps): string {
    return JSON.stringify(
        {value: "string"}
    );
  }
}
