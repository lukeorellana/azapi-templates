import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsEnvironmentsettingsProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabaccountsLabsEnvironmentsettings resource
 */
export class LabservicesLabaccountsLabsEnvironmentsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsLabsEnvironmentsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsLabsEnvironmentsettingsProps): string {
    return JSON.stringify(
        {properties: {configurationState: "string", description: "string", provisioningState: "string", resourceSettings: {galleryImageResourceId: "string", referenceVm: {password: "string", userName: "string"}, size: "string"}, title: "string", uniqueIdentifier: "string"}}
    );
  }
}
