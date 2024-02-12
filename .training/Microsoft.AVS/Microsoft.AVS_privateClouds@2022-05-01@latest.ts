import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivateclouds resource
 */
export class AvsPrivateclouds extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsProps): string {
    return JSON.stringify(
        {properties: {availability: {secondaryZone: "${int}", strategy: "string", zone: "${int}"}, circuit: {}, encryption: {keyVaultProperties: {keyName: "string", keyVaultUrl: "string", keyVersion: "string"}, status: "string"}, identitySources: [{alias: "string", baseGroupDN: "string", baseUserDN: "string", domain: "string", name: "string", password: "string", primaryServer: "string", secondaryServer: "string", ssl: "string", username: "string"}], internet: "string", managementCluster: {clusterSize: "${int}", hosts: ["string"]}, networkBlock: "string", nsxtPassword: "string", secondaryCircuit: {}, vcenterPassword: "string"}, sku: {name: "string"}}
    );
  }
}
