import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisenterpriseDatabasesProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisenterpriseDatabases resource
 */
export class CacheRedisenterpriseDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisenterpriseDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redisEnterprise/databases@2023-11-01";
  }

  protected getResourceBody(props: CacheRedisenterpriseDatabasesProps): string {
    return JSON.stringify(
        {properties: {clientProtocol: "string", clusteringPolicy: "string", evictionPolicy: "string", geoReplication: {groupNickname: "string", linkedDatabases: [{id: "string"}]}, modules: [{args: "string", name: "string"}], persistence: {aofEnabled: "${bool}", aofFrequency: "string", rdbEnabled: "${bool}", rdbFrequency: "string"}, port: "${int}"}}
    );
  }
}
