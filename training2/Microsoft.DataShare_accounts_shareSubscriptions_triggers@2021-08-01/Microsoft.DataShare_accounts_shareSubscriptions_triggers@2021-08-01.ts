import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesubscriptionsTriggersProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: ScheduleBased;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:shareSubscriptions;

/**
   * Kind of synchronization on trigger.
   */
readonly kind: 'ScheduleBased';

/**
   * Recurrence Interval
   */
readonly recurrenceInterval: 'Day''Hour';

/**
   * Synchronization mode
   */
readonly synchronizationMode?: 'FullSync''Incremental';

/**
   * Synchronization time
   */
readonly synchronizationTime: string;
}

/**
 * DatashareAccountsSharesubscriptionsTriggers resource
 */
export class DatashareAccountsSharesubscriptionsTriggers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesubscriptionsTriggersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesubscriptionsTriggersProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
