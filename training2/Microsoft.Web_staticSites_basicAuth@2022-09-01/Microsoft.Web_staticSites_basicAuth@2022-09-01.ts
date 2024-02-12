import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBasicauthProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:staticSites;

/**
   * State indicating if basic auth is enabled and for what environments it is active.
   */
readonly applicableEnvironmentsMode: string;

/**
   * The list of enabled environments for Basic Auth if ApplicableEnvironmentsMode is set to SpecifiedEnvironments.
   */
readonly environments?: string[];

/**
   * The password for basic auth.
   */
readonly password?: string;

/**
   * Url to the secret in Key Vault.
   */
readonly secretUrl?: string;
}

/**
 * WebStaticsitesBasicauth resource
 */
export class WebStaticsitesBasicauth extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBasicauthProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/basicAuth@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBasicauthProps): string {
    return JSON.stringify(
        {properties: {applicableEnvironmentsMode: "string", environments: ["string"], password: "string", secretUrl: "string"}, kind: "string"}
    );
  }
}
