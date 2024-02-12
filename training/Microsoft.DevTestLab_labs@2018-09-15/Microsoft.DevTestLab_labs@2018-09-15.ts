import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DevtestlabLabsProps extends IAzAPIBaseProps {

}

export class DevtestlabLabs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsProps): string {
    return JSON.stringify(
      {properties: {announcement: {enabled: "string", expirationDate: "string", expired: "${bool}", markdown: "string", title: "string"}, environmentPermission: "string", extendedProperties: {}, labStorageType: "string", mandatoryArtifactsResourceIdsLinux: ["string"], mandatoryArtifactsResourceIdsWindows: ["string"], premiumDataDisks: "string", support: {enabled: "string", markdown: "string"}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-50Valid characters:Alphanumerics, underscores, and hyphens. |
// | location | The location of the resource. | string |
// | tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
// | properties | The properties of the resource. | LabProperties |

// | Name | Description | Value |
// |-|-|-|
// | announcement | The properties of any lab announcement associated with this lab | LabAnnouncementProperties |
// | environmentPermission | The access rights to be granted to the user when provisioning an environment | 'Contributor''Reader' |
// | extendedProperties | Extended properties of the lab used for experimental features | object |
// | labStorageType | Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. | 'Premium''Standard''StandardSSD' |
// | mandatoryArtifactsResourceIdsLinux | The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user. | string[] |
// | mandatoryArtifactsResourceIdsWindows | The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user. | string[] |
// | premiumDataDisks | The setting to enable usage of premium data disks.When its value is 'Enabled', creation of standard or premium data disks is allowed.When its value is 'Disabled', only creation of standard data disks is allowed. | 'Disabled''Enabled' |
// | support | The properties of any lab support message associated with this lab | LabSupportProperties |

// | Name | Description | Value |
// |-|-|-|
// | enabled | Is the lab announcement active/enabled at this time? | 'Disabled''Enabled' |
// | expirationDate | The time at which the announcement expires (null for never) | string |
// | expired | Has this announcement expired? | bool |
// | markdown | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | string |
// | title | The plain text title for the lab announcement | string |

// | Name | Description | Value |
// |-|-|-|
// | enabled | Is the lab support banner active/enabled at this time? | 'Disabled''Enabled' |
// | markdown | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | string |
