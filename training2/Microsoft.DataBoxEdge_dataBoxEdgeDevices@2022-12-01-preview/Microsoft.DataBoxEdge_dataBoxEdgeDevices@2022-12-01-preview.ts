import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesProps extends IAzAPIBaseProps {
/**
   * The SKU type.
   */
readonly sku?: Sku;

/**
   * The etag for the devices.
   */
readonly etag?: string;

/**
   * Msi identity of the resource
   */
readonly identity?: ResourceIdentity;

/**
   * Identity type
   */
readonly type?: 'None''SystemAssigned''UserAssigned';

/**
   * The details of data-residency related properties for this resource
   */
readonly dataResidency?: DataResidency;

/**
   * DataResidencyType enum
   */
readonly type?: 'GeoZoneReplication''ZoneReplication';

/**
   * The SKU tier. This is based on the SKU name.
   */
readonly tier?: 'Standard';
}

/**
 * DataboxedgeDataboxedgedevices resource
 */
export class DataboxedgeDataboxedgedevices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesProps): string {
    return JSON.stringify(
        {properties: {dataResidency: {type: "string"}}, sku: {name: "string", tier: "Standard"}, etag: "string"}
    );
  }
}
