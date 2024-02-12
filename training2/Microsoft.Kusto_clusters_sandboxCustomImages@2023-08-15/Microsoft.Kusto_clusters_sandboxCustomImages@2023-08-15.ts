import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersSandboxcustomimagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * The language name, for example Python.
   */
readonly language: 'Python';

/**
   * The version of the language.
   */
readonly languageVersion: string;

/**
   * The requirements file content.
   */
readonly requirementsFileContent?: string;
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
