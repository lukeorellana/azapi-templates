import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactories resource
 */
export class DatafactoryFactories extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesProps): string {
    return JSON.stringify(
        {properties: {encryption: {identity: {userAssignedIdentity: "string"}, keyName: "string", keyVersion: "string", vaultBaseUrl: "string"}, globalParameters: {}, publicNetworkAccess: "string", purviewConfiguration: {purviewResourceId: "string"}, repoConfiguration: {accountName: "string", collaborationBranch: "string", disablePublish: "${bool}", lastCommitId: "string", repositoryName: "string", rootFolder: "string", type: "string"}}}
    );
  }
}
