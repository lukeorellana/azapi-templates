import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansVolumegroupsProps extends IAzAPIBaseProps {

}

/**
 * ElasticsanElasticsansVolumegroups resource
 */
export class ElasticsanElasticsansVolumegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticsanElasticsansVolumegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01";
  }

  protected getResourceBody(props: ElasticsanElasticsansVolumegroupsProps): string {
    return JSON.stringify(
        {properties: {encryption: "string", encryptionProperties: {identity: {userAssignedIdentity: "string"}, keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string"}}, networkAcls: {virtualNetworkRules: [{action: "Allow", id: "string"}]}, protocolType: "string"}}
    );
  }
}
