import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LabservicesLabsProps extends IAzAPIBaseProps {

}

export class LabservicesLabs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labs@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabsProps): string {
    return JSON.stringify(
      {properties: {autoShutdownProfile: {disconnectDelay: "string", idleDelay: "string", noConnectDelay: "string", shutdownOnDisconnect: "string", shutdownOnIdle: "string", shutdownWhenNotConnected: "string"}, connectionProfile: {clientRdpAccess: "string", clientSshAccess: "string", webRdpAccess: "string", webSshAccess: "string"}, description: "string", labPlanId: "string", networkProfile: {loadBalancerId: "string", publicIpId: "string", subnetId: "string"}, rosterProfile: {activeDirectoryGroupId: "string", lmsInstance: "string", ltiClientId: "string", ltiContextId: "string", ltiRosterEndpoint: "string"}, securityProfile: {openAccess: "string"}, title: "string", virtualMachineProfile: {additionalCapabilities: {installGpuDrivers: "string"}, adminUser: {password: "string", username: "string"}, createOption: "string", imageReference: {id: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, nonAdminUser: {password: "string", username: "string"}, sku: {capacity: int, family: "string", name: "string", size: "string", tier: "string"}, usageQuota: "string", useSharedPassword: "string"}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-100Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with letter and end with alphanumeric. |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | properties | Lab resource properties | LabProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | autoShutdownProfile | The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle. | AutoShutdownProfile |
// | connectionProfile | The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open. | ConnectionProfile |
// | description | The description of the lab. | string |
// | labPlanId | The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization.. | string |
// | networkProfile | The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created. | LabNetworkProfile |
// | rosterProfile | The lab user list management profile. | RosterProfile |
// | securityProfile | The lab security profile. | SecurityProfile |
// | title | The title of the lab. | string |
// | virtualMachineProfile | The profile used for creating lab virtual machines. | VirtualMachineProfile |

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
// | loadBalancerId | The external load balancer resource id | string |
// | publicIpId | The external public IP resource id | string |
// | subnetId | The external subnet resource id | string |

// | Name | Description | Value |
// |-|-|-|
// | activeDirectoryGroupId | The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode. | string |
// | lmsInstance | The base URI identifying the lms instance. | string |
// | ltiClientId | The unique id of the azure lab services tool in the lms. | string |
// | ltiContextId | The unique context identifier for the lab in the lms. | string |
// | ltiRosterEndpoint | The uri of the names and roles service endpoint on the lms for the class attached to this lab. | string |

// | Name | Description | Value |
// |-|-|-|
// | openAccess | Whether any user or only specified users can register to a lab. | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | additionalCapabilities | Additional VM capabilities. | VirtualMachineAdditionalCapabilities |
// | adminUser | Credentials for the admin user on the VM. | Credentials(required) |
// | createOption | Indicates what lab virtual machines are created from. | 'Image''TemplateVM' (required) |
// | imageReference | The image configuration for lab virtual machines. | ImageReference(required) |
// | nonAdminUser | Credentials for the non-admin user on the VM, if one exists. | Credentials |
// | sku | The SKU for the lab. Defines the type of virtual machines used in the lab. | Sku(required) |
// | usageQuota | The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours. | string (required) |
// | useSharedPassword | Enabling this option will use the same password for all user VMs. | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | installGpuDrivers | Flag to pre-install dedicated GPU drivers. | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | password | The password for the user. This is required for the TemplateVM createOption. | string |
// | username | The username to use when signing in to lab VMs. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | id | Image resource ID | string |
// | offer | The image offer if applicable. | string |
// | publisher | The image publisher | string |
// | sku | The image SKU | string |
// | version | The image version specified on creation. | string |

// | Name | Description | Value |
// |-|-|-|
// | capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
// | family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
// | name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
// | size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
// | tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
