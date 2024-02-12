import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceUsersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Determines the type of application which send the create user request. Default is legacy portal.
   */
readonly appType?: 'developerPortal''portal';

/**
   * Determines the type of confirmation e-mail that will be sent to the newly created user.
   */
readonly confirmation?: 'invite''signup';

/**
   * Email address. Must not be empty and must be unique within the service instance.
   */
readonly email: string;

/**
   * First name.
   */
readonly firstName: string;

/**
   * Collection of user identities.
   */
readonly identities?: UserIdentityContract[];

/**
   * Last name.
   */
readonly lastName: string;

/**
   * Optional note about a user set by the administrator.
   */
readonly note?: string;

/**
   * User Password. If no value is provided, a default password is generated.
   */
readonly password?: string;

/**
   * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
   */
readonly state?: 'active''blocked''deleted''pending';

/**
   * Identifier value within provider.
   */
readonly id?: string;

/**
   * Identity provider name.
   */
readonly provider?: string;
}

/**
 * ApimanagementServiceUsers resource
 */
export class ApimanagementServiceUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/users@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceUsersProps): string {
    return JSON.stringify(
        {properties: {appType: "string", confirmation: "string", email: "string", firstName: "string", identities: [{id: "string", provider: "string"}], lastName: "string", note: "string", password: "string", state: "string"}}
    );
  }
}
