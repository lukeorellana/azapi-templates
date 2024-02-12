import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsHcxenterprisesitesProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsHcxenterprisesites resource
 */
export class AvsPrivatecloudsHcxenterprisesites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsHcxenterprisesitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/hcxEnterpriseSites@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsHcxenterprisesitesProps): string {
    return JSON.stringify(
        
    );
  }
}
