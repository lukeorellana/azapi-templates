import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServicesWorkspacesApis resource
 */
export class ApicenterServicesWorkspacesApis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesApisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/apis@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesApisProps): string {
    return JSON.stringify(
        {properties: {contacts: [{email: "string", name: "string", url: "string"}], description: "string", externalDocumentation: [{description: "string", title: "string", url: "string"}], kind: "string", license: {identifier: "string", name: "string", url: "string"}, summary: "string", termsOfService: {url: "string"}, title: "string"}}
    );
  }
}
