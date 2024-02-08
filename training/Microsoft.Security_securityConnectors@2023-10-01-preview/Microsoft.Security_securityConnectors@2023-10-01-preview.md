```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors@2023-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      environmentData = {
        environmentType = "string"
        // For remaining properties, see EnvironmentData objects
      }
      environmentName = "string"
      hierarchyIdentifier = "string"
      offerings = [
        {
          offeringType = "string"
          // For remaining properties, see CloudOffering objects
        }
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

### securityConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Security connector data | SecurityConnectorProperties |


### SecurityConnectorProperties

| Name | Description | Value |
|-|-|-|
| environmentData | The security connector environment data. | EnvironmentData |
| environmentName | The multi cloud resource's cloud name. | 'AWS''Azure''AzureDevOps''GCP''GitLab''Github' |
| hierarchyIdentifier | The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector). | string |
| offerings | A collection of offerings for the security connector. | CloudOffering[] |


### EnvironmentData

| Name | Description | Value |
|-|-|-|
| environmentType | Set the object type | AwsAccountAzureDevOpsScopeGcpProjectGithubScopeGitlabScope(required) |


### AwsEnvironmentData

| Name | Description | Value |
|-|-|-|
| environmentType | The type of the environment data. | 'AwsAccount' (required) |
| organizationalData | The AWS account's organizational data | AwsOrganizationalData |
| regions | list of regions to scan | string[] |
| scanInterval | Scan interval in hours (value should be between 1-hour to 24-hours) | int |


### AwsOrganizationalData

| Name | Description | Value |
|-|-|-|
| organizationMembershipType | Set the object type | MemberOrganization(required) |


### AwsOrganizationalDataMember

| Name | Description | Value |
|-|-|-|
| organizationMembershipType | The multi cloud account's membership type in the organization | 'Member' (required) |
| parentHierarchyId | If the multi cloud account is not of membership type organization, this will be the ID of the account's parent | string |


### AwsOrganizationalDataMaster

| Name | Description | Value |
|-|-|-|
| organizationMembershipType | The multi cloud account's membership type in the organization | 'Organization' (required) |
| excludedAccountIds | If the multi cloud account is of membership type organization, list of accounts excluded from offering | string[] |
| stacksetName | If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset | string |


### AzureDevOpsScopeEnvironmentData

| Name | Description | Value |
|-|-|-|
| environmentType | The type of the environment data. | 'AzureDevOpsScope' (required) |


### GcpProjectEnvironmentData

| Name | Description | Value |
|-|-|-|
| environmentType | The type of the environment data. | 'GcpProject' (required) |
| organizationalData | The Gcp project's organizational data | GcpOrganizationalData |
| projectDetails | The Gcp project's details | GcpProjectDetails |
| scanInterval | Scan interval in hours (value should be between 1-hour to 24-hours) | int |


### GcpOrganizationalData

| Name | Description | Value |
|-|-|-|
| organizationMembershipType | Set the object type | MemberOrganization(required) |


### GcpOrganizationalDataMember

| Name | Description | Value |
|-|-|-|
| organizationMembershipType | The multi cloud account's membership type in the organization | 'Member' (required) |
| managementProjectNumber | The GCP management project number from organizational onboarding | string |
| parentHierarchyId | If the multi cloud account is not of membership type organization, this will be the ID of the project's parent | string |


### GcpOrganizationalDataOrganization

| Name | Description | Value |
|-|-|-|
| organizationMembershipType | The multi cloud account's membership type in the organization | 'Organization' (required) |
| excludedProjectNumbers | If the multi cloud account is of membership type organization, list of accounts excluded from offering | string[] |
| serviceAccountEmailAddress | The service account email address which represents the organization level permissions container. | string |
| workloadIdentityProviderId | The GCP workload identity provider id which represents the permissions required to auto provision security connectors | string |


### GcpProjectDetails

| Name | Description | Value |
|-|-|-|
| projectId | The GCP Project id | string |
| projectNumber | The unique GCP Project number | string |


### GithubScopeEnvironmentData

| Name | Description | Value |
|-|-|-|
| environmentType | The type of the environment data. | 'GithubScope' (required) |


### GitlabScopeEnvironmentData

| Name | Description | Value |
|-|-|-|
| environmentType | The type of the environment data. | 'GitlabScope' (required) |


### CloudOffering

| Name | Description | Value |
|-|-|-|
| offeringType | Set the object type | CspmMonitorAwsCspmMonitorAzureDevOpsCspmMonitorGcpCspmMonitorGithubCspmMonitorGitLabDefenderCspmAwsDefenderCspmGcpDefenderForContainersAwsDefenderForContainersGcpDefenderForDatabasesAwsDefenderForDatabasesGcpDefenderForDevOpsAzureDevOpsDefenderForDevOpsGithubDefenderForDevOpsGitLabDefenderForServersAwsDefenderForServersGcpInformationProtectionAws(required) |


### CspmMonitorAwsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'CspmMonitorAws' (required) |
| nativeCloudConnection | The native cloud connection configuration | CspmMonitorAwsOfferingNativeCloudConnection |


### CspmMonitorAwsOfferingNativeCloudConnection

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |


### CspmMonitorAzureDevOpsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'CspmMonitorAzureDevOps' (required) |


### CspmMonitorGcpOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'CspmMonitorGcp' (required) |
| nativeCloudConnection | The native cloud connection configuration | CspmMonitorGcpOfferingNativeCloudConnection |


### CspmMonitorGcpOfferingNativeCloudConnection

| Name | Description | Value |
|-|-|-|
| serviceAccountEmailAddress | The service account email address in GCP for this offering | string |
| workloadIdentityProviderId | The GCP workload identity provider id for the offering | string |


### CspmMonitorGithubOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'CspmMonitorGithub' (required) |


### CspmMonitorGitLabOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'CspmMonitorGitLab' (required) |


### DefenderCspmAwsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderCspmAws' (required) |
| ciem | Defenders CSPM Cloud infrastructure entitlement management (CIEM) offering configurations | DefenderCspmAwsOfferingCiem |
| databasesDspm | The databases DSPM configuration | DefenderCspmAwsOfferingDatabasesDspm |
| dataSensitivityDiscovery | The Microsoft Defender Data Sensitivity discovery configuration | DefenderCspmAwsOfferingDataSensitivityDiscovery |
| mdcContainersAgentlessDiscoveryK8s | The Microsoft Defender container agentless discovery K8s configuration | DefenderCspmAwsOfferingMdcContainersAgentlessDiscove... |
| mdcContainersImageAssessment | The Microsoft Defender container image assessment configuration | DefenderCspmAwsOfferingMdcContainersImageAssessment |
| vmScanners | The Microsoft Defender for Server VM scanning configuration | DefenderCspmAwsOfferingVmScanners |


### DefenderCspmAwsOfferingCiem

| Name | Description | Value |
|-|-|-|
| ciemDiscovery | Defender CSPM CIEM discovery configuration | DefenderCspmAwsOfferingCiemDiscovery |
| ciemOidc | Defender CSPM CIEM AWS OIDC (open id connect) configuration | DefenderCspmAwsOfferingCiemOidc |


### DefenderCspmAwsOfferingCiemDiscovery

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for CIEM discovery | string |


### DefenderCspmAwsOfferingCiemOidc

| Name | Description | Value |
|-|-|-|
| azureActiveDirectoryAppName | the azure active directory app name used of authenticating against AWS | string |
| cloudRoleArn | The cloud role ARN in AWS for CIEM oidc connection | string |


### DefenderCspmAwsOfferingDatabasesDspm

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is databases DSPM protection enabled | bool |


### DefenderCspmAwsOfferingDataSensitivityDiscovery

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is Microsoft Defender Data Sensitivity discovery enabled | bool |


### DefenderCspmAwsOfferingMdcContainersAgentlessDiscove...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is Microsoft Defender container agentless discovery K8s enabled | bool |


### DefenderCspmAwsOfferingMdcContainersImageAssessment

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is Microsoft Defender container image assessment enabled | bool |


### DefenderCspmAwsOfferingVmScanners

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Microsoft Defender for Server VM scanning | DefenderCspmAwsOfferingVmScannersConfiguration |
| enabled | Is Microsoft Defender for Server VM scanning enabled | bool |


### DefenderCspmAwsOfferingVmScannersConfiguration

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| exclusionTags | VM tags that indicates that VM should not be scanned | DefenderCspmAwsOfferingVmScannersConfigurationExclus... |
| scanningMode | The scanning mode for the VM scan. | 'Default' |


### DefenderCspmAwsOfferingVmScannersConfigurationExclus...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### DefenderCspmGcpOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderCspmGcp' (required) |
| ciemDiscovery | GCP Defenders CSPM Cloud infrastructure entitlement management (CIEM) discovery offering configurations | DefenderCspmGcpOfferingCiemDiscovery |
| dataSensitivityDiscovery | The Microsoft Defender Data Sensitivity discovery configuration | DefenderCspmGcpOfferingDataSensitivityDiscovery |
| mdcContainersAgentlessDiscoveryK8s | The Microsoft Defender Container agentless discovery configuration | DefenderCspmGcpOfferingMdcContainersAgentlessDiscove... |
| mdcContainersImageAssessment | The Microsoft Defender Container image assessment configuration | DefenderCspmGcpOfferingMdcContainersImageAssessment |
| vmScanners | The Microsoft Defender for Server VM scanning configuration | DefenderCspmGcpOfferingVmScanners |


### DefenderCspmGcpOfferingCiemDiscovery

| Name | Description | Value |
|-|-|-|
| azureActiveDirectoryAppName | the azure active directory app name used of authenticating against GCP workload identity federation | string |
| serviceAccountEmailAddress | The service account email address in GCP for CIEM discovery offering | string |
| workloadIdentityProviderId | The GCP workload identity provider id for CIEM discovery offering | string |


### DefenderCspmGcpOfferingDataSensitivityDiscovery

| Name | Description | Value |
|-|-|-|
| enabled | Is Microsoft Defender Data Sensitivity discovery enabled | bool |
| serviceAccountEmailAddress | The service account email address in GCP for this feature | string |
| workloadIdentityProviderId | The workload identity provider id in GCP for this feature | string |


### DefenderCspmGcpOfferingMdcContainersAgentlessDiscove...

| Name | Description | Value |
|-|-|-|
| enabled | Is Microsoft Defender container agentless discovery enabled | bool |
| serviceAccountEmailAddress | The service account email address in GCP for this feature | string |
| workloadIdentityProviderId | The workload identity provider id in GCP for this feature | string |


### DefenderCspmGcpOfferingMdcContainersImageAssessment

| Name | Description | Value |
|-|-|-|
| enabled | Is Microsoft Defender container image assessment enabled | bool |
| serviceAccountEmailAddress | The service account email address in GCP for this feature | string |
| workloadIdentityProviderId | The workload identity provider id in GCP for this feature | string |


### DefenderCspmGcpOfferingVmScanners

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Microsoft Defender for Server VM scanning | DefenderCspmGcpOfferingVmScannersConfiguration |
| enabled | Is Microsoft Defender for Server VM scanning enabled | bool |


### DefenderCspmGcpOfferingVmScannersConfiguration

| Name | Description | Value |
|-|-|-|
| exclusionTags | VM tags that indicates that VM should not be scanned | DefenderCspmGcpOfferingVmScannersConfigurationExclus... |
| scanningMode | The scanning mode for the VM scan. | 'Default' |


### DefenderCspmGcpOfferingVmScannersConfigurationExclus...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### DefenderForContainersAwsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForContainersAws' (required) |
| autoProvisioning | Is audit logs pipeline auto provisioning enabled | bool |
| cloudWatchToKinesis | The cloudwatch to kinesis connection configuration | DefenderForContainersAwsOfferingCloudWatchToKinesis |
| containerVulnerabilityAssessment | The container vulnerability assessment configuration | DefenderForContainersAwsOfferingContainerVulnerabili... |
| containerVulnerabilityAssessmentTask | The container vulnerability assessment task configuration | DefenderForContainersAwsOfferingContainerVulnerabili... |
| enableContainerVulnerabilityAssessment | Enable container vulnerability assessment feature | bool |
| kinesisToS3 | The kinesis to s3 connection configuration | DefenderForContainersAwsOfferingKinesisToS3 |
| kubeAuditRetentionTime | The retention time in days of kube audit logs set on the CloudWatch log group | int |
| kubernetesScubaReader | The kubernetes to scuba connection configuration | DefenderForContainersAwsOfferingKubernetesScubaReade... |
| kubernetesService | The kubernetes service connection configuration | DefenderForContainersAwsOfferingKubernetesService |
| mdcContainersAgentlessDiscoveryK8s | The Microsoft Defender container agentless discovery K8s configuration | DefenderForContainersAwsOfferingMdcContainersAgentle... |
| mdcContainersImageAssessment | The Microsoft Defender container image assessment configuration | DefenderForContainersAwsOfferingMdcContainersImageAs... |
| scubaExternalId | The externalId used by the data reader to prevent the confused deputy attack | string |


### DefenderForContainersAwsOfferingCloudWatchToKinesis

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS used by CloudWatch to transfer data into Kinesis | string |


### DefenderForContainersAwsOfferingContainerVulnerabili...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |


### DefenderForContainersAwsOfferingContainerVulnerabili...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |


### DefenderForContainersAwsOfferingKinesisToS3

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS used by Kinesis to transfer data into S3 | string |


### DefenderForContainersAwsOfferingKubernetesScubaReade...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature used for reading data | string |


### DefenderForContainersAwsOfferingKubernetesService

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature used for provisioning resources | string |


### DefenderForContainersAwsOfferingMdcContainersAgentle...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is Microsoft Defender container agentless discovery K8s enabled | bool |


### DefenderForContainersAwsOfferingMdcContainersImageAs...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is Microsoft Defender container image assessment enabled | bool |


### DefenderForContainersGcpOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForContainersGcp' (required) |
| auditLogsAutoProvisioningFlag | Is audit logs data collection enabled | bool |
| dataPipelineNativeCloudConnection | The native cloud connection configuration | DefenderForContainersGcpOfferingDataPipelineNativeCl... |
| defenderAgentAutoProvisioningFlag | Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled | bool |
| mdcContainersAgentlessDiscoveryK8s | The Microsoft Defender Container agentless discovery configuration | DefenderForContainersGcpOfferingMdcContainersAgentle... |
| mdcContainersImageAssessment | The Microsoft Defender Container image assessment configuration | DefenderForContainersGcpOfferingMdcContainersImageAs... |
| nativeCloudConnection | The native cloud connection configuration | DefenderForContainersGcpOfferingNativeCloudConnectio... |
| policyAgentAutoProvisioningFlag | Is Policy Kubernetes agent auto provisioning enabled | bool |


### DefenderForContainersGcpOfferingDataPipelineNativeCl...

| Name | Description | Value |
|-|-|-|
| serviceAccountEmailAddress | The data collection service account email address in GCP for this offering | string |
| workloadIdentityProviderId | The data collection GCP workload identity provider id for this offering | string |


### DefenderForContainersGcpOfferingMdcContainersAgentle...

| Name | Description | Value |
|-|-|-|
| enabled | Is Microsoft Defender container agentless discovery enabled | bool |
| serviceAccountEmailAddress | The service account email address in GCP for this feature | string |
| workloadIdentityProviderId | The workload identity provider id in GCP for this feature | string |


### DefenderForContainersGcpOfferingMdcContainersImageAs...

| Name | Description | Value |
|-|-|-|
| enabled | Is Microsoft Defender container image assessment enabled | bool |
| serviceAccountEmailAddress | The service account email address in GCP for this feature | string |
| workloadIdentityProviderId | The workload identity provider id in GCP for this feature | string |


### DefenderForContainersGcpOfferingNativeCloudConnectio...

| Name | Description | Value |
|-|-|-|
| serviceAccountEmailAddress | The service account email address in GCP for this offering | string |
| workloadIdentityProviderId | The GCP workload identity provider id for this offering | string |


### DefenderFoDatabasesAwsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForDatabasesAws' (required) |
| arcAutoProvisioning | The ARC autoprovisioning configuration | DefenderFoDatabasesAwsOfferingArcAutoProvisioning |
| databasesDspm | The databases data security posture management (DSPM) configuration | DefenderFoDatabasesAwsOfferingDatabasesDspm |
| rds | The RDS configuration | DefenderFoDatabasesAwsOfferingRds |


### DefenderFoDatabasesAwsOfferingArcAutoProvisioning

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| configuration | Configuration for servers Arc auto provisioning | DefenderFoDatabasesAwsOfferingArcAutoProvisioningCon... |
| enabled | Is arc auto provisioning enabled | bool |


### DefenderFoDatabasesAwsOfferingArcAutoProvisioningCon...

| Name | Description | Value |
|-|-|-|
| privateLinkScope | Optional Arc private link scope resource id to link the Arc agent | string |
| proxy | Optional http proxy endpoint to use for the Arc agent | string |


### DefenderFoDatabasesAwsOfferingDatabasesDspm

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is databases data security posture management (DSPM) protection enabled | bool |


### DefenderFoDatabasesAwsOfferingRds

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| enabled | Is RDS protection enabled | bool |


### DefenderForDatabasesGcpOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForDatabasesGcp' (required) |
| arcAutoProvisioning | The ARC autoprovisioning configuration | DefenderForDatabasesGcpOfferingArcAutoProvisioning |
| defenderForDatabasesArcAutoProvisioning | The native cloud connection configuration | DefenderForDatabasesGcpOfferingDefenderForDatabasesA... |


### DefenderForDatabasesGcpOfferingArcAutoProvisioning

| Name | Description | Value |
|-|-|-|
| configuration | Configuration for servers Arc auto provisioning | DefenderForDatabasesGcpOfferingArcAutoProvisioningCo... |
| enabled | Is arc auto provisioning enabled | bool |


### DefenderForDatabasesGcpOfferingArcAutoProvisioningCo...

| Name | Description | Value |
|-|-|-|
| privateLinkScope | Optional Arc private link scope resource id to link the Arc agent | string |
| proxy | Optional http proxy endpoint to use for the Arc agent | string |


### DefenderForDatabasesGcpOfferingDefenderForDatabasesA...

| Name | Description | Value |
|-|-|-|
| serviceAccountEmailAddress | The service account email address in GCP for this offering | string |
| workloadIdentityProviderId | The GCP workload identity provider id for this offering | string |


### DefenderForDevOpsAzureDevOpsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForDevOpsAzureDevOps' (required) |


### DefenderForDevOpsGithubOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForDevOpsGithub' (required) |


### DefenderForDevOpsGitLabOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForDevOpsGitLab' (required) |


### DefenderForServersAwsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForServersAws' (required) |
| arcAutoProvisioning | The ARC autoprovisioning configuration | DefenderForServersAwsOfferingArcAutoProvisioning |
| defenderForServers | The Defender for servers connection configuration | DefenderForServersAwsOfferingDefenderForServers |
| mdeAutoProvisioning | The Microsoft Defender for Endpoint autoprovisioning configuration | DefenderForServersAwsOfferingMdeAutoProvisioning |
| subPlan | configuration for the servers offering subPlan | DefenderForServersAwsOfferingSubPlan |
| vaAutoProvisioning | The Vulnerability Assessment autoprovisioning configuration | DefenderForServersAwsOfferingVaAutoProvisioning |
| vmScanners | The Microsoft Defender for Server VM scanning configuration | DefenderForServersAwsOfferingVmScanners |


### DefenderForServersAwsOfferingArcAutoProvisioning

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| configuration | Configuration for servers Arc auto provisioning | DefenderForServersAwsOfferingArcAutoProvisioningConf... |
| enabled | Is arc auto provisioning enabled | bool |


### DefenderForServersAwsOfferingArcAutoProvisioningConf...

| Name | Description | Value |
|-|-|-|
| privateLinkScope | Optional Arc private link scope resource id to link the Arc agent | string |
| proxy | Optional HTTP proxy endpoint to use for the Arc agent | string |


### DefenderForServersAwsOfferingDefenderForServers

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |


### DefenderForServersAwsOfferingMdeAutoProvisioning

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Microsoft Defender for Endpoint autoprovisioning | For Bicep, you can use theany()function. |
| enabled | Is Microsoft Defender for Endpoint auto provisioning enabled | bool |


### DefenderForServersAwsOfferingSubPlan

| Name | Description | Value |
|-|-|-|
| type | The available sub plans | 'P1''P2' |


### DefenderForServersAwsOfferingVaAutoProvisioning

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Vulnerability Assessment autoprovisioning | DefenderForServersAwsOfferingVaAutoProvisioningConfi... |
| enabled | Is Vulnerability Assessment auto provisioning enabled | bool |


### DefenderForServersAwsOfferingVaAutoProvisioningConfi...

| Name | Description | Value |
|-|-|-|
| type | The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys' | 'Qualys''TVM' |


### DefenderForServersAwsOfferingVmScanners

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Microsoft Defender for Server VM scanning | DefenderForServersAwsOfferingVmScannersConfiguration |
| enabled | Is Microsoft Defender for Server VM scanning enabled | bool |


### DefenderForServersAwsOfferingVmScannersConfiguration

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |
| exclusionTags | VM tags that indicates that VM should not be scanned | DefenderForServersAwsOfferingVmScannersConfiguration... |
| scanningMode | The scanning mode for the VM scan. | 'Default' |


### DefenderForServersAwsOfferingVmScannersConfiguration...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### DefenderForServersGcpOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'DefenderForServersGcp' (required) |
| arcAutoProvisioning | The ARC autoprovisioning configuration | DefenderForServersGcpOfferingArcAutoProvisioning |
| defenderForServers | The Defender for servers connection configuration | DefenderForServersGcpOfferingDefenderForServers |
| mdeAutoProvisioning | The Microsoft Defender for Endpoint autoprovisioning configuration | DefenderForServersGcpOfferingMdeAutoProvisioning |
| subPlan | configuration for the servers offering subPlan | DefenderForServersGcpOfferingSubPlan |
| vaAutoProvisioning | The Vulnerability Assessment autoprovisioning configuration | DefenderForServersGcpOfferingVaAutoProvisioning |
| vmScanners | The Microsoft Defender for Server VM scanning configuration | DefenderForServersGcpOfferingVmScanners |


### DefenderForServersGcpOfferingArcAutoProvisioning

| Name | Description | Value |
|-|-|-|
| configuration | Configuration for servers Arc auto provisioning | DefenderForServersGcpOfferingArcAutoProvisioningConf... |
| enabled | Is arc auto provisioning enabled | bool |


### DefenderForServersGcpOfferingArcAutoProvisioningConf...

| Name | Description | Value |
|-|-|-|
| privateLinkScope | Optional Arc private link scope resource id to link the Arc agent | string |
| proxy | Optional HTTP proxy endpoint to use for the Arc agent | string |


### DefenderForServersGcpOfferingDefenderForServers

| Name | Description | Value |
|-|-|-|
| serviceAccountEmailAddress | The service account email address in GCP for this feature | string |
| workloadIdentityProviderId | The workload identity provider id in GCP for this feature | string |


### DefenderForServersGcpOfferingMdeAutoProvisioning

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Microsoft Defender for Endpoint autoprovisioning | For Bicep, you can use theany()function. |
| enabled | Is Microsoft Defender for Endpoint auto provisioning enabled | bool |


### DefenderForServersGcpOfferingSubPlan

| Name | Description | Value |
|-|-|-|
| type | The available sub plans | 'P1''P2' |


### DefenderForServersGcpOfferingVaAutoProvisioning

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Vulnerability Assessment autoprovisioning | DefenderForServersGcpOfferingVaAutoProvisioningConfi... |
| enabled | Is Vulnerability Assessment auto provisioning enabled | bool |


### DefenderForServersGcpOfferingVaAutoProvisioningConfi...

| Name | Description | Value |
|-|-|-|
| type | The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys' | 'Qualys''TVM' |


### DefenderForServersGcpOfferingVmScanners

| Name | Description | Value |
|-|-|-|
| configuration | configuration for Microsoft Defender for Server VM scanning | DefenderForServersGcpOfferingVmScannersConfiguration |
| enabled | Is Microsoft Defender for Server VM scanning enabled | bool |


### DefenderForServersGcpOfferingVmScannersConfiguration

| Name | Description | Value |
|-|-|-|
| exclusionTags | VM tags that indicate that VM should not be scanned | DefenderForServersGcpOfferingVmScannersConfiguration... |
| scanningMode | The scanning mode for the VM scan. | 'Default' |


### DefenderForServersGcpOfferingVmScannersConfiguration...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### InformationProtectionAwsOffering

| Name | Description | Value |
|-|-|-|
| offeringType | The type of the security offering. | 'InformationProtectionAws' (required) |
| informationProtection | The native cloud connection configuration | InformationProtectionAwsOfferingInformationProtectio... |


### InformationProtectionAwsOfferingInformationProtectio...

| Name | Description | Value |
|-|-|-|
| cloudRoleArn | The cloud role ARN in AWS for this feature | string |


