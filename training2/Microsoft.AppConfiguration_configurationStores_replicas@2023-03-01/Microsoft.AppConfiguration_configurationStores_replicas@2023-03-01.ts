import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresReplicasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:configurationStores;
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
