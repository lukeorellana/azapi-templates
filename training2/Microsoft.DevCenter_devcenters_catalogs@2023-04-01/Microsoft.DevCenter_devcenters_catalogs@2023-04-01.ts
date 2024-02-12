import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersCatalogsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:devcenters;

/**
   * Properties for an Azure DevOps catalog type.
   */
readonly adoGit?: GitCatalog;

/**
   * Properties for a GitHub catalog type.
   */
readonly gitHub?: GitCatalog;

/**
   * Git branch.
   */
readonly branch?: string;

/**
   * The folder where the catalog items can be found inside the repository.
   */
readonly path?: string;

/**
   * A reference to the Key Vault secret containing a security token to authenticate to a Git repository.
   */
readonly secretIdentifier?: string;

/**
   * Git URI.
   */
readonly uri?: string;
}

/**
 * DevcenterDevcentersCatalogs resource
 */
export class DevcenterDevcentersCatalogs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersCatalogsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters/catalogs@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersCatalogsProps): string {
    return JSON.stringify(
        {properties: {adoGit: {branch: "string", path: "string", secretIdentifier: "string", uri: "string"}, gitHub: {branch: "string", path: "string", secretIdentifier: "string", uri: "string"}}}
    );
  }
}
