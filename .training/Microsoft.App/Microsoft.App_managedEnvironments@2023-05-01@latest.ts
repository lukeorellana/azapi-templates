import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsProps extends IAzAPIBaseProps {

}

/**
 * AppManagedenvironments resource
 */
export class AppManagedenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsProps): string {
    return JSON.stringify(
        {properties: {appLogsConfiguration: {destination: "string", logAnalyticsConfiguration: {customerId: "string", sharedKey: "string"}}, customDomainConfiguration: {certificatePassword: "string", dnsSuffix: "string"}, daprAIConnectionString: "string", daprAIInstrumentationKey: "string", daprConfiguration: {}, infrastructureResourceGroup: "string", kedaConfiguration: {}, peerAuthentication: {mtls: {enabled: "${bool}"}}, vnetConfiguration: {dockerBridgeCidr: "string", infrastructureSubnetId: "string", internal: "${bool}", platformReservedCidr: "string", platformReservedDnsIP: "string"}, workloadProfiles: [{maximumCount: "${int}", minimumCount: "${int}", name: "string", workloadProfileType: "string"}], zoneRedundant: "${bool}"}, kind: "string"}
    );
  }
}
