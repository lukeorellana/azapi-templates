import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySensitivitysettingsProps extends IAzAPIBaseProps {
/**
   * List of selected sensitive info types' IDs.
   */
readonly sensitiveInfoTypesIds: string[] Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * The id of the sensitivity threshold label. Any label at or above this rank will be considered sensitive.
   */
readonly sensitivityThresholdLabelId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * The order of the sensitivity threshold label. Any label at or above this order will be considered sensitive. If set to -1, sensitivity by labels is turned off
   */
readonly sensitivityThresholdLabelOrder?: number;
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
