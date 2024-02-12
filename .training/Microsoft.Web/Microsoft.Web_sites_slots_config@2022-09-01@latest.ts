import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsConfigProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsConfig resource
 */
export class WebSitesSlotsConfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsConfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/config@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsConfigProps): string {
    return JSON.stringify(
        {properties: {}, kind: "string"}
    );
  }
}
