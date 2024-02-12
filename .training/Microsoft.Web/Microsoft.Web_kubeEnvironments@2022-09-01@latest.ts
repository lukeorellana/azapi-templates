import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebKubeenvironmentsProps extends IAzAPIBaseProps {

}

/**
 * WebKubeenvironments resource
 */
export class WebKubeenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebKubeenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/kubeEnvironments@2022-09-01";
  }

  protected getResourceBody(props: WebKubeenvironmentsProps): string {
    return JSON.stringify(
        {properties: {aksResourceID: "string", appLogsConfiguration: {destination: "string", logAnalyticsConfiguration: {customerId: "string", sharedKey: "string"}}, arcConfiguration: {artifactsStorageType: "string", artifactStorageAccessMode: "string", artifactStorageClassName: "string", artifactStorageMountPath: "string", artifactStorageNodeName: "string", frontEndServiceConfiguration: {kind: "string"}, kubeConfig: "string"}, containerAppsConfiguration: {appSubnetResourceId: "string", controlPlaneSubnetResourceId: "string", daprAIInstrumentationKey: "string", dockerBridgeCidr: "string", platformReservedCidr: "string", platformReservedDnsIP: "string"}, environmentType: "string", internalLoadBalancerEnabled: "${bool}", staticIp: "string"}, kind: "string", extendedLocation: {name: "string"}}
    );
  }
}
