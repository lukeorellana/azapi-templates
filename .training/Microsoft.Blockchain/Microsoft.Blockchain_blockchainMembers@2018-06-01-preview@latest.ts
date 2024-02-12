import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlockchainBlockchainmembersProps extends IAzAPIBaseProps {

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
