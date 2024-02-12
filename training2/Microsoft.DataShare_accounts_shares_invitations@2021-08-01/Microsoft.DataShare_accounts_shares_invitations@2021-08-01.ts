import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesInvitationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:shares;

/**
   * The expiration date for the invitation and share subscription.
   */
readonly expirationDate?: string;

/**
   * The target Azure AD Id. Can't be combined with email.
   */
readonly targetActiveDirectoryId?: string;

/**
   * The email the invitation is directed to.
   */
readonly targetEmail?: string;

/**
   * The target user or application Id that invitation is being sent to.Must be specified along TargetActiveDirectoryId. This enables sendinginvitations to specific users or applications in an AD tenant.
   */
readonly targetObjectId?: string;
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
