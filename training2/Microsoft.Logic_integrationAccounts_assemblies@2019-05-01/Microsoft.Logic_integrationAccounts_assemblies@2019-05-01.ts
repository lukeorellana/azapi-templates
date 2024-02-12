import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsAssembliesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The assembly culture.
   */
readonly assemblyCulture?: string;

/**
   * The assembly name.
   */
readonly assemblyName: string;

/**
   * The assembly public key token.
   */
readonly assemblyPublicKeyToken?: string;

/**
   * The assembly version.
   */
readonly assemblyVersion?: string;

/**
   * The artifact changed time.
   */
readonly changedTime?: string;

/**
   * Anything
   */
readonly content?: For Bicep, you can use theany()function.;

/**
   * The content link.
   */
readonly contentLink?: ContentLink;

/**
   * The content type.
   */
readonly contentType?: string;

/**
   * The artifact creation time.
   */
readonly createdTime?: string;

/**
   * Anything
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The content link URI.
   */
readonly uri?: string;
}

/**
 * LogicIntegrationaccountsAssemblies resource
 */
export class LogicIntegrationaccountsAssemblies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsAssembliesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/assemblies@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsAssembliesProps): string {
    return JSON.stringify(
        {properties: {assemblyCulture: "string", assemblyName: "string", assemblyPublicKeyToken: "string", assemblyVersion: "string", changedTime: "string", contentLink: {uri: "string"}, contentType: "string", createdTime: "string"}}
    );
  }
}
