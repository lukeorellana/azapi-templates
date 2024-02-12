import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlockchainBlockchainmembersTransactionnodesProps extends IAzAPIBaseProps {

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
