import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProps extends IAzAPIBaseProps {
/**
   * Service SKU
   */
readonly sku?: ServiceSku;

/**
   * The resource kind. Only 'vm' (the default) is supported.
   */
readonly kind?: string;

/**
   * HTTP strong entity tag value. Ignored if submitted
   */
readonly etag?: string;

/**
   * The time delay before the service is auto-stopped when idle.
   */
readonly autoStopDelay?: string;

/**
   * Whether service resources should be deleted when stopped. (Turned on by default)
   */
readonly deleteResourcesOnStop?: bool;

/**
   * The public key of the service, used to encrypt secrets sent to the service
   */
readonly publicKey?: string;

/**
   * The ID of the Microsoft.Network/networkInterfaces resource which the service have
   */
readonly virtualNicId?: string;

/**
   * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
   */
readonly virtualSubnetId?: string;

/**
   * The capacity of the SKU, if it supports scaling
   */
readonly capacity?: number;

/**
   * The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines
   */
readonly family?: string;

/**
   * The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines
   */
readonly size?: string;

/**
   * The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical'
   */
readonly tier?: string;
}

/**
 * DatamigrationServices resource
 */
export class DatamigrationServices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesProps): string {
    return JSON.stringify(
        {properties: {autoStopDelay: "string", deleteResourcesOnStop: "${bool}", publicKey: "string", virtualNicId: "string", virtualSubnetId: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string", etag: "string"}
    );
  }
}
