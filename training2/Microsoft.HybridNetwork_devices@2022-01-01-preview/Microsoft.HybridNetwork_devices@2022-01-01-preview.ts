import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkDevicesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly deviceType: AzureStackEdge;

/**
   * The type of the device.
   */
readonly deviceType: 'AzureStackEdge';

/**
   * The reference to the Azure stack edge device.
   */
readonly azureStackEdge: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * HybridnetworkDevices resource
 */
export class HybridnetworkDevices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkDevicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/devices@2022-01-01-preview";
  }

  protected getResourceBody(props: HybridnetworkDevicesProps): string {
    return JSON.stringify(
        {properties: {deviceType: "string"}}
    );
  }
}
