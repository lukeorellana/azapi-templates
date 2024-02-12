import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface IotcentralIotappsProps extends IAzAPIBaseProps {

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
