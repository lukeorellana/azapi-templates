import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfidentialledgerLedgersProps extends IAzAPIBaseProps {

}

/**
 * ConfidentialledgerLedgers resource
 */
export class ConfidentialledgerLedgers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConfidentialledgerLedgersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConfidentialLedger/ledgers@2023-01-26-preview";
  }

  protected getResourceBody(props: ConfidentialledgerLedgersProps): string {
    return JSON.stringify(
        {properties: {aadBasedSecurityPrincipals: [{ledgerRoleName: "string", principalId: "string", tenantId: "string"}], certBasedSecurityPrincipals: [{cert: "string", ledgerRoleName: "string"}], ledgerType: "string"}, runningState: "string"}
    );
  }
}
