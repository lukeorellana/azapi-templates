import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySensitivitysettingsProps extends IAzAPIBaseProps {

}

/**
 * SecuritySensitivitysettings resource
 */
export class SecuritySensitivitysettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySensitivitysettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/sensitivitySettings@2023-02-15-preview";
  }

  protected getResourceBody(props: SecuritySensitivitysettingsProps): string {
    return JSON.stringify(
        {sensitiveInfoTypesIds: ["string"], sensitivityThresholdLabelId: "string", sensitivityThresholdLabelOrder: "${int}"}
    );
  }
}
