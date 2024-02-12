import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlockchainBlockchainmembersTransactionnodesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:blockchainMembers;

/**
   * Gets or sets the firewall rules.
   */
readonly firewallRules?: FirewallRule[];

/**
   * Sets the transaction node dns endpoint basic auth password.
   */
readonly password?: string;

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
}

/**
 * BlockchainBlockchainmembersTransactionnodes resource
 */
export class BlockchainBlockchainmembersTransactionnodes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlockchainBlockchainmembersTransactionnodesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview";
  }

  protected getResourceBody(props: BlockchainBlockchainmembersTransactionnodesProps): string {
    return JSON.stringify(
        {properties: {firewallRules: [{endIpAddress: "string", ruleName: "string", startIpAddress: "string"}], password: "string"}}
    );
  }
}
