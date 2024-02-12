import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersDevboxdefinitionsProps extends IAzAPIBaseProps {

}

/**
 * DevcenterDevcentersDevboxdefinitions resource
 */
export class DevcenterDevcentersDevboxdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersDevboxdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersDevboxdefinitionsProps): string {
    return JSON.stringify(
        {properties: {hibernateSupport: "string", imageReference: {id: "string"}, osStorageType: "string", sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}}
    );
  }
}
