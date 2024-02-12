import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementExportsProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementExports resource
 */
export class CostmanagementExports extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementExportsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/exports@2022-10-01";
  }

  protected getResourceBody(props: CostmanagementExportsProps): string {
    return JSON.stringify(
        {properties: {definition: {dataSet: {configuration: {columns: ["string"]}, granularity: "Daily"}, timeframe: "string", timePeriod: {from: "string", to: "string"}, type: "string"}, deliveryInfo: {destination: {container: "string", resourceId: "string", rootFolderPath: "string", sasToken: "string", storageAccount: "string"}}, format: "Csv", partitionData: "${bool}", runHistory: {}, schedule: {recurrence: "string", recurrencePeriod: {from: "string", to: "string"}, status: "string"}}, eTag: "string"}
    );
  }
}
