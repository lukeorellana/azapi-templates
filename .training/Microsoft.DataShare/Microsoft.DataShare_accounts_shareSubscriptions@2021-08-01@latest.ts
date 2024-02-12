import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesubscriptionsProps extends IAzAPIBaseProps {

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
