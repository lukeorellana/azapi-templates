import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfidentialledgerLedgersProps extends IAzAPIBaseProps {
/**
   * Object representing RunningState for Ledger.
   */
readonly runningState?: 'Active''Paused''Pausing''Resuming''Unknown';

/**
   * Array of all AAD based Security Principals.
   */
readonly aadBasedSecurityPrincipals?: AADBasedSecurityPrincipal[];

/**
   * Array of all cert based Security Principals.
   */
readonly certBasedSecurityPrincipals?: CertBasedSecurityPrincipal[];

/**
   * Type of Confidential Ledger
   */
readonly ledgerType?: 'Private''Public''Unknown';

/**
   * LedgerRole associated with the Security Principal of Ledger
   */
readonly ledgerRoleName?: 'Administrator''Contributor''Reader';

/**
   * UUID/GUID based Principal Id of the Security Principal
   */
readonly principalId?: string;

/**
   * UUID/GUID based Tenant Id of the Security Principal
   */
readonly tenantId?: string;

/**
   * Public key of the user cert (.pem or .cer)
   */
readonly cert?: string;

/**
   * LedgerRole associated with the Security Principal of Ledger
   */
readonly ledgerRoleName?: 'Administrator''Contributor''Reader';
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
