import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesProps extends IAzAPIBaseProps {
/**
   * The sku of the created namespace
   */
readonly sku?: Sku;

/**
   * The time the namespace was created.
   */
readonly createdAt?: string;

/**
   * Whether or not the namespace is set as Critical.
   */
readonly critical?: bool;

/**
   * Data center for the namespace
   */
readonly dataCenter?: string;

/**
   * Whether or not the namespace is currently enabled.
   */
readonly enabled?: bool;

/**
   * The namespace type.
   */
readonly namespaceType?: 'Messaging''NotificationHub';

/**
   * Provisioning state of the Namespace.
   */
readonly provisioningState?: string;

/**
   * Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
   */
readonly region?: string;

/**
   * ScaleUnit where the namespace gets created
   */
readonly scaleUnit?: string;

/**
   * Endpoint you can use to perform NotificationHub operations.
   */
readonly serviceBusEndpoint?: string;

/**
   * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
   */
readonly status?: string;

/**
   * The Id of the Azure subscription associated with the namespace.
   */
readonly subscriptionId?: string;

/**
   * The time the namespace was updated.
   */
readonly updatedAt?: string;

/**
   * The capacity of the resource
   */
readonly capacity?: number;

/**
   * The Sku Family
   */
readonly family?: string;

/**
   * The Sku size
   */
readonly size?: string;

/**
   * The tier of particular sku
   */
readonly tier?: string;
}

/**
 * NotificationhubsNamespaces resource
 */
export class NotificationhubsNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NotificationhubsNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NotificationHubs/namespaces@2017-04-01";
  }

  protected getResourceBody(props: NotificationhubsNamespacesProps): string {
    return JSON.stringify(
        {properties: {createdAt: "string", critical: "${bool}", dataCenter: "string", enabled: "${bool}", name: "string", namespaceType: "string", provisioningState: "string", region: "string", scaleUnit: "string", serviceBusEndpoint: "string", status: "string", subscriptionId: "string", updatedAt: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
