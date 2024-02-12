import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesInvitationsProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccountsSharesInvitations resource
 */
export class DatashareAccountsSharesInvitations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesInvitationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shares/invitations@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesInvitationsProps): string {
    return JSON.stringify(
        {properties: {expirationDate: "string", targetActiveDirectoryId: "string", targetEmail: "string", targetObjectId: "string"}}
    );
  }
}
