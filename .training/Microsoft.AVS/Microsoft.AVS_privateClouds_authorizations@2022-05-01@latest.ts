import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsAuthorizationsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsAuthorizations resource
 */
export class AvsPrivatecloudsAuthorizations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsAuthorizationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/authorizations@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsAuthorizationsProps): string {
    return JSON.stringify(
        
    );
  }
}
