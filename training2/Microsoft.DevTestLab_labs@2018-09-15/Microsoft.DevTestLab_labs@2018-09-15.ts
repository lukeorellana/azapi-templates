import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsProps extends IAzAPIBaseProps {
/**
   * The properties of any lab announcement associated with this lab
   */
readonly announcement?: LabAnnouncementProperties;

/**
   * The access rights to be granted to the user when provisioning an environment
   */
readonly environmentPermission?: 'Contributor''Reader';

/**
   * Extended properties of the lab used for experimental features
   */
readonly extendedProperties?: object;

/**
   * Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
   */
readonly labStorageType?: 'Premium''Standard''StandardSSD';

/**
   * The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
   */
readonly mandatoryArtifactsResourceIdsLinux?: string[];

/**
   * The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
   */
readonly mandatoryArtifactsResourceIdsWindows?: string[];

/**
   * The setting to enable usage of premium data disks.When its value is 'Enabled', creation of standard or premium data disks is allowed.When its value is 'Disabled', only creation of standard data disks is allowed.
   */
readonly premiumDataDisks?: 'Disabled''Enabled';

/**
   * The properties of any lab support message associated with this lab
   */
readonly support?: LabSupportProperties;

/**
   * Is the lab announcement active/enabled at this time?
   */
readonly enabled?: 'Disabled''Enabled';

/**
   * The time at which the announcement expires (null for never)
   */
readonly expirationDate?: string;

/**
   * Has this announcement expired?
   */
readonly expired?: bool;

/**
   * The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
   */
readonly markdown?: string;

/**
   * The plain text title for the lab announcement
   */
readonly title?: string;

/**
   * Is the lab support banner active/enabled at this time?
   */
readonly enabled?: 'Disabled''Enabled';

/**
   * The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
   */
readonly markdown?: string;
}

/**
 * DevtestlabLabs resource
 */
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
