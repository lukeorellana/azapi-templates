import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesProps extends IAzAPIBaseProps {

}

/**
 * WebSites resource
 */
export class WebSites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites@2022-09-01";
  }

  protected getResourceBody(props: WebSitesProps): string {
    return JSON.stringify(
        {properties: {clientAffinityEnabled: "${bool}", clientCertEnabled: "${bool}", clientCertExclusionPaths: "string", clientCertMode: "string", cloningInfo: {appSettingsOverrides: {}, cloneCustomHostNames: "${bool}", cloneSourceControl: "${bool}", configureLoadBalancing: "${bool}", correlationId: "string", hostingEnvironment: "string", overwrite: "${bool}", sourceWebAppId: "string", sourceWebAppLocation: "string", trafficManagerProfileId: "string", trafficManagerProfileName: "string"}, containerSize: "${int}", customDomainVerificationId: "string", dailyMemoryTimeQuota: "${int}", enabled: "${bool}", hostingEnvironmentProfile: {id: "string"}, hostNamesDisabled: "${bool}", hostNameSslStates: [{hostType: "string", name: "string", sslState: "string", thumbprint: "string", toUpdate: "${bool}", virtualIP: "string"}], httpsOnly: "${bool}", hyperV: "${bool}", isXenon: "${bool}", keyVaultReferenceIdentity: "string", managedEnvironmentId: "string", publicNetworkAccess: "string", redundancyMode: "string", reserved: "${bool}", scmSiteAlsoStopped: "${bool}", serverFarmId: "string", siteConfig: {acrUseManagedIdentityCreds: "${bool}", acrUserManagedIdentityID: "string", alwaysOn: "${bool}", apiDefinition: {url: "string"}, apiManagementConfig: {id: "string"}, appCommandLine: "string", appSettings: [{name: "string", value: "string"}], autoHealEnabled: "${bool}", autoHealRules: {actions: {actionType: "string", customAction: {exe: "string", parameters: "string"}, minProcessExecutionTime: "string"}, triggers: {privateBytesInKB: "${int}", requests: {count: "${int}", timeInterval: "string"}, slowRequests: {count: "${int}", path: "string", timeInterval: "string", timeTaken: "string"}, slowRequestsWithPath: [{count: "${int}", path: "string", timeInterval: "string", timeTaken: "string"}], statusCodes: [{count: "${int}", path: "string", status: "${int}", subStatus: "${int}", timeInterval: "string", win32Status: "${int}"}], statusCodesRange: [{count: "${int}", path: "string", statusCodes: "string", timeInterval: "string"}]}}, autoSwapSlotName: "string", azureStorageAccounts: {}, connectionStrings: [{connectionString: "string", name: "string", type: "string"}], cors: {allowedOrigins: ["string"], supportCredentials: "${bool}"}, defaultDocuments: ["string"], detailedErrorLoggingEnabled: "${bool}", documentRoot: "string", elasticWebAppScaleLimit: "${int}", experiments: {rampUpRules: [{actionHostName: "string", changeDecisionCallbackUrl: "string", changeIntervalInMinutes: "${int}", changeStep: "${int}", maxReroutePercentage: "${int}", minReroutePercentage: "${int}", name: "string", reroutePercentage: "${int}"}]}, ftpsState: "string", functionAppScaleLimit: "${int}", functionsRuntimeScaleMonitoringEnabled: "${bool}", handlerMappings: [{arguments: "string", extension: "string", scriptProcessor: "string"}], healthCheckPath: "string", http20Enabled: "${bool}", httpLoggingEnabled: "${bool}", ipSecurityRestrictions: [{action: "string", description: "string", headers: {}, ipAddress: "string", name: "string", priority: "${int}", subnetMask: "string", subnetTrafficTag: "${int}", tag: "string", vnetSubnetResourceId: "string", vnetTrafficTag: "${int}"}], ipSecurityRestrictionsDefaultAction: "string", javaContainer: "string", javaContainerVersion: "string", javaVersion: "string", keyVaultReferenceIdentity: "string", limits: {maxDiskSizeInMb: "${int}", maxMemoryInMb: "${int}", maxPercentageCpu: "${int}"}, linuxFxVersion: "string", loadBalancing: "string", localMySqlEnabled: "${bool}", logsDirectorySizeLimit: "${int}", managedPipelineMode: "string", managedServiceIdentityId: "${int}", metadata: [{name: "string", value: "string"}], minimumElasticInstanceCount: "${int}", minTlsVersion: "string", netFrameworkVersion: "string", nodeVersion: "string", numberOfWorkers: "${int}", phpVersion: "string", powerShellVersion: "string", preWarmedInstanceCount: "${int}", publicNetworkAccess: "string", publishingUsername: "string", push: {kind: "string", properties: {dynamicTagsJson: "string", isPushEnabled: "${bool}", tagsRequiringAuth: "string", tagWhitelistJson: "string"}}, pythonVersion: "string", remoteDebuggingEnabled: "${bool}", remoteDebuggingVersion: "string", requestTracingEnabled: "${bool}", requestTracingExpirationTime: "string", scmIpSecurityRestrictions: [{action: "string", description: "string", headers: {}, ipAddress: "string", name: "string", priority: "${int}", subnetMask: "string", subnetTrafficTag: "${int}", tag: "string", vnetSubnetResourceId: "string", vnetTrafficTag: "${int}"}], scmIpSecurityRestrictionsDefaultAction: "string", scmIpSecurityRestrictionsUseMain: "${bool}", scmMinTlsVersion: "string", scmType: "string", tracingOptions: "string", use32BitWorkerProcess: "${bool}", virtualApplications: [{physicalPath: "string", preloadEnabled: "${bool}", virtualDirectories: [{physicalPath: "string", virtualPath: "string"}], virtualPath: "string"}], vnetName: "string", vnetPrivatePortsCount: "${int}", vnetRouteAllEnabled: "${bool}", websiteTimeZone: "string", webSocketsEnabled: "${bool}", windowsFxVersion: "string", xManagedServiceIdentityId: "${int}"}, storageAccountRequired: "${bool}", virtualNetworkSubnetId: "string", vnetContentShareEnabled: "${bool}", vnetImagePullEnabled: "${bool}", vnetRouteAllEnabled: "${bool}"}, kind: "string", extendedLocation: {name: "string"}}
    );
  }
}
