import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataDatacontrollersActivedirectoryconnectorsProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataDatacontrollersActivedirectoryconnectors resource
 */
export class AzurearcdataDatacontrollersActivedirectoryconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataDatacontrollersActivedirectoryconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataDatacontrollersActivedirectoryconnectorsProps): string {
    return JSON.stringify(
        {properties: {domainServiceAccountLoginInformation: {password: "string", username: "string"}, spec: {activeDirectory: {domainControllers: {primaryDomainController: {hostname: "string"}, secondaryDomainControllers: [{hostname: "string"}]}, netbiosDomainName: "string", ouDistinguishedName: "string", realm: "string", serviceAccountProvisioning: "string"}, dns: {domainName: "string", nameserverIPAddresses: ["string"], preferK8sDnsForPtrLookups: "${bool}", replicas: "${int}"}}, status: {lastUpdateTime: "string", observedGeneration: "${int}", state: "string"}}}
    );
  }
}
