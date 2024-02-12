import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataDatacontrollersProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataDatacontrollers resource
 */
export class AzurearcdataDatacontrollers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataDatacontrollersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/dataControllers@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataDatacontrollersProps): string {
    return JSON.stringify(
        {properties: {basicLoginInformation: {password: "string", username: "string"}, clusterId: "string", extensionId: "string", infrastructure: "string", lastUploadedDate: "string", logAnalyticsWorkspaceConfig: {primaryKey: "string", workspaceId: "string"}, logsDashboardCredential: {password: "string", username: "string"}, metricsDashboardCredential: {password: "string", username: "string"}, onPremiseProperty: {id: "string", publicSigningKey: "string", signingCertificateThumbprint: "string"}, uploadServicePrincipal: {authority: "string", clientId: "string", clientSecret: "string", tenantId: "string"}, uploadWatermark: {logs: "string", metrics: "string", usages: "string"}}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
