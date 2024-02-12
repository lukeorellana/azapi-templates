import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkvirtualappliances resource
 */
export class NetworkNetworkvirtualappliances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkvirtualappliancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkVirtualAppliances@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkvirtualappliancesProps): string {
    return JSON.stringify(
        {properties: {additionalNics: [{hasPublicIp: "${bool}", name: "string"}], bootStrapConfigurationBlobs: ["string"], cloudInitConfiguration: "string", cloudInitConfigurationBlobs: ["string"], delegation: {serviceName: "string"}, nvaSku: {bundledScaleUnit: "string", marketPlaceVersion: "string", vendor: "string"}, partnerManagedResource: {}, sshPublicKey: "string", virtualApplianceAsn: "${int}", virtualHub: {id: "string"}}}
    );
  }
}
