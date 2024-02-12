import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesFunctionsKeysProps extends IAzAPIBaseProps {

}

/**
 * WebSitesFunctionsKeys resource
 */
export class WebSitesFunctionsKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesFunctionsKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/functions/keys@2022-09-01";
  }

  protected getResourceBody(props: WebSitesFunctionsKeysProps): string {
    return JSON.stringify(
        {value: "string"}
    );
  }
}
