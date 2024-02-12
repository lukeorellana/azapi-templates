import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataPostgresinstancesProps extends IAzAPIBaseProps {
/**
   * Resource sku.
   */
readonly sku?: PostgresInstanceSku;

/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * The instance admin
   */
readonly admin?: string;

/**
   * Username and password for basic authentication.
   */
readonly basicLoginInformation?: BasicLoginInformation;

/**
   * The data controller id
   */
readonly dataControllerId?: string;

/**
   * The raw kubernetes information
   */
readonly k8sRaw?: For Bicep, you can use theany()function.;

/**
   * Last uploaded date from Kubernetes cluster. Defaults to current date time
   */
readonly lastUploadedDate?: string;

/**
   * Login password.
   */
readonly password?: string;

/**
   * Login username.
   */
readonly username?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
   */
readonly dev?: bool;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier.
   */
readonly tier?: 'Hyperscale';
}

/**
 * AzurearcdataPostgresinstances resource
 */
export class AzurearcdataPostgresinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataPostgresinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/postgresInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataPostgresinstancesProps): string {
    return JSON.stringify(
        {properties: {admin: "string", basicLoginInformation: {password: "string", username: "string"}, dataControllerId: "string", lastUploadedDate: "string"}, sku: {capacity: "${int}", dev: "${bool}", family: "string", name: "string", size: "string", tier: "Hyperscale"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
