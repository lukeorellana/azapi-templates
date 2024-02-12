import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MapsAccountsPrivateatlasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;
}

/**
 * MapsAccountsPrivateatlases resource
 */
export class MapsAccountsPrivateatlases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MapsAccountsPrivateatlasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview";
  }

  protected getResourceBody(props: MapsAccountsPrivateatlasesProps): string {
    return JSON.stringify(
        
    );
  }
}
