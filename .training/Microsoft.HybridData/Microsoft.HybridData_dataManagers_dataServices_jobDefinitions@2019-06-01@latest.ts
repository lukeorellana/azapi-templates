import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybriddataDatamanagersDataservicesJobdefinitionsProps extends IAzAPIBaseProps {

}

/**
 * HybriddataDatamanagersDataservicesJobdefinitions resource
 */
export class HybriddataDatamanagersDataservicesJobdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybriddataDatamanagersDataservicesJobdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01";
  }

  protected getResourceBody(props: HybriddataDatamanagersDataservicesJobdefinitionsProps): string {
    return JSON.stringify(
        {properties: {customerSecrets: [{algorithm: "string", keyIdentifier: "string", keyValue: "string"}], dataSinkId: "string", dataSourceId: "string", lastModifiedTime: "string", runLocation: "string", schedules: [{name: "string", policyList: ["string"]}], state: "string", userConfirmation: "string"}}
    );
  }
}
