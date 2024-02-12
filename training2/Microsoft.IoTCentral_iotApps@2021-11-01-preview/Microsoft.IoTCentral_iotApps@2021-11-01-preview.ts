import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface IotcentralIotappsProps extends IAzAPIBaseProps {
/**
   * A valid instance SKU.
   */
readonly sku: AppSkuInfo;

/**
   * The managed identities for the IoT Central application.
   */
readonly identity?: SystemAssignedServiceIdentity;

/**
   * Type of managed service identity (either system assigned, or none).
   */
readonly type: 'None''SystemAssigned';

/**
   * The display name of the application.
   */
readonly displayName?: string;

/**
   * Network Rule Set Properties of this IoT Central application.
   */
readonly networkRuleSets?: NetworkRuleSets;

/**
   * Whether requests from the public network are allowed.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The subdomain of the application.
   */
readonly subdomain?: string;

/**
   * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
   */
readonly template?: string;

/**
   * Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application.
   */
readonly applyToDevices?: bool;

/**
   * Whether these rules apply for connectivity via IoT Central web portal and APIs.
   */
readonly applyToIoTCentral?: bool;

/**
   * The default network action to apply.
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * List of IP rules.
   */
readonly ipRules?: NetworkRuleSetIpRule[];

/**
   * The readable name of the IP rule.
   */
readonly filterName?: string;

/**
   * The CIDR block defining the IP range.
   */
readonly ipMask?: string;
}

/**
 * IotcentralIotapps resource
 */
export class IotcentralIotapps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: IotcentralIotappsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.IoTCentral/iotApps@2021-11-01-preview";
  }

  protected getResourceBody(props: IotcentralIotappsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", networkRuleSets: {applyToDevices: "${bool}", applyToIoTCentral: "${bool}", defaultAction: "string", ipRules: [{filterName: "string", ipMask: "string"}]}, publicNetworkAccess: "string", subdomain: "string", template: "string"}, sku: {name: "string"}}
    );
  }
}
