import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesProvisioningservicesProps extends IAzAPIBaseProps {
/**
   * Sku info for a provisioning Service.
   */
readonly sku: IotDpsSkuInfo;

/**
   * The Etag field isnotrequired. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
   */
readonly etag?: string;

/**
   * The resource group of the resource.
   */
readonly resourcegroup?: string;

/**
   * The subscription id of the resource.
   */
readonly subscriptionid?: string;

/**
   * Allocation policy to be used by this provisioning service.
   */
readonly allocationPolicy?: 'GeoLatency''Hashed''Static';

/**
   * List of authorization keys for a provisioning service.
   */
readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDe...[];

/**
   * Optional.Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
   */
readonly enableDataResidency?: bool;

/**
   * List of IoT hubs associated with this provisioning service.
   */
readonly iotHubs?: IotHubDefinitionDescription[];

/**
   * The IP filter rules.
   */
readonly ipFilterRules?: IpFilterRule[];

/**
   * Portal endpoint to enable CORS for this provisioning service.
   */
readonly portalOperationsHostName?: string;

/**
   * Private endpoint connections created on this IotHub
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * The ARM provisioning state of the provisioning service.
   */
readonly provisioningState?: string;

/**
   * Whether requests from Public Network are allowed
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Current state of the provisioning service.
   */
readonly state?: 'Activating''ActivationFailed''Active''Deleted''Deleting''DeletionFailed''FailingOver''FailoverFailed''Resuming''Suspended''Suspending''Transitioning';

/**
   * Name of the key.
   */
readonly keyName: string;

/**
   * Primary SAS key value.
   */
readonly primaryKey?: string;

/**
   * Rights that this key has.
   */
readonly rights: 'DeviceConnect''EnrollmentRead''EnrollmentWrite''RegistrationStatusRead''RegistrationStatusWrite''ServiceConfig';

/**
   * Secondary SAS key value.
   */
readonly secondaryKey?: string;

/**
   * Name of the key.
   */
readonly keyName: string;

/**
   * Primary SAS key value.
   */
readonly primaryKey?: string;

/**
   * Rights that this key has.
   */
readonly rights: 'DeviceConnect''EnrollmentRead''EnrollmentWrite''RegistrationStatusRead''RegistrationStatusWrite''ServiceConfig';

/**
   * Secondary SAS key value.
   */
readonly secondaryKey?: string;

/**
   * weight to apply for a given iot h.
   */
readonly allocationWeight?: number;

/**
   * flag for applying allocationPolicy or not for a given iot hub.
   */
readonly applyAllocationPolicy?: bool;

/**
   * Connection string of the IoT hub.
   */
readonly connectionString: string;

/**
   * The desired action for requests captured by this rule.
   */
readonly action: 'Accept''Reject';

/**
   * The name of the IP filter rule.
   */
readonly filterName: string;

/**
   * A string that contains the IP address range in CIDR notation for the rule.
   */
readonly ipMask: string;

/**
   * Target for requests captured by this rule.
   */
readonly target?: 'all''deviceApi''serviceApi';

/**
   * The private endpoint property of a private endpoint connection
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * The current state of a private endpoint connection
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * Actions required for a private endpoint connection
   */
readonly actionsRequired?: string;

/**
   * The description for the current state of a private endpoint connection
   */
readonly description: string;

/**
   * The status of a private endpoint connection
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';

/**
   * The number of units to provision
   */
readonly capacity?: number;
}

/**
 * DevicesProvisioningservices resource
 */
export class DevicesProvisioningservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesProvisioningservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/provisioningServices@2022-12-12";
  }

  protected getResourceBody(props: DevicesProvisioningservicesProps): string {
    return JSON.stringify(
        {properties: {allocationPolicy: "string", authorizationPolicies: [{keyName: "string", primaryKey: "string", rights: "string", secondaryKey: "string"}], enableDataResidency: "${bool}", iotHubs: [{allocationWeight: "${int}", applyAllocationPolicy: "${bool}", connectionString: "string", location: "string"}], ipFilterRules: [{action: "string", filterName: "string", ipMask: "string", target: "string"}], portalOperationsHostName: "string", privateEndpointConnections: [{properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}], provisioningState: "string", publicNetworkAccess: "string", state: "string"}, resourcegroup: "string", subscriptionid: "string", sku: {capacity: "${int}", name: "S1"}, etag: "string"}
    );
  }
}
