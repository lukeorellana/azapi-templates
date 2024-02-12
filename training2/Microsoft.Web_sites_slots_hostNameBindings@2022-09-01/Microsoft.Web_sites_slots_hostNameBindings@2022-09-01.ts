import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsHostnamebindingsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Azure resource name.
   */
readonly azureResourceName?: string;

/**
   * Azure resource type.
   */
readonly azureResourceType?: 'TrafficManager''Website';

/**
   * Custom DNS record type.
   */
readonly customHostNameDnsRecordType?: 'A''CName';

/**
   * Fully qualified ARM domain resource URI.
   */
readonly domainId?: string;

/**
   * Hostname type.
   */
readonly hostNameType?: 'Managed''Verified';

/**
   * App Service app name.
   */
readonly siteName?: string;

/**
   * SSL type
   */
readonly sslState?: 'Disabled''IpBasedEnabled''SniEnabled';

/**
   * SSL certificate thumbprint
   */
readonly thumbprint?: string;
}

/**
 * WebSitesSlotsHostnamebindings resource
 */
export class WebSitesSlotsHostnamebindings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsHostnamebindingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/hostNameBindings@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsHostnamebindingsProps): string {
    return JSON.stringify(
        {properties: {azureResourceName: "string", azureResourceType: "string", customHostNameDnsRecordType: "string", domainId: "string", hostNameType: "string", siteName: "string", sslState: "string", thumbprint: "string"}, kind: "string"}
    );
  }
}
