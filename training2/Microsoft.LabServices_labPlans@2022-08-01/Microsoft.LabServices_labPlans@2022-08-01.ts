import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabplansProps extends IAzAPIBaseProps {
/**
   * Managed Identity Information
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * The allowed regions for the lab creator to use when creating labs using this lab plan.
   */
readonly allowedRegions?: string[];

/**
   * The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile.
   */
readonly defaultAutoShutdownProfile?: AutoShutdownProfile;

/**
   * The default lab connection profile. This can be changed on a lab resource and only provides a default profile.
   */
readonly defaultConnectionProfile?: ConnectionProfile;

/**
   * The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan.
   */
readonly defaultNetworkProfile?: LabPlanNetworkProfile;

/**
   * Base Url of the lms instance this lab plan can link lab rosters against.
   */
readonly linkedLmsInstance?: string;

/**
   * Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs.
   */
readonly sharedGalleryId?: string;

/**
   * Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan.
   */
readonly supportInfo?: SupportInfo;

/**
   * The amount of time a VM will stay running after a user disconnects if this behavior is enabled.
   */
readonly disconnectDelay?: string;

/**
   * The amount of time a VM will idle before it is shutdown if this behavior is enabled.
   */
readonly idleDelay?: string;

/**
   * The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled.
   */
readonly noConnectDelay?: string;

/**
   * Whether shutdown on disconnect is enabled
   */
readonly shutdownOnDisconnect?: 'Disabled''Enabled';

/**
   * Whether a VM will get shutdown when it has idled for a period of time.
   */
readonly shutdownOnIdle?: 'LowUsage''None''UserAbsence';

/**
   * Whether a VM will get shutdown when it hasn't been connected to after a period of time.
   */
readonly shutdownWhenNotConnected?: 'Disabled''Enabled';

/**
   * The enabled access level for Client Access over RDP.
   */
readonly clientRdpAccess?: 'None''Private''Public';

/**
   * The enabled access level for Client Access over SSH.
   */
readonly clientSshAccess?: 'None''Private''Public';

/**
   * The enabled access level for Web Access over RDP.
   */
readonly webRdpAccess?: 'None''Private''Public';

/**
   * The enabled access level for Web Access over SSH.
   */
readonly webSshAccess?: 'None''Private''Public';

/**
   * The external subnet resource id
   */
readonly subnetId?: string;

/**
   * Support contact email address.
   */
readonly email?: string;

/**
   * Support instructions.
   */
readonly instructions?: string;

/**
   * Support contact phone number.
   */
readonly phone?: string;

/**
   * Support web address.
   */
readonly url?: string;
}

/**
 * LabservicesLabplans resource
 */
export class LabservicesLabplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labPlans@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabplansProps): string {
    return JSON.stringify(
        {properties: {allowedRegions: ["string"], defaultAutoShutdownProfile: {disconnectDelay: "string", idleDelay: "string", noConnectDelay: "string", shutdownOnDisconnect: "string", shutdownOnIdle: "string", shutdownWhenNotConnected: "string"}, defaultConnectionProfile: {clientRdpAccess: "string", clientSshAccess: "string", webRdpAccess: "string", webSshAccess: "string"}, defaultNetworkProfile: {subnetId: "string"}, linkedLmsInstance: "string", sharedGalleryId: "string", supportInfo: {email: "string", instructions: "string", phone: "string", url: "string"}}}
    );
  }
}
