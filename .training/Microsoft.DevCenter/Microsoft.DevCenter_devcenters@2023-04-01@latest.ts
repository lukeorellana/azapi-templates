import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersProps extends IAzAPIBaseProps {

}

/**
 * DevcenterDevcenters resource
 */
export class DevcenterDevcenters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
