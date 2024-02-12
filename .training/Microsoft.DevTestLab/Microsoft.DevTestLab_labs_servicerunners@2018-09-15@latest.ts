import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsServicerunnersProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsServicerunners resource
 */
export class DevtestlabLabsServicerunners extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsServicerunnersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/servicerunners@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsServicerunnersProps): string {
    return JSON.stringify(
        
    );
  }
}
