import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsProps extends IAzAPIBaseProps {
/**
   * Kind of the resource
   */
readonly kind?: string;

/**
   * Entity tag is used for comparing two or more entities from the same requested resource.
   */
readonly etag?: string;

/**
   * The security connector environment data.
   */
readonly environmentData?: EnvironmentData;

/**
   * The multi cloud resource's cloud name.
   */
readonly environmentName?: 'AWS''Azure''AzureDevOps''GCP''GitLab''Github';

/**
   * The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector).
   */
readonly hierarchyIdentifier?: string;

/**
   * A collection of offerings for the security connector.
   */
readonly offerings?: CloudOffering[];

/**
   * Set the object type
   */
readonly environmentType: AwsAccountAzureDevOpsScopeGcpProjectGithubScopeGitlabScope;

/**
   * The type of the environment data.
   */
readonly environmentType: 'AwsAccount';

/**
   * The AWS account's organizational data
   */
readonly organizationalData?: AwsOrganizationalData;

/**
   * list of regions to scan
   */
readonly regions?: string[];

/**
   * Scan interval in hours (value should be between 1-hour to 24-hours)
   */
readonly scanInterval?: number;

/**
   * Set the object type
   */
readonly organizationMembershipType: MemberOrganization;

/**
   * The multi cloud account's membership type in the organization
   */
readonly organizationMembershipType: 'Member';

/**
   * If the multi cloud account is not of membership type organization, this will be the ID of the account's parent
   */
readonly parentHierarchyId?: string;

/**
   * The multi cloud account's membership type in the organization
   */
readonly organizationMembershipType: 'Organization';

/**
   * If the multi cloud account is of membership type organization, list of accounts excluded from offering
   */
readonly excludedAccountIds?: string[];

/**
   * If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset
   */
readonly stacksetName?: string;

/**
   * The type of the environment data.
   */
readonly environmentType: 'AzureDevOpsScope';

/**
   * The type of the environment data.
   */
readonly environmentType: 'GcpProject';

/**
   * The Gcp project's organizational data
   */
readonly organizationalData?: GcpOrganizationalData;

/**
   * The Gcp project's details
   */
readonly projectDetails?: GcpProjectDetails;

/**
   * Scan interval in hours (value should be between 1-hour to 24-hours)
   */
readonly scanInterval?: number;

/**
   * Set the object type
   */
readonly organizationMembershipType: MemberOrganization;

/**
   * The multi cloud account's membership type in the organization
   */
readonly organizationMembershipType: 'Member';

/**
   * The GCP management project number from organizational onboarding
   */
readonly managementProjectNumber?: string;

/**
   * If the multi cloud account is not of membership type organization, this will be the ID of the project's parent
   */
readonly parentHierarchyId?: string;

/**
   * The multi cloud account's membership type in the organization
   */
readonly organizationMembershipType: 'Organization';

/**
   * If the multi cloud account is of membership type organization, list of accounts excluded from offering
   */
readonly excludedProjectNumbers?: string[];

/**
   * The service account email address which represents the organization level permissions container.
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The GCP workload identity provider id which represents the permissions required to auto provision security connectors
   */
readonly workloadIdentityProviderId?: string;

/**
   * The GCP Project id
   */
readonly projectId?: string;

/**
   * The unique GCP Project number
   */
readonly projectNumber?: string;

/**
   * The type of the environment data.
   */
readonly environmentType: 'GithubScope';

/**
   * The type of the environment data.
   */
readonly environmentType: 'GitlabScope';

/**
   * Set the object type
   */
readonly offeringType: CspmMonitorAwsCspmMonitorAzureDevOpsCspmMonitorGcpCspmMonitorGithubCspmMonitorGitLabDefenderCspmAwsDefenderCspmGcpDefenderForContainersAwsDefenderForContainersGcpDefenderForDatabasesAwsDefenderForDatabasesGcpDefenderForDevOpsAzureDevOpsDefenderForDevOpsGithubDefenderForDevOpsGitLabDefenderForServersAwsDefenderForServersGcpInformationProtectionAws;

/**
   * The type of the security offering.
   */
readonly offeringType: 'CspmMonitorAws';

/**
   * The native cloud connection configuration
   */
readonly nativeCloudConnection?: CspmMonitorAwsOfferingNativeCloudConnection;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'CspmMonitorAzureDevOps';

/**
   * The type of the security offering.
   */
readonly offeringType: 'CspmMonitorGcp';

/**
   * The native cloud connection configuration
   */
readonly nativeCloudConnection?: CspmMonitorGcpOfferingNativeCloudConnection;

/**
   * The service account email address in GCP for this offering
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The GCP workload identity provider id for the offering
   */
readonly workloadIdentityProviderId?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'CspmMonitorGithub';

/**
   * The type of the security offering.
   */
readonly offeringType: 'CspmMonitorGitLab';

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderCspmAws';

/**
   * Defenders CSPM Cloud infrastructure entitlement management (CIEM) offering configurations
   */
readonly ciem?: DefenderCspmAwsOfferingCiem;

/**
   * The databases DSPM configuration
   */
readonly databasesDspm?: DefenderCspmAwsOfferingDatabasesDspm;

/**
   * The Microsoft Defender Data Sensitivity discovery configuration
   */
readonly dataSensitivityDiscovery?: DefenderCspmAwsOfferingDataSensitivityDiscovery;

/**
   * The Microsoft Defender container agentless discovery K8s configuration
   */
readonly mdcContainersAgentlessDiscoveryK8s?: DefenderCspmAwsOfferingMdcContainersAgentlessDiscove...;

/**
   * The Microsoft Defender container image assessment configuration
   */
readonly mdcContainersImageAssessment?: DefenderCspmAwsOfferingMdcContainersImageAssessment;

/**
   * The Microsoft Defender for Server VM scanning configuration
   */
readonly vmScanners?: DefenderCspmAwsOfferingVmScanners;

/**
   * Defender CSPM CIEM discovery configuration
   */
readonly ciemDiscovery?: DefenderCspmAwsOfferingCiemDiscovery;

/**
   * Defender CSPM CIEM AWS OIDC (open id connect) configuration
   */
readonly ciemOidc?: DefenderCspmAwsOfferingCiemOidc;

/**
   * The cloud role ARN in AWS for CIEM discovery
   */
readonly cloudRoleArn?: string;

/**
   * the azure active directory app name used of authenticating against AWS
   */
readonly azureActiveDirectoryAppName?: string;

/**
   * The cloud role ARN in AWS for CIEM oidc connection
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is databases DSPM protection enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is Microsoft Defender Data Sensitivity discovery enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is Microsoft Defender container agentless discovery K8s enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is Microsoft Defender container image assessment enabled
   */
readonly enabled?: bool;

/**
   * configuration for Microsoft Defender for Server VM scanning
   */
readonly configuration?: DefenderCspmAwsOfferingVmScannersConfiguration;

/**
   * Is Microsoft Defender for Server VM scanning enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * VM tags that indicates that VM should not be scanned
   */
readonly exclusionTags?: DefenderCspmAwsOfferingVmScannersConfigurationExclus...;

/**
   * The scanning mode for the VM scan.
   */
readonly scanningMode?: 'Default';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderCspmGcp';

/**
   * GCP Defenders CSPM Cloud infrastructure entitlement management (CIEM) discovery offering configurations
   */
readonly ciemDiscovery?: DefenderCspmGcpOfferingCiemDiscovery;

/**
   * The Microsoft Defender Data Sensitivity discovery configuration
   */
readonly dataSensitivityDiscovery?: DefenderCspmGcpOfferingDataSensitivityDiscovery;

/**
   * The Microsoft Defender Container agentless discovery configuration
   */
readonly mdcContainersAgentlessDiscoveryK8s?: DefenderCspmGcpOfferingMdcContainersAgentlessDiscove...;

/**
   * The Microsoft Defender Container image assessment configuration
   */
readonly mdcContainersImageAssessment?: DefenderCspmGcpOfferingMdcContainersImageAssessment;

/**
   * The Microsoft Defender for Server VM scanning configuration
   */
readonly vmScanners?: DefenderCspmGcpOfferingVmScanners;

/**
   * the azure active directory app name used of authenticating against GCP workload identity federation
   */
readonly azureActiveDirectoryAppName?: string;

/**
   * The service account email address in GCP for CIEM discovery offering
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The GCP workload identity provider id for CIEM discovery offering
   */
readonly workloadIdentityProviderId?: string;

/**
   * Is Microsoft Defender Data Sensitivity discovery enabled
   */
readonly enabled?: bool;

/**
   * The service account email address in GCP for this feature
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The workload identity provider id in GCP for this feature
   */
readonly workloadIdentityProviderId?: string;

/**
   * Is Microsoft Defender container agentless discovery enabled
   */
readonly enabled?: bool;

/**
   * The service account email address in GCP for this feature
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The workload identity provider id in GCP for this feature
   */
readonly workloadIdentityProviderId?: string;

/**
   * Is Microsoft Defender container image assessment enabled
   */
readonly enabled?: bool;

/**
   * The service account email address in GCP for this feature
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The workload identity provider id in GCP for this feature
   */
readonly workloadIdentityProviderId?: string;

/**
   * configuration for Microsoft Defender for Server VM scanning
   */
readonly configuration?: DefenderCspmGcpOfferingVmScannersConfiguration;

/**
   * Is Microsoft Defender for Server VM scanning enabled
   */
readonly enabled?: bool;

/**
   * VM tags that indicates that VM should not be scanned
   */
readonly exclusionTags?: DefenderCspmGcpOfferingVmScannersConfigurationExclus...;

/**
   * The scanning mode for the VM scan.
   */
readonly scanningMode?: 'Default';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForContainersAws';

/**
   * Is audit logs pipeline auto provisioning enabled
   */
readonly autoProvisioning?: bool;

/**
   * The cloudwatch to kinesis connection configuration
   */
readonly cloudWatchToKinesis?: DefenderForContainersAwsOfferingCloudWatchToKinesis;

/**
   * The container vulnerability assessment configuration
   */
readonly containerVulnerabilityAssessment?: DefenderForContainersAwsOfferingContainerVulnerabili...;

/**
   * The container vulnerability assessment task configuration
   */
readonly containerVulnerabilityAssessmentTask?: DefenderForContainersAwsOfferingContainerVulnerabili...;

/**
   * Enable container vulnerability assessment feature
   */
readonly enableContainerVulnerabilityAssessment?: bool;

/**
   * The kinesis to s3 connection configuration
   */
readonly kinesisToS3?: DefenderForContainersAwsOfferingKinesisToS3;

/**
   * The retention time in days of kube audit logs set on the CloudWatch log group
   */
readonly kubeAuditRetentionTime?: number;

/**
   * The kubernetes to scuba connection configuration
   */
readonly kubernetesScubaReader?: DefenderForContainersAwsOfferingKubernetesScubaReade...;

/**
   * The kubernetes service connection configuration
   */
readonly kubernetesService?: DefenderForContainersAwsOfferingKubernetesService;

/**
   * The Microsoft Defender container agentless discovery K8s configuration
   */
readonly mdcContainersAgentlessDiscoveryK8s?: DefenderForContainersAwsOfferingMdcContainersAgentle...;

/**
   * The Microsoft Defender container image assessment configuration
   */
readonly mdcContainersImageAssessment?: DefenderForContainersAwsOfferingMdcContainersImageAs...;

/**
   * The externalId used by the data reader to prevent the confused deputy attack
   */
readonly scubaExternalId?: string;

/**
   * The cloud role ARN in AWS used by CloudWatch to transfer data into Kinesis
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS used by Kinesis to transfer data into S3
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS for this feature used for reading data
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS for this feature used for provisioning resources
   */
readonly cloudRoleArn?: string;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is Microsoft Defender container agentless discovery K8s enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is Microsoft Defender container image assessment enabled
   */
readonly enabled?: bool;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForContainersGcp';

/**
   * Is audit logs data collection enabled
   */
readonly auditLogsAutoProvisioningFlag?: bool;

/**
   * The native cloud connection configuration
   */
readonly dataPipelineNativeCloudConnection?: DefenderForContainersGcpOfferingDataPipelineNativeCl...;

/**
   * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
   */
readonly defenderAgentAutoProvisioningFlag?: bool;

/**
   * The Microsoft Defender Container agentless discovery configuration
   */
readonly mdcContainersAgentlessDiscoveryK8s?: DefenderForContainersGcpOfferingMdcContainersAgentle...;

/**
   * The Microsoft Defender Container image assessment configuration
   */
readonly mdcContainersImageAssessment?: DefenderForContainersGcpOfferingMdcContainersImageAs...;

/**
   * The native cloud connection configuration
   */
readonly nativeCloudConnection?: DefenderForContainersGcpOfferingNativeCloudConnectio...;

/**
   * Is Policy Kubernetes agent auto provisioning enabled
   */
readonly policyAgentAutoProvisioningFlag?: bool;

/**
   * The data collection service account email address in GCP for this offering
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The data collection GCP workload identity provider id for this offering
   */
readonly workloadIdentityProviderId?: string;

/**
   * Is Microsoft Defender container agentless discovery enabled
   */
readonly enabled?: bool;

/**
   * The service account email address in GCP for this feature
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The workload identity provider id in GCP for this feature
   */
readonly workloadIdentityProviderId?: string;

/**
   * Is Microsoft Defender container image assessment enabled
   */
readonly enabled?: bool;

/**
   * The service account email address in GCP for this feature
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The workload identity provider id in GCP for this feature
   */
readonly workloadIdentityProviderId?: string;

/**
   * The service account email address in GCP for this offering
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The GCP workload identity provider id for this offering
   */
readonly workloadIdentityProviderId?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForDatabasesAws';

/**
   * The ARC autoprovisioning configuration
   */
readonly arcAutoProvisioning?: DefenderFoDatabasesAwsOfferingArcAutoProvisioning;

/**
   * The databases data security posture management (DSPM) configuration
   */
readonly databasesDspm?: DefenderFoDatabasesAwsOfferingDatabasesDspm;

/**
   * The RDS configuration
   */
readonly rds?: DefenderFoDatabasesAwsOfferingRds;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Configuration for servers Arc auto provisioning
   */
readonly configuration?: DefenderFoDatabasesAwsOfferingArcAutoProvisioningCon...;

/**
   * Is arc auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * Optional Arc private link scope resource id to link the Arc agent
   */
readonly privateLinkScope?: string;

/**
   * Optional http proxy endpoint to use for the Arc agent
   */
readonly proxy?: string;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is databases data security posture management (DSPM) protection enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Is RDS protection enabled
   */
readonly enabled?: bool;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForDatabasesGcp';

/**
   * The ARC autoprovisioning configuration
   */
readonly arcAutoProvisioning?: DefenderForDatabasesGcpOfferingArcAutoProvisioning;

/**
   * The native cloud connection configuration
   */
readonly defenderForDatabasesArcAutoProvisioning?: DefenderForDatabasesGcpOfferingDefenderForDatabasesA...;

/**
   * Configuration for servers Arc auto provisioning
   */
readonly configuration?: DefenderForDatabasesGcpOfferingArcAutoProvisioningCo...;

/**
   * Is arc auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * Optional Arc private link scope resource id to link the Arc agent
   */
readonly privateLinkScope?: string;

/**
   * Optional http proxy endpoint to use for the Arc agent
   */
readonly proxy?: string;

/**
   * The service account email address in GCP for this offering
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The GCP workload identity provider id for this offering
   */
readonly workloadIdentityProviderId?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForDevOpsAzureDevOps';

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForDevOpsGithub';

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForDevOpsGitLab';

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForServersAws';

/**
   * The ARC autoprovisioning configuration
   */
readonly arcAutoProvisioning?: DefenderForServersAwsOfferingArcAutoProvisioning;

/**
   * The Defender for servers connection configuration
   */
readonly defenderForServers?: DefenderForServersAwsOfferingDefenderForServers;

/**
   * The Microsoft Defender for Endpoint autoprovisioning configuration
   */
readonly mdeAutoProvisioning?: DefenderForServersAwsOfferingMdeAutoProvisioning;

/**
   * configuration for the servers offering subPlan
   */
readonly subPlan?: DefenderForServersAwsOfferingSubPlan;

/**
   * The Vulnerability Assessment autoprovisioning configuration
   */
readonly vaAutoProvisioning?: DefenderForServersAwsOfferingVaAutoProvisioning;

/**
   * The Microsoft Defender for Server VM scanning configuration
   */
readonly vmScanners?: DefenderForServersAwsOfferingVmScanners;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * Configuration for servers Arc auto provisioning
   */
readonly configuration?: DefenderForServersAwsOfferingArcAutoProvisioningConf...;

/**
   * Is arc auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * Optional Arc private link scope resource id to link the Arc agent
   */
readonly privateLinkScope?: string;

/**
   * Optional HTTP proxy endpoint to use for the Arc agent
   */
readonly proxy?: string;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * configuration for Microsoft Defender for Endpoint autoprovisioning
   */
readonly configuration?: For Bicep, you can use theany()function.;

/**
   * Is Microsoft Defender for Endpoint auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * The available sub plans
   */
readonly type?: 'P1''P2';

/**
   * configuration for Vulnerability Assessment autoprovisioning
   */
readonly configuration?: DefenderForServersAwsOfferingVaAutoProvisioningConfi...;

/**
   * Is Vulnerability Assessment auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
   */
readonly type?: 'Qualys''TVM';

/**
   * configuration for Microsoft Defender for Server VM scanning
   */
readonly configuration?: DefenderForServersAwsOfferingVmScannersConfiguration;

/**
   * Is Microsoft Defender for Server VM scanning enabled
   */
readonly enabled?: bool;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;

/**
   * VM tags that indicates that VM should not be scanned
   */
readonly exclusionTags?: DefenderForServersAwsOfferingVmScannersConfiguration...;

/**
   * The scanning mode for the VM scan.
   */
readonly scanningMode?: 'Default';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'DefenderForServersGcp';

/**
   * The ARC autoprovisioning configuration
   */
readonly arcAutoProvisioning?: DefenderForServersGcpOfferingArcAutoProvisioning;

/**
   * The Defender for servers connection configuration
   */
readonly defenderForServers?: DefenderForServersGcpOfferingDefenderForServers;

/**
   * The Microsoft Defender for Endpoint autoprovisioning configuration
   */
readonly mdeAutoProvisioning?: DefenderForServersGcpOfferingMdeAutoProvisioning;

/**
   * configuration for the servers offering subPlan
   */
readonly subPlan?: DefenderForServersGcpOfferingSubPlan;

/**
   * The Vulnerability Assessment autoprovisioning configuration
   */
readonly vaAutoProvisioning?: DefenderForServersGcpOfferingVaAutoProvisioning;

/**
   * The Microsoft Defender for Server VM scanning configuration
   */
readonly vmScanners?: DefenderForServersGcpOfferingVmScanners;

/**
   * Configuration for servers Arc auto provisioning
   */
readonly configuration?: DefenderForServersGcpOfferingArcAutoProvisioningConf...;

/**
   * Is arc auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * Optional Arc private link scope resource id to link the Arc agent
   */
readonly privateLinkScope?: string;

/**
   * Optional HTTP proxy endpoint to use for the Arc agent
   */
readonly proxy?: string;

/**
   * The service account email address in GCP for this feature
   */
readonly serviceAccountEmailAddress?: string;

/**
   * The workload identity provider id in GCP for this feature
   */
readonly workloadIdentityProviderId?: string;

/**
   * configuration for Microsoft Defender for Endpoint autoprovisioning
   */
readonly configuration?: For Bicep, you can use theany()function.;

/**
   * Is Microsoft Defender for Endpoint auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * The available sub plans
   */
readonly type?: 'P1''P2';

/**
   * configuration for Vulnerability Assessment autoprovisioning
   */
readonly configuration?: DefenderForServersGcpOfferingVaAutoProvisioningConfi...;

/**
   * Is Vulnerability Assessment auto provisioning enabled
   */
readonly enabled?: bool;

/**
   * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
   */
readonly type?: 'Qualys''TVM';

/**
   * configuration for Microsoft Defender for Server VM scanning
   */
readonly configuration?: DefenderForServersGcpOfferingVmScannersConfiguration;

/**
   * Is Microsoft Defender for Server VM scanning enabled
   */
readonly enabled?: bool;

/**
   * VM tags that indicate that VM should not be scanned
   */
readonly exclusionTags?: DefenderForServersGcpOfferingVmScannersConfiguration...;

/**
   * The scanning mode for the VM scan.
   */
readonly scanningMode?: 'Default';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The type of the security offering.
   */
readonly offeringType: 'InformationProtectionAws';

/**
   * The native cloud connection configuration
   */
readonly informationProtection?: InformationProtectionAwsOfferingInformationProtectio...;

/**
   * The cloud role ARN in AWS for this feature
   */
readonly cloudRoleArn?: string;
}

/**
 * SecuritySecurityconnectors resource
 */
export class SecuritySecurityconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors@2023-10-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsProps): string {
    return JSON.stringify(
        {properties: {environmentData: {environmentType: "string"}, environmentName: "string", hierarchyIdentifier: "string", offerings: [{offeringType: "string"}]}, kind: "string", etag: "string"}
    );
  }
}
