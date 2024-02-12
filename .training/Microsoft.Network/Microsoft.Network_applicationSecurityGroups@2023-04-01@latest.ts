import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkApplicationsecuritygroupsProps extends IAzAPIBaseProps {

}

/**
 * NetworkApplicationsecuritygroups resource
 */
export class NetworkApplicationsecuritygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkApplicationsecuritygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/applicationSecurityGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkApplicationsecuritygroupsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
