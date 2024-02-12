import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: ResourceModelWithAllowedPropertySetSku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: stringConstranumbers:Pattern =^[-\w\._,\(\)]+$;

/**
   * 
   */
readonly identity?: ResourceModelWithAllowedPropertySetIdentity;

/**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
readonly managedBy?: string;

/**
   * 
   */
readonly plan?: ResourceModelWithAllowedPropertySetPlan;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
   */
readonly product: string;

/**
   * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
   */
readonly promotionCode?: string;

/**
   * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
   */
readonly publisher: string;

/**
   * The version of the desired product/artifact.
   */
readonly version?: string;

/**
   * The session host configuration for updating agent, monitoring agent, and stack component.
   */
readonly agentUpdate?: AgentUpdateProperties;

/**
   * Custom rdp property of HostPool.
   */
readonly customRdpProperty?: string;

/**
   * Description of HostPool.
   */
readonly description?: string;

/**
   * Friendly name of HostPool.
   */
readonly friendlyName?: string;

/**
   * HostPool type for desktop.
   */
readonly hostPoolType: 'BYODesktop''Personal''Pooled';

/**
   * The type of the load balancer.
   */
readonly loadBalancerType: 'BreadthFirst''DepthFirst''Persistent';

/**
   * The type of management for this hostpool, Automated or Standard. The default value is Automated.
   */
readonly managementType?: 'Automated''Standard';

/**
   * The max session limit of HostPool.
   */
readonly maxSessionLimit?: number;

/**
   * PersonalDesktopAssignment type for HostPool.
   */
readonly personalDesktopAssignmentType?: 'Automatic''Direct';

/**
   * The type of preferred application group type, default to Desktop Application Group
   */
readonly preferredAppGroupType: 'Desktop''None''RailApplications';

/**
   * Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''EnabledForClientsOnly''EnabledForSessionHostsOnly';

/**
   * The registration info of HostPool.
   */
readonly registrationInfo?: RegistrationInfo;

/**
   * The ring number of HostPool.
   */
readonly ring?: number;

/**
   * URL to customer ADFS server for signing WVD SSO certificates.
   */
readonly ssoadfsAuthority?: string;

/**
   * ClientId for the registered Relying Party used to issue WVD SSO certificates.
   */
readonly ssoClientId?: string;

/**
   * Path to Azure KeyVault storing the secret used for communication to ADFS.
   */
readonly ssoClientSecretKeyVaultPath?: string;

/**
   * The type of single sign on Secret Type.
   */
readonly ssoSecretType?: 'Certificate''CertificateInKeyVault''SharedKey''SharedKeyInKeyVault';

/**
   * The flag to turn on/off StartVMOnConnect feature.
   */
readonly startVMOnConnect?: bool;

/**
   * Is validation environment.
   */
readonly validationEnvironment?: bool;

/**
   * VM template for sessionhosts configuration within hostpool.
   */
readonly vmTemplate?: string;

/**
   * List of maintenance windows. Maintenance windows are 2 hours long.
   */
readonly maintenanceWindows?: ManumberenanceWindowProperties[];

/**
   * Time zone for maintenance as defined inhttps://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyidMust be set if useLocalTime is true.
   */
readonly maintenanceWindowTimeZone?: string;

/**
   * The type of maintenance for session host components.
   */
readonly type?: 'Default''Scheduled';

/**
   * Whether to use localTime of the virtual machine.
   */
readonly useSessionHostLocalTime?: bool;

/**
   * Day of the week.
   */
readonly dayOfWeek?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The update start hour of the day. (0 - 23)
   */
readonly hour?: number;

/**
   * Expiration time of registration token.
   */
readonly expirationTime?: string;

/**
   * The type of resetting the token.
   */
readonly registrationTokenOperation?: 'Delete''None''Update';

/**
   * The registration token base64 encoded string.
   */
readonly token?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
