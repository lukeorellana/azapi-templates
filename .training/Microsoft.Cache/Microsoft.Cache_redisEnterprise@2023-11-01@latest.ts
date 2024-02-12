import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisenterpriseProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisenterprise resource
 */
export class CacheRedisenterprise extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisenterpriseProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redisEnterprise@2023-11-01";
  }

  protected getResourceBody(props: CacheRedisenterpriseProps): string {
    return JSON.stringify(
        {properties: {encryption: {customerManagedKeyEncryption: {keyEncryptionKeyIdentity: {identityType: "string", userAssignedIdentityResourceId: "string"}, keyEncryptionKeyUrl: "string"}}, minimumTlsVersion: "string"}, zones: ["string"], sku: {capacity: "${int}", name: "string"}}
    );
  }
}
