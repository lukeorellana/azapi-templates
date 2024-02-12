import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesSynchronizationsettingsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: ScheduleBased;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:shares;

/**
   * Kind of synchronization setting.
   */
readonly kind: 'ScheduleBased';

/**
   * Recurrence Interval
   */
readonly recurrenceInterval: 'Day''Hour';

/**
   * Synchronization time
   */
readonly synchronizationTime: string;
}

/**
 * DatashareAccountsSharesSynchronizationsettings resource
 */
export class DatashareAccountsSharesSynchronizationsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesSynchronizationsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesSynchronizationsettingsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
