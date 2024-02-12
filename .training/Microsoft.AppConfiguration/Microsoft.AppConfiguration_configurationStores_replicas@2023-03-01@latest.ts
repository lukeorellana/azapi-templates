import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresReplicasProps extends IAzAPIBaseProps {

}

/**
 * AppconfigurationConfigurationstoresReplicas resource
 */
export class AppconfigurationConfigurationstoresReplicas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppconfigurationConfigurationstoresReplicasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppConfiguration/configurationStores/replicas@2023-03-01";
  }

  protected getResourceBody(props: AppconfigurationConfigurationstoresReplicasProps): string {
    return JSON.stringify(
        
    );
  }
}
