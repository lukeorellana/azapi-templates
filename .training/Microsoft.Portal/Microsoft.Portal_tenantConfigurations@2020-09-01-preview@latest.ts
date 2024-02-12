import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PortalTenantconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * PortalTenantconfigurations resource
 */
export class PortalTenantconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PortalTenantconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Portal/tenantConfigurations@2020-09-01-preview";
  }

  protected getResourceBody(props: PortalTenantconfigurationsProps): string {
    return JSON.stringify(
        {properties: {enforcePrivateMarkdownStorage: "${bool}"}}
    );
  }
}
