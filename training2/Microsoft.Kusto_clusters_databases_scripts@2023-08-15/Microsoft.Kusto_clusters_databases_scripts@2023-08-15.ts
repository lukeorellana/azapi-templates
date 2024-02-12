import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesScriptsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Flag that indicates whether to continue if one of the command fails.
   */
readonly continueOnErrors?: bool;

/**
   * A unique string. If changed the script will be applied again.
   */
readonly forceUpdateTag?: string;

/**
   * The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties.
   */
readonly scriptContent?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The url to the KQL script blob file. Must not be used together with scriptContent property
   */
readonly scriptUrl?: string;

/**
   * The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property.
   */
readonly scriptUrlSasToken?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;
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
