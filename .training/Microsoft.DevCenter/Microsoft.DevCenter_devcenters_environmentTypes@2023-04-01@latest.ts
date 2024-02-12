import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersEnvironmenttypesProps extends IAzAPIBaseProps {

}

/**
 * DevcenterDevcentersEnvironmenttypes resource
 */
export class DevcenterDevcentersEnvironmenttypes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersEnvironmenttypesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters/environmentTypes@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersEnvironmenttypesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
