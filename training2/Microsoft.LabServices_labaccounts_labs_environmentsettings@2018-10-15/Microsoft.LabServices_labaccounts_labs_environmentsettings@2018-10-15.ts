import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsEnvironmentsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * Describes the user's progress in configuring their environment setting
   */
readonly configurationState?: 'Completed''NotApplicable';

/**
   * Describes the environment and its resource settings
   */
readonly description?: string;

/**
   * The provisioning status of the resource.
   */
readonly provisioningState?: string;

/**
   * The resource specific settings
   */
readonly resourceSettings: ResourceSettings;

/**
   * Brief title describing the environment and its resource settings
   */
readonly title?: string;

/**
   * The unique immutable identifier of a resource (Guid).
   */
readonly uniqueIdentifier?: string;

/**
   * The resource id of the gallery image used for creating the virtual machine
   */
readonly galleryImageResourceId?: string;

/**
   * Details specific to Reference Vm
   */
readonly referenceVm: ReferenceVm;

/**
   * The size of the virtual machine
   */
readonly size?: 'Basic''Performance''Standard';

/**
   * The password of the virtual machine. This will be set to null in GET resource API
   */
readonly password?: string;

/**
   * The username of the virtual machine
   */
readonly userName: string;
}

/**
 * LabservicesLabaccountsLabsEnvironmentsettings resource
 */
export class LabservicesLabaccountsLabsEnvironmentsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsLabsEnvironmentsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsLabsEnvironmentsettingsProps): string {
    return JSON.stringify(
        {properties: {configurationState: "string", description: "string", provisioningState: "string", resourceSettings: {galleryImageResourceId: "string", referenceVm: {password: "string", userName: "string"}, size: "string"}, title: "string", uniqueIdentifier: "string"}}
    );
  }
}
