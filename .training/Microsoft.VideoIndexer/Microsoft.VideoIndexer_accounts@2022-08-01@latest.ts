import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface VideoindexerAccountsProps extends IAzAPIBaseProps {

}

/**
 * VideoindexerAccounts resource
 */
export class VideoindexerAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: VideoindexerAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.VideoIndexer/accounts@2022-08-01";
  }

  protected getResourceBody(props: VideoindexerAccountsProps): string {
    return JSON.stringify(
        {properties: {accountId: "string", mediaServices: {resourceId: "string", userAssignedIdentity: "string"}}}
    );
  }
}
