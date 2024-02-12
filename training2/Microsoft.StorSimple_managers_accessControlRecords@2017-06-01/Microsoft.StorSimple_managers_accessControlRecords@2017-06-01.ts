import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersAccesscontrolrecordsProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managers;

/**
   * The iSCSI initiator name (IQN).
   */
readonly initiatorName: string;
}

/**
 * StorsimpleManagersAccesscontrolrecords resource
 */
export class StorsimpleManagersAccesscontrolrecords extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersAccesscontrolrecordsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/accessControlRecords@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersAccesscontrolrecordsProps): string {
    return JSON.stringify(
        {properties: {initiatorName: "string"}, kind: "Series8000"}
    );
  }
}
