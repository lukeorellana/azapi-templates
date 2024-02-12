import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsPartnersProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsPartners resource
 */
export class LogicIntegrationaccountsPartners extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsPartnersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/partners@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsPartnersProps): string {
    return JSON.stringify(
        {properties: {content: {b2b: {businessIdentities: [{qualifier: "string", value: "string"}]}}, partnerType: "string"}}
    );
  }
}
