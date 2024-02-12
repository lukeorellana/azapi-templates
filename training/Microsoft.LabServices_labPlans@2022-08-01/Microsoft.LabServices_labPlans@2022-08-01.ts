import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LabservicesLabplansProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-100Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with letter and end with alphanumeric. |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | identity | Managed Identity Information | Identity |
// | properties | Lab plan resource properties | LabPlanProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | The identity type. | 'SystemAssigned' |

// | Name | Description | Value |
// |-|-|-|
// | allowedRegions | The allowed regions for the lab creator to use when creating labs using this lab plan. | string[] |
// | defaultAutoShutdownProfile | The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile. | AutoShutdownProfile |
// | defaultConnectionProfile | The default lab connection profile. This can be changed on a lab resource and only provides a default profile. | ConnectionProfile |
// | defaultNetworkProfile | The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan. | LabPlanNetworkProfile |
// | linkedLmsInstance | Base Url of the lms instance this lab plan can link lab rosters against. | string |
// | sharedGalleryId | Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs. | string |
// | supportInfo | Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan. | SupportInfo |

// | Name | Description | Value |
// |-|-|-|
// | disconnectDelay | The amount of time a VM will stay running after a user disconnects if this behavior is enabled. | string |
// | idleDelay | The amount of time a VM will idle before it is shutdown if this behavior is enabled. | string |
// | noConnectDelay | The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled. | string |
// | shutdownOnDisconnect | Whether shutdown on disconnect is enabled | 'Disabled''Enabled' |
// | shutdownOnIdle | Whether a VM will get shutdown when it has idled for a period of time. | 'LowUsage''None''UserAbsence' |
// | shutdownWhenNotConnected | Whether a VM will get shutdown when it hasn't been connected to after a period of time. | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | clientRdpAccess | The enabled access level for Client Access over RDP. | 'None''Private''Public' |
// | clientSshAccess | The enabled access level for Client Access over SSH. | 'None''Private''Public' |
// | webRdpAccess | The enabled access level for Web Access over RDP. | 'None''Private''Public' |
// | webSshAccess | The enabled access level for Web Access over SSH. | 'None''Private''Public' |

// | Name | Description | Value |
// |-|-|-|
// | subnetId | The external subnet resource id | string |

// | Name | Description | Value |
// |-|-|-|
// | email | Support contact email address. | string |
// | instructions | Support instructions. | string |
// | phone | Support contact phone number. | string |
// | url | Support web address. | string |
