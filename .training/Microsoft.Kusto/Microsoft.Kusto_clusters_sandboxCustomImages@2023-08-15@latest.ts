import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersSandboxcustomimagesProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersSandboxcustomimages resource
 */
export class KustoClustersSandboxcustomimages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersSandboxcustomimagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/sandboxCustomImages@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersSandboxcustomimagesProps): string {
    return JSON.stringify(
        {properties: {language: "Python", languageVersion: "string", requirementsFileContent: "string"}}
    );
  }
}
