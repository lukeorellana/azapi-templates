import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersDisksProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsUsersDisks resource
 */
export class DevtestlabLabsUsersDisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersDisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users/disks@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersDisksProps): string {
    return JSON.stringify(
        {properties: {diskBlobName: "string", diskSizeGiB: "${int}", diskType: "string", diskUri: "string", leasedByLabVmId: "string", managedDiskId: "string", storageAccountId: "string"}}
    );
  }
}
