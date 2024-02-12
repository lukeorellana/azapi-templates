import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersCatalogsProps extends IAzAPIBaseProps {

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
