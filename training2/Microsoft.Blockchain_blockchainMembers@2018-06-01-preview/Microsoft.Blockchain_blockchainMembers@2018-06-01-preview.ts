import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlockchainBlockchainmembersProps extends IAzAPIBaseProps {
/**
   * Gets or sets the blockchain member Sku.
   */
readonly sku?: Sku;

/**
   * Gets or sets the consortium for the blockchain member.
   */
readonly consortium?: string;

/**
   * Sets the managed consortium management account password.
   */
readonly consortiumManagementAccountPassword?: string;

/**
   * Gets the display name of the member in the consortium.
   */
readonly consortiumMemberDisplayName?: string;

/**
   * Gets the role of the member in the consortium.
   */
readonly consortiumRole?: string;

/**
   * Gets or sets firewall rules
   */
readonly firewallRules?: FirewallRule[];

/**
   * Sets the basic auth password of the blockchain member.
   */
readonly password?: string;

/**
   * Gets or sets the blockchain protocol.
   */
readonly protocol?: 'Corda''NotSpecified''Parity''Quorum';

/**
   * Gets or sets the blockchain validator nodes Sku.
   */
readonly validatorNodesSku?: BlockchainMemberNodesSku;

/**
   * Gets or sets the end IP address of the firewall rule range.
   */
readonly endIpAddress?: string;

/**
   * Gets or sets the name of the firewall rules.
   */
readonly ruleName?: string;

/**
   * Gets or sets the start IP address of the firewall rule range.
   */
readonly startIpAddress?: string;

/**
   * Gets or sets the nodes capacity.
   */
readonly capacity?: number;

/**
   * Gets or sets Sku tier
   */
readonly tier?: string;
}

/**
 * BlockchainBlockchainmembers resource
 */
export class BlockchainBlockchainmembers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlockchainBlockchainmembersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blockchain/blockchainMembers@2018-06-01-preview";
  }

  protected getResourceBody(props: BlockchainBlockchainmembersProps): string {
    return JSON.stringify(
        {properties: {consortium: "string", consortiumManagementAccountPassword: "string", consortiumMemberDisplayName: "string", consortiumRole: "string", firewallRules: [{endIpAddress: "string", ruleName: "string", startIpAddress: "string"}], password: "string", protocol: "string", validatorNodesSku: {capacity: "${int}"}}, sku: {name: "string", tier: "string"}}
    );
  }
}
