import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MapsAccountsProps extends IAzAPIBaseProps {

}

/**
 * MapsAccounts resource
 */
export class MapsAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MapsAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maps/accounts@2023-06-01";
  }

  protected getResourceBody(props: MapsAccountsProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedOrigins: ["string"]}]}, disableLocalAuth: "${bool}", encryption: {customerManagedKeyEncryption: {keyEncryptionKeyIdentity: {delegatedIdentityClientId: "string", identityType: "string", userAssignedIdentityResourceId: "string"}, keyEncryptionKeyUrl: "string"}, infrastructureEncryption: "string"}, linkedResources: [{id: "string", uniqueName: "string"}]}, sku: {name: "string"}, kind: "string"}
    );
  }
}
