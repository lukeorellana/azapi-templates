import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationLocksProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
   */
readonly level: 'CanNotDelete''NotSpecified''ReadOnly';

/**
   * Notes about the lock. Maximum of 512 characters.
   */
readonly notes?: string;

/**
   * The owners of the lock.
   */
readonly owners?: ManagementLockOwner[];

/**
   * The application ID of the lock owner.
   */
readonly applicationId?: string;
}

/**
 * AuthorizationLocks resource
 */
export class AuthorizationLocks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationLocksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/locks@2020-05-01";
  }

  protected getResourceBody(props: AuthorizationLocksProps): string {
    return JSON.stringify(
        {properties: {level: "string", notes: "string", owners: [{applicationId: "string"}]}}
    );
  }
}
