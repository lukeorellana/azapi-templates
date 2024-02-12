import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
   */
readonly assessmentSolutionId?: string;

/**
   * The ARM id of the storage account used for interactions when public access is disabled.
   */
readonly customerStorageAccountArmId?: string;

/**
   * The ARM id of service map workspace created by customer.
   */
readonly customerWorkspaceId?: string;

/**
   * Location of service map workspace created by customer.
   */
readonly customerWorkspaceLocation?: string;

/**
   * Assessment project status.
   */
readonly projectStatus?: 'Active''Inactive';

/**
   * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
   */
readonly publicNetworkAccess?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
