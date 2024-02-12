import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersAccesscontrolrecordsProps extends IAzAPIBaseProps {

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
