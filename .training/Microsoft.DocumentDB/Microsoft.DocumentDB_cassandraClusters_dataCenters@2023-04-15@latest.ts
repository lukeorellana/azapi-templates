import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbCassandraclustersDatacentersProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbCassandraclustersDatacenters resource
 */
export class DocumentdbCassandraclustersDatacenters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbCassandraclustersDatacentersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbCassandraclustersDatacentersProps): string {
    return JSON.stringify(
        {properties: {authenticationMethodLdapProperties: {connectionTimeoutInMs: "${int}", searchBaseDistinguishedName: "string", searchFilterTemplate: "string", serverCertificates: [{pem: "string"}], serverHostname: "string", serverPort: "${int}", serviceUserDistinguishedName: "string", serviceUserPassword: "string"}, availabilityZone: "${bool}", backupStorageCustomerKeyUri: "string", base64EncodedCassandraYamlFragment: "string", dataCenterLocation: "string", deallocated: "${bool}", delegatedSubnetId: "string", diskCapacity: "${int}", diskSku: "string", managedDiskCustomerKeyUri: "string", nodeCount: "${int}", provisionError: {additionalErrorInfo: "string", code: "string", message: "string", target: "string"}, provisioningState: "string", sku: "string"}}
    );
  }
}
