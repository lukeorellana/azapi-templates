import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsEnvironmentsettingsEnvironmentsProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabaccountsLabsEnvironmentsettingsEnvironments resource
 */
export class LabservicesLabaccountsLabsEnvironmentsettingsEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsLabsEnvironmentsettingsEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsLabsEnvironmentsettingsEnvironmentsProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "string", resourceSets: {resourceSettingId: "string", vmResourceId: "string"}, uniqueIdentifier: "string"}}
    );
  }
}
