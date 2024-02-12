import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MapsAccountsCreatorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The storage units to be allocated. Integer values from 1 to 100, inclusive.
   */
readonly storageUnits: number Constranumbers:Min value = 1Max value = 100;
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
