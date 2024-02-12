import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesHostnamebindingsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesHostnamebindings resource
 */
export class WebSitesHostnamebindings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesHostnamebindingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/hostNameBindings@2022-09-01";
  }

  protected getResourceBody(props: WebSitesHostnamebindingsProps): string {
    return JSON.stringify(
        {properties: {azureResourceName: "string", azureResourceType: "string", customHostNameDnsRecordType: "string", domainId: "string", hostNameType: "string", siteName: "string", sslState: "string", thumbprint: "string"}, kind: "string"}
    );
  }
}
