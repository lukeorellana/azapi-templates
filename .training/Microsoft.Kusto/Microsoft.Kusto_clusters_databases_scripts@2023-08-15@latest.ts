import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesScriptsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersDatabasesScripts resource
 */
export class KustoClustersDatabasesScripts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesScriptsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases/scripts@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesScriptsProps): string {
    return JSON.stringify(
        {properties: {continueOnErrors: "${bool}", forceUpdateTag: "string", scriptContent: "string", scriptUrl: "string", scriptUrlSasToken: "string"}}
    );
  }
}
