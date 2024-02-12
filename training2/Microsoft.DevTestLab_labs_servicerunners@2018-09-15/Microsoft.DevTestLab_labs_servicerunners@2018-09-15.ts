import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsServicerunnersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The identity of the resource.
   */
readonly identity?: IdentityProperties;

/**
   * The client secret URL of the identity.
   */
readonly clientSecretUrl?: string;

/**
   * The principal id of resource identity.
   */
readonly principalId?: string;

/**
   * The tenant identifier of resource.
   */
readonly tenantId?: string;

/**
   * Managed identity.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';
}

/**
 * DevtestlabLabsServicerunners resource
 */
export class DevtestlabLabsServicerunners extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsServicerunnersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/servicerunners@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsServicerunnersProps): string {
    return JSON.stringify(
        
    );
  }
}
