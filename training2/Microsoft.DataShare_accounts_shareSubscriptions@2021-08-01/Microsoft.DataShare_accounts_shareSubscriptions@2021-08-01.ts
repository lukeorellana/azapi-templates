import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesubscriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The expiration date of the share subscription.
   */
readonly expirationDate?: string;

/**
   * The invitation id.
   */
readonly invitationId: string;

/**
   * Source share location.
   */
readonly sourceShareLocation: string;
}

/**
 * DatashareAccountsSharesubscriptions resource
 */
export class DatashareAccountsSharesubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesubscriptionsProps): string {
    return JSON.stringify(
        {properties: {expirationDate: "string", invitationId: "string", sourceShareLocation: "string"}}
    );
  }
}
