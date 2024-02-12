import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsDeploymentsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringAppsDeployments resource
 */
export class AppplatformSpringAppsDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringAppsDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringAppsDeploymentsProps): string {
    return JSON.stringify(
        {properties: {active: "${bool}", deploymentSettings: {addonConfigs: {}, containerProbeSettings: {disableProbe: "${bool}"}, environmentVariables: {}, livenessProbe: {disableProbe: "${bool}", failureThreshold: "${int}", initialDelaySeconds: "${int}", periodSeconds: "${int}", probeAction: {type: "string"}, successThreshold: "${int}", timeoutSeconds: "${int}"}, readinessProbe: {disableProbe: "${bool}", failureThreshold: "${int}", initialDelaySeconds: "${int}", periodSeconds: "${int}", probeAction: {type: "string"}, successThreshold: "${int}", timeoutSeconds: "${int}"}, resourceRequests: {cpu: "string", memory: "string"}, scale: {maxReplicas: "${int}", minReplicas: "${int}", rules: [{azureQueue: {auth: [{secretRef: "string", triggerParameter: "string"}], queueLength: "${int}", queueName: "string"}, custom: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}, type: "string"}, http: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}, name: "string", tcp: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}}]}, startupProbe: {disableProbe: "${bool}", failureThreshold: "${int}", initialDelaySeconds: "${int}", periodSeconds: "${int}", probeAction: {type: "string"}, successThreshold: "${int}", timeoutSeconds: "${int}"}, terminationGracePeriodSeconds: "${int}"}, source: {version: "string", type: "string"}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
