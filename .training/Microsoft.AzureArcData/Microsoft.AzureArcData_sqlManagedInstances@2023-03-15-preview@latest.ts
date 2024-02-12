import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlmanagedinstancesProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlmanagedinstances resource
 */
export class AzurearcdataSqlmanagedinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlmanagedinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlmanagedinstancesProps): string {
    return JSON.stringify(
        {properties: {activeDirectoryInformation: {keytabInformation: {keytab: "string"}}, admin: "string", basicLoginInformation: {password: "string", username: "string"}, clusterId: "string", dataControllerId: "string", endTime: "string", extensionId: "string", k8sRaw: {spec: {replicas: "${int}", scheduling: {default: {resources: {limits: {}, requests: {}}}}}}, lastUploadedDate: "string", licenseType: "string", startTime: "string"}, sku: {capacity: "${int}", dev: "${bool}", family: "string", name: "vCore", size: "string", tier: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
