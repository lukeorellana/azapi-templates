import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MapsAccountsCreatorsProps extends IAzAPIBaseProps {

}

/**
 * MapsAccountsCreators resource
 */
export class MapsAccountsCreators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MapsAccountsCreatorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maps/accounts/creators@2023-06-01";
  }

  protected getResourceBody(props: MapsAccountsCreatorsProps): string {
    return JSON.stringify(
        {properties: {storageUnits: "${int}"}}
    );
  }
}
