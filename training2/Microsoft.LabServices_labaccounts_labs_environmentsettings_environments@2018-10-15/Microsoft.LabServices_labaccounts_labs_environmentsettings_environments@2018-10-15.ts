import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsEnvironmentsettingsEnvironmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:environmentsettings;

/**
   * The provisioning status of the resource.
   */
readonly provisioningState?: string;

/**
   * The set of a VM and the setting id it was created for
   */
readonly resourceSets?: ResourceSet;

/**
   * The unique immutable identifier of a resource (Guid).
   */
readonly uniqueIdentifier?: string;

/**
   * resourceSettingId for the environment
   */
readonly resourceSettingId?: string;

/**
   * VM resource Id for the environment
   */
readonly vmResourceId?: string;
}

/**
 * LabservicesLabaccountsLabsEnvironmentsettingsEnvironments resource
 */
export class LabservicesLabaccountsLabsEnvironmentsettingsEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsLabsEnvironmentsettingsEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsLabsEnvironmentsettingsEnvironmentsProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "string", resourceSets: {resourceSettingId: "string", vmResourceId: "string"}, uniqueIdentifier: "string"}}
    );
  }
}
