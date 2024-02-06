## Microsoft.Security/advancedThreatProtectionSettings@2019-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/advancedThreatProtectionSettings@2019-01-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isEnabled = bool
    }
  })
}

```

### advancedThreatProtectionSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'current' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The Advanced Threat Protection settings. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether Advanced Threat Protection is enabled. | bool |
## Microsoft.Security/alertsSuppressionRules@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/alertsSuppressionRules@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alertType = "string"
      comment = "string"
      expirationDateUtc = "string"
      reason = "string"
      state = "string"
      suppressionAlertsScope = {
        allOf = [
          {
            field = "string"
          }
        ]
      }
    }
  })
}

```

### alertsSuppressionRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | describes AlertsSuppressionRule properties | AlertsSuppressionRuleProperties |


### AlertsSuppressionRuleProperties

| Name | Description | Value |
|-|-|-|
| alertType | Type of the alert to automatically suppress. For all alert types, use '*' | string (required) |
| comment | Any comment regarding the rule | string |
| expirationDateUtc | Expiration date of the rule, if value is not provided or provided as null there will no expiration at all | string |
| reason | The reason for dismissing the alert | string (required) |
| state | Possible states of the rule | 'Disabled''Enabled''Expired' (required) |
| suppressionAlertsScope | The suppression conditions | SuppressionAlertsScope |


### SuppressionAlertsScope

| Name | Description | Value |
|-|-|-|
| allOf | All the conditions inside need to be true in order to suppress the alert | ScopeElement[] (required) |


### ScopeElement

| Name | Description | Value |
|-|-|-|
| field | The alert entity type to suppress by. | string |
| {customized property} |  | For Bicep, you can use theany()function. |
## Microsoft.Security/apiCollections@2023-11-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/apiCollections@2023-11-15"
  name = "string"
  parent_id = "string"
}

```

### apiCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
## Microsoft.Security/applications@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/applications@2022-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conditionSets = [ object ]
      description = "string"
      displayName = "string"
      sourceResourceType = "Assessments"
    }
  })
}

```

### applications

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of a security application | ApplicationProperties |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| conditionSets | The application conditionSets - see examples | any[] (required) |
| description | description of the application | string |
| displayName | display name of the application | string |
| sourceResourceType | The application source, what it affects, e.g. Assessments | 'Assessments' (required) |
## Microsoft.Security/assessmentMetadata@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessmentMetadata@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assessmentType = "string"
      categories = [
        "string"
      ]
      description = "string"
      displayName = "string"
      implementationEffort = "string"
      partnerData = {
        partnerName = "string"
        productName = "string"
        secret = "string"
      }
      plannedDeprecationDate = "string"
      preview = bool
      publishDates = {
        GA = "string"
        public = "string"
      }
      remediationDescription = "string"
      severity = "string"
      tactics = [
        "string"
      ]
      techniques = [
        "string"
      ]
      threats = [
        "string"
      ]
      userImpact = "string"
    }
  })
}

```

### assessmentMetadata

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Describes properties of an assessment metadata response. | SecurityAssessmentMetadataPropertiesResponse |


### SecurityAssessmentMetadataPropertiesResponse

| Name | Description | Value |
|-|-|-|
| assessmentType | BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition | 'BuiltIn''CustomPolicy''CustomerManaged''VerifiedPartner' (required) |
| categories |  | String array containing any of:'Compute''Data''IdentityAndAccess''IoT''Networking' |
| description | Human readable description of the assessment | string |
| displayName | User friendly display name of the assessment | string (required) |
| implementationEffort | The implementation effort required to remediate this assessment | 'High''Low''Moderate' |
| partnerData | Describes the partner that created the assessment | SecurityAssessmentMetadataPartnerData |
| plannedDeprecationDate |  | stringConstraints:Pattern =^[0-9]{2}/[0-9]{4}$ |
| preview | True if this assessment is in preview release status | bool |
| publishDates |  | SecurityAssessmentMetadataPropertiesResponsePublishD... |
| remediationDescription | Human readable description of what you should do to mitigate this security issue | string |
| severity | The severity level of the assessment | 'High''Low''Medium' (required) |
| tactics |  | String array containing any of:'Collection''Command and Control''Credential Access''Defense Evasion''Discovery''Execution''Exfiltration''Impact''Initial Access''Lateral Movement''Persistence''Privilege Escalation''Reconnaissance''Resource Development' |
| techniques |  | String array containing any of:'Abuse Elevation Control Mechanism''Access Token Manipulation''Account Discovery''Account Manipulation''Active Scanning''Application Layer Protocol''Audio Capture''Boot or Logon Autostart Execution''Boot or Logon Initialization Scripts''Brute Force''Cloud Infrastructure Discovery''Cloud Service Dashboard''Cloud Service Discovery''Command and Scripting Interpreter''Compromise Client Software Binary''Compromise Infrastructure''Container and Resource Discovery''Create Account''Create or Modify System Process''Credentials from Password Stores''Data Destruction''Data Encrypted for Impact''Data Manipulation''Data Staged''Data from Cloud Storage Object''Data from Configuration Repository''Data from Information Repositories''Data from Local System''Defacement''Deobfuscate/Decode Files or Information''Disk Wipe''Domain Trust Discovery''Drive-by Compromise''Dynamic Resolution''Endpoint Denial of Service''Event Triggered Execution''Exfiltration Over Alternative Protocol''Exploit Public-Facing Application''Exploitation for Client Execution''Exploitation for Credential Access''Exploitation for Defense Evasion''Exploitation for Privilege Escalation''Exploitation of Remote Services''External Remote Services''Fallback Channels''File and Directory Discovery''File and Directory Permissions Modification''Gather Victim Network Information''Hide Artifacts''Hijack Execution Flow''Impair Defenses''Implant Container Image''Indicator Removal on Host''Indirect Command Execution''Ingress Tool Transfer''Input Capture''Inter-Process Communication''Lateral Tool Transfer''Man-in-the-Middle''Masquerading''Modify Authentication Process''Modify Registry''Network Denial of Service''Network Service Scanning''Network Sniffing''Non-Application Layer Protocol''Non-Standard Port''OS Credential Dumping''Obfuscated Files or Information''Obtain Capabilities''Office Application Startup''Permission Groups Discovery''Phishing''Pre-OS Boot''Process Discovery''Process Injection''Protocol Tunneling''Proxy''Query Registry''Remote Access Software''Remote Service Session Hijacking''Remote Services''Remote System Discovery''Resource Hijacking''SQL Stored Procedures''Scheduled Task/Job''Screen Capture''Search Victim-Owned Websites''Server Software Component''Service Stop''Signed Binary Proxy Execution''Software Deployment Tools''Steal or Forge Kerberos Tickets''Subvert Trust Controls''Supply Chain Compromise''System Information Discovery''Taint Shared Content''Traffic Signaling''Transfer Data to Cloud Account''Trusted Relationship''Unsecured Credentials''User Execution''Valid Accounts''Windows Management Instrumentation' |
| threats |  | String array containing any of:'accountBreach''dataExfiltration''dataSpillage''denialOfService''elevationOfPrivilege''maliciousInsider''missingCoverage''threatResistance' |
| userImpact | The user impact of the assessment | 'High''Low''Moderate' |


### SecurityAssessmentMetadataPartnerData

| Name | Description | Value |
|-|-|-|
| partnerName | Name of the company of the partner | string (required) |
| productName | Name of the product of the partner that created the assessment | string |
| secret | Secret to authenticate the partner and verify it created the assessment - write only | string (required)Constraints:Sensitive value. Pass in as a secure parameter. |


### SecurityAssessmentMetadataPropertiesResponsePublishD...

| Name | Description | Value |
|-|-|-|
| GA |  | stringConstraints:Pattern =^([0-9]{2}/){2}[0-9]{4}$ |
| public |  | string (required)Constraints:Pattern =^([0-9]{2}/){2}[0-9]{4}$ |
## Microsoft.Security/assessments@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessments@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalData = {
        {customized property} = "string"
      }
      metadata = {
        assessmentType = "string"
        categories = [
          "string"
        ]
        description = "string"
        displayName = "string"
        implementationEffort = "string"
        partnerData = {
          partnerName = "string"
          productName = "string"
          secret = "string"
        }
        preview = bool
        remediationDescription = "string"
        severity = "string"
        threats = [
          "string"
        ]
        userImpact = "string"
      }
      partnersData = {
        partnerName = "string"
        secret = "string"
      }
      resourceDetails = {
        source = "string"
        // For remaining properties, see ResourceDetails objects
      }
      status = {
        cause = "string"
        code = "string"
        description = "string"
      }
    }
  })
}

```

### assessments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Describes properties of an assessment. | SecurityAssessmentPropertiesOrSecurityAssessmentProp... |


### SecurityAssessmentPropertiesOrSecurityAssessmentProp...

| Name | Description | Value |
|-|-|-|
| additionalData | Additional data regarding the assessment | SecurityAssessmentPropertiesBaseAdditionalData |
| metadata | Describes properties of an assessment metadata. | SecurityAssessmentMetadataProperties |
| partnersData | Data regarding 3rd party partner integration | SecurityAssessmentPartnerData |
| resourceDetails | Details of the resource that was assessed | ResourceDetails(required) |
| status | The result of the assessment | AssessmentStatusOrAssessmentStatusResponse(required) |


### SecurityAssessmentPropertiesBaseAdditionalData

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### SecurityAssessmentMetadataProperties

| Name | Description | Value |
|-|-|-|
| assessmentType | BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition | 'BuiltIn''CustomPolicy''CustomerManaged''VerifiedPartner' (required) |
| categories |  | String array containing any of:'Compute''Data''IdentityAndAccess''IoT''Networking' |
| description | Human readable description of the assessment | string |
| displayName | User friendly display name of the assessment | string (required) |
| implementationEffort | The implementation effort required to remediate this assessment | 'High''Low''Moderate' |
| partnerData | Describes the partner that created the assessment | SecurityAssessmentMetadataPartnerData |
| preview | True if this assessment is in preview release status | bool |
| remediationDescription | Human readable description of what you should do to mitigate this security issue | string |
| severity | The severity level of the assessment | 'High''Low''Medium' (required) |
| threats |  | String array containing any of:'accountBreach''dataExfiltration''dataSpillage''denialOfService''elevationOfPrivilege''maliciousInsider''missingCoverage''threatResistance' |
| userImpact | The user impact of the assessment | 'High''Low''Moderate' |


### SecurityAssessmentMetadataPartnerData

| Name | Description | Value |
|-|-|-|
| partnerName | Name of the company of the partner | string (required) |
| productName | Name of the product of the partner that created the assessment | string |
| secret | Secret to authenticate the partner and verify it created the assessment - write only | string (required)Constraints:Sensitive value. Pass in as a secure parameter. |


### SecurityAssessmentPartnerData

| Name | Description | Value |
|-|-|-|
| partnerName | Name of the company of the partner | string (required) |
| secret | secret to authenticate the partner - write only | string (required)Constraints:Sensitive value. Pass in as a secure parameter. |


### ResourceDetails

| Name | Description | Value |
|-|-|-|
| source | Set the object type | AzureOnPremiseSql(required) |


### AzureResourceDetails

| Name | Description | Value |
|-|-|-|
| source | The platform where the assessed resource resides | 'Azure' (required) |


### OnPremiseSqlResourceDetails

| Name | Description | Value |
|-|-|-|
| source | The platform where the assessed resource resides | 'OnPremiseSql' (required) |
| databaseName | The Sql database name installed on the machine | string (required) |
| machineName | The name of the machine | string (required) |
| serverName | The Sql server name installed on the machine | string (required) |
| sourceComputerId | The oms agent Id installed on the machine | string (required) |
| vmuuid | The unique Id of the machine | string (required) |
| workspaceId | Azure resource Id of the workspace the machine is attached to | string (required) |


### AssessmentStatusOrAssessmentStatusResponse

| Name | Description | Value |
|-|-|-|
| cause | Programmatic code for the cause of the assessment status | string |
| code | Programmatic code for the status of the assessment | 'Healthy''NotApplicable''Unhealthy' (required) |
| description | Human readable description of the assessment status | string |
## Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalData = {
        ticketLink = "string"
        ticketNumber = int
        ticketStatus = "string"
      }
      governanceEmailNotification = {
        disableManagerEmailNotification = bool
        disableOwnerEmailNotification = bool
      }
      isGracePeriod = bool
      owner = "string"
      remediationDueDate = "string"
      remediationEta = {
        eta = "string"
        justification = "string"
      }
    }
  })
}

```

### assessments/governanceAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessments |
| properties | The properties of a governance assignment | GovernanceAssignmentProperties |


### GovernanceAssignmentProperties

| Name | Description | Value |
|-|-|-|
| additionalData | The additional data for the governance assignment - e.g. links to ticket (optional), see example | GovernanceAssignmentAdditionalData |
| governanceEmailNotification | The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners | GovernanceEmailNotification |
| isGracePeriod | Defines whether there is a grace period on the governance assignment | bool |
| owner | The Owner for the governance assignment - e.g. user@contoso.com - see example | string |
| remediationDueDate | The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period) | string (required) |
| remediationEta | The ETA (estimated time of arrival) for remediation (optional), see example | RemediationEta |


### GovernanceAssignmentAdditionalData

| Name | Description | Value |
|-|-|-|
| ticketLink | Ticket link associated with this governance assignment - for example:https://snow.com | string |
| ticketNumber | Ticket number associated with this governance assignment | intConstraints:Min value = 0 |
| ticketStatus | The ticket status associated with this governance assignment - for example: Active | string |


### GovernanceEmailNotification

| Name | Description | Value |
|-|-|-|
| disableManagerEmailNotification | Exclude manager from weekly email notification. | bool |
| disableOwnerEmailNotification | Exclude  owner from weekly email notification. | bool |


### RemediationEta

| Name | Description | Value |
|-|-|-|
| eta | ETA for remediation. | string (required) |
| justification | Justification for change of Eta. | string (required) |
## Microsoft.Security/assignments@2021-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assignments@2021-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalData = {
        exemptionCategory = "string"
      }
      assignedComponent = {
        key = "string"
      }
      assignedStandard = {
        id = "string"
      }
      description = "string"
      displayName = "string"
      effect = "string"
      expiresOn = "string"
      scope = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### assignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Properties of a security assignment | AssignmentProperties |


### AssignmentProperties

| Name | Description | Value |
|-|-|-|
| additionalData | Additional data about the assignment | AssignmentPropertiesAdditionalData |
| assignedComponent | Component item with key as applied to this standard assignment over the given scope | AssignedComponentItem |
| assignedStandard | Standard item with key as applied to this standard assignment over the given scope | AssignedStandardItem |
| description | description of the standardAssignment | string |
| displayName | display name of the standardAssignment | string |
| effect | expected effect of this assignment (Disable/Exempt/etc) | string |
| expiresOn | Expiration date of this assignment as a full ISO date | string |
| metadata | The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| scope | Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription | string |


### AssignmentPropertiesAdditionalData

| Name | Description | Value |
|-|-|-|
| exemptionCategory | Exemption category of this assignment | string |


### AssignedComponentItem

| Name | Description | Value |
|-|-|-|
| key | unique key to a security assessment object | string |


### AssignedStandardItem

| Name | Description | Value |
|-|-|-|
| id | full resourceId of the Microsoft.Security/standard object | string |
## Microsoft.Security/automations@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/automations@2019-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        {
          actionType = "string"
          // For remaining properties, see AutomationAction objects
        }
      ]
      description = "string"
      isEnabled = bool
      scopes = [
        {
          description = "string"
          scopePath = "string"
        }
      ]
      sources = [
        {
          eventSource = "string"
          ruleSets = [
            {
              rules = [
                {
                  expectedValue = "string"
                  operator = "string"
                  propertyJPath = "string"
                  propertyType = "string"
                }
              ]
            }
          ]
        }
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

### automations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Security automation data | AutomationProperties |


### AutomationProperties

| Name | Description | Value |
|-|-|-|
| actions | A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true. | AutomationAction[] |
| description | The security automation description. | string |
| isEnabled | Indicates whether the security automation is enabled. | bool |
| scopes | A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes. | AutomationScope[] |
| sources | A collection of the source event types which evaluate the security automation set of rules. | AutomationSource[] |


### AutomationAction

| Name | Description | Value |
|-|-|-|
| actionType | Set the object type | EventHubLogicAppWorkspace(required) |


### AutomationActionEventHub

| Name | Description | Value |
|-|-|-|
| actionType | The type of the action that will be triggered by the Automation | 'EventHub' (required) |
| connectionString | The target Event Hub connection string (it will not be included in any response). | string |
| eventHubResourceId | The target Event Hub Azure Resource ID. | string |


### AutomationActionLogicApp

| Name | Description | Value |
|-|-|-|
| actionType | The type of the action that will be triggered by the Automation | 'LogicApp' (required) |
| logicAppResourceId | The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App | string |
| uri | The Logic App trigger URI endpoint (it will not be included in any response). | string |


### AutomationActionWorkspace

| Name | Description | Value |
|-|-|-|
| actionType | The type of the action that will be triggered by the Automation | 'Workspace' (required) |
| workspaceResourceId | The fully qualified Log Analytics Workspace Azure Resource ID. | string |


### AutomationScope

| Name | Description | Value |
|-|-|-|
| description | The resources scope description. | string |
| scopePath | The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs). | string |


### AutomationSource

| Name | Description | Value |
|-|-|-|
| eventSource | A valid event source type. | 'Alerts''Assessments''AssessmentsSnapshot''RegulatoryComplianceAssessment''RegulatoryComplianceAssessmentSnapshot''SecureScoreControls''SecureScoreControlsSnapshot''SecureScores''SecureScoresSnapshot''SubAssessments''SubAssessmentsSnapshot' |
| ruleSets | A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or'). | AutomationRuleSet[] |


### AutomationRuleSet

| Name | Description | Value |
|-|-|-|
| rules |  | AutomationTriggeringRule[] |


### AutomationTriggeringRule

| Name | Description | Value |
|-|-|-|
| expectedValue | The expected value. | string |
| operator | A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType. | 'Contains''EndsWith''Equals''GreaterThan''GreaterThanOrEqualTo''LesserThan''LesserThanOrEqualTo''NotEquals''StartsWith' |
| propertyJPath | The JPath of the entity model property that should be checked. | string |
| propertyType | The data type of the compared operands (string, integer, floating point number or a boolean [true/false]] | 'Boolean''Integer''Number''String' |
## Microsoft.Security/autoProvisioningSettings@2017-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/autoProvisioningSettings@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoProvision = "string"
    }
  })
}

```

### autoProvisioningSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Auto provisioning setting data | AutoProvisioningSettingProperties |


### AutoProvisioningSettingProperties

| Name | Description | Value |
|-|-|-|
| autoProvision | Describes what kind of security agent provisioning action to take | 'Off''On' (required) |
## Microsoft.Security/connectors@2020-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/connectors@2020-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationDetails = {
        grantedPermissions = [
          "string"
        ]
        authenticationType = "string"
        // For remaining properties, see AuthenticationDetailsProperties objects
      }
      hybridComputeSettings = {
        autoProvision = "string"
        proxyServer = {
          ip = "string"
          port = "string"
        }
        region = "string"
        resourceGroupName = "string"
        servicePrincipal = {
          applicationId = "string"
          secret = "string"
        }
      }
    }
  })
}

```

### connectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Connector setting data | ConnectorSettingProperties |


### ConnectorSettingProperties

| Name | Description | Value |
|-|-|-|
| authenticationDetails | Settings for authentication management, these settings are relevant only for the cloud connector. | AuthenticationDetailsProperties |
| hybridComputeSettings | Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute). | HybridComputeSettingsProperties |


### AuthenticationDetailsProperties

| Name | Description | Value |
|-|-|-|
| grantedPermissions | The permissions detected in the cloud account. | String array containing any of:'AWS::AWSSecurityHubReadOnlyAccess''AWS::AmazonSSMAutomationRole''AWS::SecurityAudit''GCP::Security Center Admin Viewer' |
| authenticationType | Set the object type | awsAssumeRoleawsCredsgcpCredentials(required) |


### AwAssumeRoleAuthenticationDetailsProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials. | 'awsAssumeRole' (required) |
| awsAssumeRoleArn | Assumed role ID is an identifier that you can use to create temporary security credentials. | string (required) |
| awsExternalId | A unique identifier that is required when you assume a role in another account. | string (required) |


### AwsCredsAuthenticationDetailsProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials. | 'awsCreds' (required) |
| awsAccessKeyId | Public key element of the AWS credential object (write only) | string (required) |
| awsSecretAccessKey | Secret key element of the AWS credential object (write only) | string (required) |


### GcpCredentialsDetailsProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials. | 'gcpCredentials' (required) |
| authProviderX509CertUrl | Auth provider x509 certificate URL field of the API key (write only) | string (required) |
| authUri | Auth URI field of the API key (write only) | string (required) |
| clientEmail | Client email field of the API key (write only) | string (required) |
| clientId | Client ID field of the API key (write only) | string (required) |
| clientX509CertUrl | Client x509 certificate URL field of the API key (write only) | string (required) |
| organizationId | The organization ID of the GCP cloud account | string (required) |
| privateKey | Private key field of the API key (write only) | string (required) |
| privateKeyId | Private key ID field of the API key (write only) | string (required) |
| projectId | Project ID field of the API key (write only) | string (required) |
| tokenUri | Token URI field of the API key (write only) | string (required) |
| type | Type field of the API key (write only) | string (required) |


### HybridComputeSettingsProperties

| Name | Description | Value |
|-|-|-|
| autoProvision | Whether or not to automatically install Azure Arc (hybrid compute) agents on machines | 'Off''On' (required) |
| proxyServer | For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use. | ProxyServerProperties |
| region | The location where the metadata of machines will be stored | string |
| resourceGroupName | The name of the resource group where Arc (Hybrid Compute) connectors are connected. | string |
| servicePrincipal | An object to access resources that are secured by an Azure AD tenant. | ServicePrincipalProperties |


### ProxyServerProperties

| Name | Description | Value |
|-|-|-|
| ip | Proxy server IP | string |
| port | Proxy server port | string |


### ServicePrincipalProperties

| Name | Description | Value |
|-|-|-|
| applicationId | Application ID of service principal. | string |
| secret | A secret string that the application uses to prove its identity, also can be referred to as application password (write only). | string |
## Microsoft.Security/customAssessmentAutomations@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/customAssessmentAutomations@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      compressedQuery = "string"
      description = "string"
      displayName = "string"
      remediationDescription = "string"
      severity = "string"
      supportedCloud = "string"
    }
  })
}

```

### customAssessmentAutomations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | describes Custom Assessment Automation request properties. | CustomAssessmentAutomationRequestPropertiesOrCustomA... |


### CustomAssessmentAutomationRequestPropertiesOrCustomA...

| Name | Description | Value |
|-|-|-|
| compressedQuery | Base 64 encoded KQL query representing the assessment automation results required. | string |
| description | The description to relate to the assessments generated by this assessment automation. | string |
| displayName | The display name of the assessments generated by this assessment automation. | string |
| remediationDescription | The remediation description to relate to the assessments generated by this assessment automation. | string |
| severity | The severity to relate to the assessments generated by this assessment automation. | 'High''Low''Medium' |
| supportedCloud | Relevant cloud for the custom assessment automation. | 'AWS''GCP' |
## Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principal = "string"
    }
  })
}

```

### customEntityStoreAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | describes properties of custom entity store assignment request | CustomEntityStoreAssignmentRequestPropertiesOrCustom... |


### CustomEntityStoreAssignmentRequestPropertiesOrCustom...

| Name | Description | Value |
|-|-|-|
| principal | The principal assigned with entity store. If not provided, will use caller principal. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId] | string |
## Microsoft.Security/defenderForStorageSettings@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/defenderForStorageSettings@2022-12-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isEnabled = bool
      malwareScanning = {
        onUpload = {
          capGBPerMonth = int
          isEnabled = bool
        }
        scanResultsEventGridTopicResourceId = "string"
      }
      overrideSubscriptionLevelSettings = bool
      sensitiveDataDiscovery = {
        isEnabled = bool
      }
    }
  })
}

```

### defenderForStorageSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'current' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Defender for Storage resource properties. | DefenderForStorageSettingProperties |


### DefenderForStorageSettingProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether Defender for Storage is enabled on this storage account. | bool |
| malwareScanning | Properties of Malware Scanning. | MalwareScanningProperties |
| overrideSubscriptionLevelSettings | Indicates whether the settings defined for this storage account should override the settings defined for the subscription. | bool |
| sensitiveDataDiscovery | Properties of Sensitive Data Discovery. | SensitiveDataDiscoveryProperties |


### MalwareScanningProperties

| Name | Description | Value |
|-|-|-|
| onUpload | Properties of On Upload malware scanning. | OnUploadProperties |
| scanResultsEventGridTopicResourceId | Optional. Resource id of an Event Grid Topic to send scan results to. | string |


### OnUploadProperties

| Name | Description | Value |
|-|-|-|
| capGBPerMonth | Defines the max GB to be scanned per Month. Set to -1 if no capping is needed. | int |
| isEnabled | Indicates whether On Upload malware scanning should be enabled. | bool |


### SensitiveDataDiscoveryProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether Sensitive Data Discovery should be enabled. | bool |
## Microsoft.Security/deviceSecurityGroups@2019-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/deviceSecurityGroups@2019-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowlistRules = [
        {
          allowlistValues = [
            "string"
          ]
          isEnabled = bool
          ruleType = "string"
          // For remaining properties, see AllowlistCustomAlertRule objects
        }
      ]
      denylistRules = [
        {
          denylistValues = [
            "string"
          ]
          isEnabled = bool
          ruleType = "string"
        }
      ]
      thresholdRules = [
        {
          isEnabled = bool
          maxThreshold = int
          minThreshold = int
          ruleType = "string"
          // For remaining properties, see ThresholdCustomAlertRule objects
        }
      ]
      timeWindowRules = [
        {
          isEnabled = bool
          maxThreshold = int
          minThreshold = int
          timeWindowSize = "string"
          ruleType = "string"
          // For remaining properties, see TimeWindowCustomAlertRule objects
        }
      ]
    }
  })
}

```

### deviceSecurityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Device Security group data | DeviceSecurityGroupProperties |


### DeviceSecurityGroupProperties

| Name | Description | Value |
|-|-|-|
| allowlistRules | The allow-list custom alert rules. | AllowlistCustomAlertRule[] |
| denylistRules | The deny-list custom alert rules. | DenylistCustomAlertRule[] |
| thresholdRules | The list of custom alert threshold rules. | ThresholdCustomAlertRule[] |
| timeWindowRules | The list of custom alert time-window rules. | TimeWindowCustomAlertRule[] |


### AllowlistCustomAlertRule

| Name | Description | Value |
|-|-|-|
| allowlistValues | The values to allow. The format of the values depends on the rule type. | string[] (required) |
| isEnabled | Status of the custom alert. | bool (required) |
| ruleType | Set the object type | ConnectionFromIpNotAllowedConnectionToIpNotAllowedLocalUserNotAllowedProcessNotAllowed(required) |


### ConnectionFromIpNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ConnectionFromIpNotAllowed' (required) |


### ConnectionToIpNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ConnectionToIpNotAllowed' (required) |


### LocalUserNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'LocalUserNotAllowed' (required) |


### ProcessNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ProcessNotAllowed' (required) |


### DenylistCustomAlertRule

| Name | Description | Value |
|-|-|-|
| denylistValues | The values to deny. The format of the values depends on the rule type. | string[] (required) |
| isEnabled | Status of the custom alert. | bool (required) |
| ruleType | The type of the custom alert rule. | string (required) |


### ThresholdCustomAlertRule

| Name | Description | Value |
|-|-|-|
| isEnabled | Status of the custom alert. | bool (required) |
| maxThreshold | The maximum threshold. | int (required) |
| minThreshold | The minimum threshold. | int (required) |
| ruleType | Set the object type | ActiveConnectionsNotInAllowedRangeAmqpC2DMessagesNotInAllowedRangeAmqpC2DRejectedMessagesNotInAllowedRangeAmqpD2CMessagesNotInAllowedRangeDirectMethodInvokesNotInAllowedRangeFailedLocalLoginsNotInAllowedRangeFileUploadsNotInAllowedRangeHttpC2DMessagesNotInAllowedRangeHttpC2DRejectedMessagesNotInAllowedRangeHttpD2CMessagesNotInAllowedRangeMqttC2DMessagesNotInAllowedRangeMqttC2DRejectedMessagesNotInAllowedRangeMqttD2CMessagesNotInAllowedRangeQueuePurgesNotInAllowedRangeTwinUpdatesNotInAllowedRangeUnauthorizedOperationsNotInAllowedRange(required) |


### ActiveConnectionsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ActiveConnectionsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### AmqpC2DMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'AmqpC2DMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### AmqpC2DRejectedMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'AmqpC2DRejectedMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### AmqpD2CMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'AmqpD2CMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### DirectMethodInvokesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'DirectMethodInvokesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### FailedLocalLoginsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'FailedLocalLoginsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### FileUploadsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'FileUploadsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### HttpC2DMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'HttpC2DMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### HttpC2DRejectedMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'HttpC2DRejectedMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### HttpD2CMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'HttpD2CMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### MqttC2DMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'MqttC2DMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### MqttC2DRejectedMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'MqttC2DRejectedMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### MqttD2CMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'MqttD2CMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### QueuePurgesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'QueuePurgesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### TwinUpdatesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'TwinUpdatesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### UnauthorizedOperationsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'UnauthorizedOperationsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### TimeWindowCustomAlertRule

| Name | Description | Value |
|-|-|-|
| isEnabled | Status of the custom alert. | bool (required) |
| maxThreshold | The maximum threshold. | int (required) |
| minThreshold | The minimum threshold. | int (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |
| ruleType | Set the object type | ActiveConnectionsNotInAllowedRangeAmqpC2DMessagesNotInAllowedRangeAmqpC2DRejectedMessagesNotInAllowedRangeAmqpD2CMessagesNotInAllowedRangeDirectMethodInvokesNotInAllowedRangeFailedLocalLoginsNotInAllowedRangeFileUploadsNotInAllowedRangeHttpC2DMessagesNotInAllowedRangeHttpC2DRejectedMessagesNotInAllowedRangeHttpD2CMessagesNotInAllowedRangeMqttC2DMessagesNotInAllowedRangeMqttC2DRejectedMessagesNotInAllowedRangeMqttD2CMessagesNotInAllowedRangeQueuePurgesNotInAllowedRangeTwinUpdatesNotInAllowedRangeUnauthorizedOperationsNotInAllowedRange(required) |
## Microsoft.Security/governanceRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/governanceRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conditionSets = [ object ]
      description = "string"
      displayName = "string"
      excludedScopes = [
        "string"
      ]
      governanceEmailNotification = {
        disableManagerEmailNotification = bool
        disableOwnerEmailNotification = bool
      }
      includeMemberScopes = bool
      isDisabled = bool
      isGracePeriod = bool
      metadata = {}
      ownerSource = {
        type = "string"
        value = "string"
      }
      remediationTimeframe = "string"
      rulePriority = int
      ruleType = "string"
      sourceResourceType = "Assessments"
    }
  })
}

```

### governanceRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of a governance rule | GovernanceRuleProperties |


### GovernanceRuleProperties

| Name | Description | Value |
|-|-|-|
| conditionSets | The governance rule conditionSets - see examples | any[] (required) |
| description | Description of the governance rule | string |
| displayName | Display name of the governance rule | string (required) |
| excludedScopes | Excluded scopes, filter out the descendants of the scope (on management scopes) | string[] |
| governanceEmailNotification | The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners | GovernanceRuleEmailNotification |
| includeMemberScopes | Defines whether the rule is management scope rule (master connector as a single scope or management scope) | bool |
| isDisabled | Defines whether the rule is active/inactive | bool |
| isGracePeriod | Defines whether there is a grace period on the governance rule | bool |
| metadata | The governance rule metadata | GovernanceRuleMetadata |
| ownerSource | The owner source for the governance rule - e.g. Manually by user@contoso.com - see example | GovernanceRuleOwnerSource(required) |
| remediationTimeframe | Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days | stringConstraints:Pattern =^[0-9]+\.[0-9]{2}:[0-9]{2}:[0-9]{2}$ |
| rulePriority | The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed | int (required)Constraints:Min value = 0Max value = 1000 |
| ruleType | The rule type of the governance rule, defines the source of the rule e.g. Integrated | 'Integrated''ServiceNow' (required) |
| sourceResourceType | The governance rule source, what the rule affects, e.g. Assessments | 'Assessments' (required) |


### GovernanceRuleEmailNotification

| Name | Description | Value |
|-|-|-|
| disableManagerEmailNotification | Defines whether manager email notifications are disabled | bool |
| disableOwnerEmailNotification | Defines whether owner email notifications are disabled | bool |


### GovernanceRuleOwnerSource

| Name | Description | Value |
|-|-|-|
| type | The owner type for the governance rule owner source | 'ByTag''Manually' |
| value | The source value e.g. tag key like owner name or email address | string |
## Microsoft.Security/informationProtectionPolicies@2017-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/informationProtectionPolicies@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationTypes = {
        {customized property} = {
          custom = bool
          description = "string"
          displayName = "string"
          enabled = bool
          keywords = [
            {
              canBeNumeric = bool
              custom = bool
              excluded = bool
              pattern = "string"
            }
          ]
          order = int
          recommendedLabelId = "string"
        }
      }
      labels = {
        {customized property} = {
          description = "string"
          displayName = "string"
          enabled = bool
          order = int
          rank = "string"
        }
      }
    }
  })
}

```

### informationProtectionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: see valuesValid characters:Use one of:customeffective |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Information protection policy data | InformationProtectionPolicyProperties |


### InformationProtectionPolicyProperties

| Name | Description | Value |
|-|-|-|
| informationTypes | The sensitivity information types. | InformationProtectionPolicyPropertiesInformationType... |
| labels | Dictionary of sensitivity labels. | InformationProtectionPolicyPropertiesLabels |


### InformationProtectionPolicyPropertiesInformationType...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InformationType |


### InformationType

| Name | Description | Value |
|-|-|-|
| custom | Indicates whether the information type is custom or not. | bool |
| description | The description of the information type. | string |
| displayName | The name of the information type. | string |
| enabled | Indicates whether the information type is enabled or not. | bool |
| keywords | The information type keywords. | InformationProtectionKeyword[] |
| order | The order of the information type. | int |
| recommendedLabelId | The recommended label id to be associated with this information type. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


### InformationProtectionKeyword

| Name | Description | Value |
|-|-|-|
| canBeNumeric | Indicates whether the keyword can be applied on numeric types or not. | bool |
| custom | Indicates whether the keyword is custom or not. | bool |
| excluded | Indicates whether the keyword is excluded or not. | bool |
| pattern | The keyword pattern. | string |


### InformationProtectionPolicyPropertiesLabels

| Name | Description | Value |
|-|-|-|
| {customized property} |  | SensitivityLabel |


### SensitivityLabel

| Name | Description | Value |
|-|-|-|
| description | The description of the sensitivity label. | string |
| displayName | The name of the sensitivity label. | string |
| enabled | Indicates whether the label is enabled or not. | bool |
| order | The order of the sensitivity label. | int |
| rank | The rank of the sensitivity label. | 'Critical''High''Low''Medium''None' |
## Microsoft.Security/iotSecuritySolutions@2019-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/iotSecuritySolutions@2019-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalWorkspaces = [
        {
          dataTypes = [
            "string"
          ]
          type = "Sentinel"
          workspace = "string"
        }
      ]
      disabledDataSources = "TwinData"
      displayName = "string"
      export = "RawEvents"
      iotHubs = [
        "string"
      ]
      recommendationsConfiguration = [
        {
          recommendationType = "string"
          status = "string"
        }
      ]
      status = "string"
      unmaskedIpLoggingStatus = "string"
      userDefinedResources = {
        query = "string"
        querySubscriptions = [
          "string"
        ]
      }
      workspace = "string"
    }
  })
}

```

### iotSecuritySolutions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| location | The resource location. | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Security Solution data | IoTSecuritySolutionProperties |


### IoTSecuritySolutionProperties

| Name | Description | Value |
|-|-|-|
| additionalWorkspaces | List of additional workspaces | AdditionalWorkspacesProperties[] |
| disabledDataSources | Disabled data sources. Disabling these data sources compromises the system. | String array containing any of:'TwinData' |
| displayName | Resource display name. | string (required) |
| export | List of additional options for exporting to workspace data. | String array containing any of:'RawEvents' |
| iotHubs | IoT Hub resource IDs | string[] (required) |
| recommendationsConfiguration | List of the configuration status for each recommendation type. | RecommendationConfigurationProperties[] |
| status | Status of the IoT Security solution. | 'Disabled''Enabled' |
| unmaskedIpLoggingStatus | Unmasked IP address logging status | 'Disabled''Enabled' |
| userDefinedResources | Properties of the IoT Security solution's user defined resources. | UserDefinedResourcesProperties |
| workspace | Workspace resource ID | string |


### AdditionalWorkspacesProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | List of data types sent to workspace | String array containing any of:'Alerts''RawEvents' |
| type | Workspace type. | 'Sentinel' |
| workspace | Workspace resource id | string |


### RecommendationConfigurationProperties

| Name | Description | Value |
|-|-|-|
| recommendationType | The type of IoT Security recommendation. | 'IoT_ACRAuthentication''IoT_AgentSendsUnutilizedMessages''IoT_Baseline''IoT_EdgeHubMemOptimize''IoT_EdgeLoggingOptions''IoT_IPFilter_DenyAll''IoT_IPFilter_PermissiveRule''IoT_InconsistentModuleSettings''IoT_InstallAgent''IoT_OpenPorts''IoT_PermissiveFirewallPolicy''IoT_PermissiveInputFirewallRules''IoT_PermissiveOutputFirewallRules''IoT_PrivilegedDockerOptions''IoT_SharedCredentials''IoT_VulnerableTLSCipherSuite' (required) |
| status | Recommendation status. When the recommendation status is disabled recommendations are not generated. | 'Disabled''Enabled' (required) |


### UserDefinedResourcesProperties

| Name | Description | Value |
|-|-|-|
| query | Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs"" | string (required) |
| querySubscriptions | List of Azure subscription ids on which the user defined resources query should be executed. | string[] (required)Constraints:Pattern =^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$ |
## Microsoft.Security/locations/applicationWhitelistings@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/locations/applicationWhitelistings@2020-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enforcementMode = "string"
      pathRecommendations = [
        {
          action = "string"
          common = bool
          configurationStatus = "string"
          fileType = "string"
          path = "string"
          publisherInfo = {
            binaryName = "string"
            productName = "string"
            publisherName = "string"
            version = "string"
          }
          type = "string"
          usernames = [
            {
              recommendationAction = "string"
              username = "string"
            }
          ]
          userSids = [
            "string"
          ]
        }
      ]
      protectionMode = {
        exe = "string"
        executable = "string"
        msi = "string"
        script = "string"
      }
      vmRecommendations = [
        {
          configurationStatus = "string"
          enforcementSupport = "string"
          recommendationAction = "string"
          resourceId = "string"
        }
      ]
    }
  })
}

```

### locations/applicationWhitelistings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Represents a machines group and set of rules to be allowed running on a machine | AdaptiveApplicationControlGroupData(required) |


### AdaptiveApplicationControlGroupData

| Name | Description | Value |
|-|-|-|
| enforcementMode | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| pathRecommendations |  | PathRecommendation[] |
| protectionMode | The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux. | ProtectionMode |
| vmRecommendations |  | VmRecommendation[] |


### PathRecommendation

| Name | Description | Value |
|-|-|-|
| action | The recommendation action of the machine or rule | 'Add''Recommended''Remove' |
| common | Whether the application is commonly run on the machine | bool |
| configurationStatus | The configuration status of the machines group or machine or rule | 'Configured''Failed''InProgress''NoStatus''NotConfigured' |
| fileType | The type of the file (for Linux files - Executable is used) | 'Dll''Exe''Executable''Msi''Script''Unknown' |
| path | The full path of the file, or an identifier of the application | string |
| publisherInfo | Represents the publisher information of a process/rule | PublisherInfo |
| type | The type of the rule to be allowed | 'BinarySignature''File''FileHash''ProductSignature''PublisherSignature''VersionAndAboveSignature' |
| usernames |  | UserRecommendation[] |
| userSids |  | string[] |


### PublisherInfo

| Name | Description | Value |
|-|-|-|
| binaryName | The "OriginalName" field taken from the file's version resource | string |
| productName | The product name taken from the file's version resource | string |
| publisherName | The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country | string |
| version | The binary file version taken from the file's version resource | string |


### UserRecommendation

| Name | Description | Value |
|-|-|-|
| recommendationAction | The recommendation action of the machine or rule | 'Add''Recommended''Remove' |
| username | Represents a user that is recommended to be allowed for a certain rule | string |


### ProtectionMode

| Name | Description | Value |
|-|-|-|
| exe | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| executable | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| msi | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| script | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |


### VmRecommendation

| Name | Description | Value |
|-|-|-|
| configurationStatus | The configuration status of the machines group or machine or rule | 'Configured''Failed''InProgress''NoStatus''NotConfigured' |
| enforcementSupport | The machine supportability of Enforce feature | 'NotSupported''Supported''Unknown' |
| recommendationAction | The recommendation action of the machine or rule | 'Add''Recommended''Remove' |
| resourceId | The full resource id of the machine | string |
## Microsoft.Security/pricings@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/pricings@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extensions = [
        {
          additionalExtensionProperties = {}
          isEnabled = "string"
          name = "string"
        }
      ]
      pricingTier = "string"
      subPlan = "string"
    }
  })
}

```

### pricings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Pricing data | PricingProperties |


### PricingProperties

| Name | Description | Value |
|-|-|-|
| extensions | Optional. List of extensions offered under a plan. | Extension[] |
| pricingTier | The pricing tier value. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features. | 'Free''Standard' (required) |
| subPlan | The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied. | string |


### Extension

| Name | Description | Value |
|-|-|-|
| additionalExtensionProperties | Property values associated with the extension. | ExtensionAdditionalExtensionProperties |
| isEnabled | Indicates whether the extension is enabled. | 'False''True' (required) |
| name | The extension name. Supported values are:AgentlessDiscoveryForKubernetes- API-based discovery of information about Kubernetes cluster architecture, workload objects, and setup. Required for Kubernetes inventory, identity and network exposure detection, attack path analysis and risk hunting as part of the cloud security explorer.Available for CloudPosture plan.OnUploadMalwareScanning- Limits the GB to be scanned per month for each storage account within the subscription. Once this limit reached on a given storage account, Blobs won't be scanned during current calendar month.Available for StorageAccounts plan.SensitiveDataDiscovery- Sensitive data discovery identifies Blob storage container with sensitive data such as credentials, credit cards, and more, to help prioritize and investigate security events.Available for StorageAccounts and CloudPosture plans.ContainerRegistriesVulnerabilityAssessments- Provides vulnerability management for images stored in your container registries.Available for CloudPosture and Containers plans. | string (required) |


### ExtensionAdditionalExtensionProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
## Microsoft.Security/pricings/securityOperators@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/pricings/securityOperators@2023-01-01-preview"
  name = "string"
  parent_id = "string"
}

```

### pricings/securityOperators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:pricings |
## Microsoft.Security/securityConnectors@2023-10-01-preview

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
## Microsoft.Security/securityConnectors/devops@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops@2023-09-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorization = {
        code = "string"
      }
      autoDiscovery = "string"
      provisioningState = "string"
      topLevelInventoryList = [
        "string"
      ]
    }
  })
}

```

### securityConnectors/devops

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:securityConnectors |
| properties | DevOps Configuration properties. | DevOpsConfigurationProperties |


### DevOpsConfigurationProperties

| Name | Description | Value |
|-|-|-|
| authorization | Authorization payload. | Authorization |
| autoDiscovery | AutoDiscovery states. | 'Disabled''Enabled''NotApplicable' |
| provisioningState | The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure. | 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded' |
| topLevelInventoryList | List of top-level inventory to select when AutoDiscovery is disabled.This field is ignored when AutoDiscovery is enabled. | string[] |


### Authorization

| Name | Description | Value |
|-|-|-|
| code | Gets or sets one-time OAuth code to exchange for refresh and access tokens.Only used during PUT/PATCH operations. The secret is cleared during GET. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
## Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      provisioningState = "string"
    }
  })
}

```

### securityConnectors/devops/azureDevOpsOrgs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devops |
| properties | Azure DevOps Organization properties. | AzureDevOpsOrgProperties |


### AzureDevOpsOrgProperties

| Name | Description | Value |
|-|-|-|
| actionableRemediation | Configuration payload for PR Annotations. | ActionableRemediation |
| onboardingState | Details about resource onboarding status across all connectors.OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.Onboarded - this resource has already been onboarded by the specified connector.NotOnboarded - this resource has not been onboarded to any connector.NotApplicable - the onboarding state is not applicable to the current endpoint. | 'NotApplicable''NotOnboarded''Onboarded''OnboardedByOtherConnector' |
| provisioningState | The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure. | 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded' |


### ActionableRemediation

| Name | Description | Value |
|-|-|-|
| branchConfiguration | Repository branch configuration for PR Annotations. | TargetBranchConfiguration |
| categoryConfigurations | Gets or sets list of categories and severity levels. | CategoryConfiguration[] |
| inheritFromParentState | Update Settings.Enabled - Resource should inherit configurations from parent.Disabled - Resource should not inherit configurations from parent. | 'Disabled''Enabled' |
| state | ActionableRemediation Setting.None - the setting was never set.Enabled - ActionableRemediation is enabled.Disabled - ActionableRemediation is disabled. | 'Disabled''Enabled''None' |


### TargetBranchConfiguration

| Name | Description | Value |
|-|-|-|
| annotateDefaultBranch | Configuration of PR Annotations on default branch.Enabled - PR Annotations are enabled on the resource's default branch.Disabled - PR Annotations are disabled on the resource's default branch. | 'Disabled''Enabled' |
| branchNames | Gets or sets branches that should have annotations. | string[] |


### CategoryConfiguration

| Name | Description | Value |
|-|-|-|
| category | Rule categories.Code - code scanning results.Artifact scanning results.Dependencies scanning results.IaC results.Secrets scanning results.Container scanning results. | 'Artifacts''Code''Containers''Dependencies''IaC''Secrets' |
| minimumSeverityLevel | Gets or sets minimum severity level for a given category. | string |
## Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      parentOrgName = "string"
      provisioningState = "string"
    }
  })
}

```

### securityConnectors/devops/azureDevOpsOrgs/projects

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:azureDevOpsOrgs |
| properties | Azure DevOps Project properties. | AzureDevOpsProjectProperties |


### AzureDevOpsProjectProperties

| Name | Description | Value |
|-|-|-|
| actionableRemediation | Configuration payload for PR Annotations. | ActionableRemediation |
| onboardingState | Details about resource onboarding status across all connectors.OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.Onboarded - this resource has already been onboarded by the specified connector.NotOnboarded - this resource has not been onboarded to any connector.NotApplicable - the onboarding state is not applicable to the current endpoint. | 'NotApplicable''NotOnboarded''Onboarded''OnboardedByOtherConnector' |
| parentOrgName | Gets or sets parent Azure DevOps Organization name. | string |
| provisioningState | The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure. | 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded' |


### ActionableRemediation

| Name | Description | Value |
|-|-|-|
| branchConfiguration | Repository branch configuration for PR Annotations. | TargetBranchConfiguration |
| categoryConfigurations | Gets or sets list of categories and severity levels. | CategoryConfiguration[] |
| inheritFromParentState | Update Settings.Enabled - Resource should inherit configurations from parent.Disabled - Resource should not inherit configurations from parent. | 'Disabled''Enabled' |
| state | ActionableRemediation Setting.None - the setting was never set.Enabled - ActionableRemediation is enabled.Disabled - ActionableRemediation is disabled. | 'Disabled''Enabled''None' |


### TargetBranchConfiguration

| Name | Description | Value |
|-|-|-|
| annotateDefaultBranch | Configuration of PR Annotations on default branch.Enabled - PR Annotations are enabled on the resource's default branch.Disabled - PR Annotations are disabled on the resource's default branch. | 'Disabled''Enabled' |
| branchNames | Gets or sets branches that should have annotations. | string[] |


### CategoryConfiguration

| Name | Description | Value |
|-|-|-|
| category | Rule categories.Code - code scanning results.Artifact scanning results.Dependencies scanning results.IaC results.Secrets scanning results.Container scanning results. | 'Artifacts''Code''Containers''Dependencies''IaC''Secrets' |
| minimumSeverityLevel | Gets or sets minimum severity level for a given category. | string |
## Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      parentOrgName = "string"
      parentProjectName = "string"
      provisioningState = "string"
    }
  })
}

```

### securityConnectors/devops/azureDevOpsOrgs/projects/r...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| properties | Azure DevOps Repository properties. | AzureDevOpsRepositoryProperties |


### AzureDevOpsRepositoryProperties

| Name | Description | Value |
|-|-|-|
| actionableRemediation | Configuration payload for PR Annotations. | ActionableRemediation |
| onboardingState | Details about resource onboarding status across all connectors.OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.Onboarded - this resource has already been onboarded by the specified connector.NotOnboarded - this resource has not been onboarded to any connector.NotApplicable - the onboarding state is not applicable to the current endpoint. | 'NotApplicable''NotOnboarded''Onboarded''OnboardedByOtherConnector' |
| parentOrgName | Gets or sets parent Azure DevOps Organization name. | string |
| parentProjectName | Gets or sets parent Azure DevOps Project name. | string |
| provisioningState | The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure. | 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded' |


### ActionableRemediation

| Name | Description | Value |
|-|-|-|
| branchConfiguration | Repository branch configuration for PR Annotations. | TargetBranchConfiguration |
| categoryConfigurations | Gets or sets list of categories and severity levels. | CategoryConfiguration[] |
| inheritFromParentState | Update Settings.Enabled - Resource should inherit configurations from parent.Disabled - Resource should not inherit configurations from parent. | 'Disabled''Enabled' |
| state | ActionableRemediation Setting.None - the setting was never set.Enabled - ActionableRemediation is enabled.Disabled - ActionableRemediation is disabled. | 'Disabled''Enabled''None' |


### TargetBranchConfiguration

| Name | Description | Value |
|-|-|-|
| annotateDefaultBranch | Configuration of PR Annotations on default branch.Enabled - PR Annotations are enabled on the resource's default branch.Disabled - PR Annotations are disabled on the resource's default branch. | 'Disabled''Enabled' |
| branchNames | Gets or sets branches that should have annotations. | string[] |


### CategoryConfiguration

| Name | Description | Value |
|-|-|-|
| category | Rule categories.Code - code scanning results.Artifact scanning results.Dependencies scanning results.IaC results.Secrets scanning results.Container scanning results. | 'Artifacts''Code''Containers''Dependencies''IaC''Secrets' |
| minimumSeverityLevel | Gets or sets minimum severity level for a given category. | string |
## Microsoft.Security/securityContacts@2020-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityContacts@2020-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alertNotifications = {
        minimalSeverity = "string"
        state = "string"
      }
      emails = "string"
      notificationsByRole = {
        roles = [
          "string"
        ]
        state = "string"
      }
      phone = "string"
    }
  })
}

```

### securityContacts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Security contact data | SecurityContactProperties |


### SecurityContactProperties

| Name | Description | Value |
|-|-|-|
| alertNotifications | Defines whether to send email notifications about new security alerts | SecurityContactPropertiesAlertNotifications |
| emails | List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact. | string |
| notificationsByRole | Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription. | SecurityContactPropertiesNotificationsByRole |
| phone | The security contact's phone number | string |


### SecurityContactPropertiesAlertNotifications

| Name | Description | Value |
|-|-|-|
| minimalSeverity | Defines the minimal alert severity which will be sent as email notifications | 'High''Low''Medium' |
| state | Defines if email notifications will be sent about new security alerts | 'Off''On' |


### SecurityContactPropertiesNotificationsByRole

| Name | Description | Value |
|-|-|-|
| roles | Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles: | String array containing any of:'AccountAdmin''Contributor''Owner''ServiceAdmin' |
| state | Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription. | 'Off''On' |
## Microsoft.Security/sensitivitySettings@2023-02-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/sensitivitySettings@2023-02-15-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    sensitiveInfoTypesIds = [
      "string"
    ]
    sensitivityThresholdLabelId = "string"
    sensitivityThresholdLabelOrder = int
  })
}

```

### sensitivitySettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'current' |
| sensitiveInfoTypesIds | List of selected sensitive info types' IDs. | string[] (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| sensitivityThresholdLabelId | The id of the sensitivity threshold label. Any label at or above this rank will be considered sensitive. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| sensitivityThresholdLabelOrder | The order of the sensitivity threshold label. Any label at or above this order will be considered sensitive. If set to -1, sensitivity by labels is turned off | int |
## Microsoft.Security/serverVulnerabilityAssessments@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/serverVulnerabilityAssessments@2020-01-01"
  name = "default"
  parent_id = "string"
}

```

### serverVulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
## Microsoft.Security/serverVulnerabilityAssessmentsSettings@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/serverVulnerabilityAssessmentsSettings@2023-05-01"
  name = "azureServersSetting"
  parent_id = "string"
  // For remaining properties, see serverVulnerabilityAssessmentsSettings objects
  body = jsonencode({
    kind = "string"
  })
}

```

### serverVulnerabilityAssessmentsSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'azureServersSetting' |
| kind | Set the object type | AzureServersSetting(required) |


### AzureServersSetting

| Name | Description | Value |
|-|-|-|
| kind | The kind of the server vulnerability assessments setting. | 'AzureServersSetting' (required) |
| properties | The vulnerability assessments setting properties on Azure servers in the defined scope. | ServerVulnerabilityAssessmentsAzureSettingProperties |


### ServerVulnerabilityAssessmentsAzureSettingProperties

| Name | Description | Value |
|-|-|-|
| selectedProvider | The selected vulnerability assessments provider on Azure servers in the defined scope. | 'MdeTvm' (required) |
## Microsoft.Security/settings@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/settings@2022-05-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
  })
}

```

### settings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: see valuesValid characters:Use one of:MCASSentinelWDATPWDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW |
| kind | Set the object type | AlertSyncSettingsDataExportSettings(required) |


### AlertSyncSettings

| Name | Description | Value |
|-|-|-|
| kind | the kind of the settings string | 'AlertSyncSettings' (required) |
| properties | Alert sync setting data | AlertSyncSettingProperties |


### AlertSyncSettingProperties

| Name | Description | Value |
|-|-|-|
| enabled | Is the alert sync setting enabled | bool (required) |


### DataExportSettings

| Name | Description | Value |
|-|-|-|
| kind | the kind of the settings string | 'DataExportSettings' (required) |
| properties | Data export setting data | DataExportSettingProperties |


### DataExportSettingProperties

| Name | Description | Value |
|-|-|-|
| enabled | Is the data export setting enabled | bool (required) |
## Microsoft.Security/standards@2021-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/standards@2021-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      category = "string"
      components = [
        {
          key = "string"
        }
      ]
      description = "string"
      displayName = "string"
      supportedClouds = [
        "string"
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

### standards

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Properties of a security standard | StandardProperties |


### StandardProperties

| Name | Description | Value |
|-|-|-|
| category | category of the standard provided | string |
| components | List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys. | StandardComponentProperties[] |
| description | description of the standard | string |
| displayName | display name of the standard, equivalent to the standardId | string |
| supportedClouds | List of all standard supported clouds. | String array containing any of:'AWS''GCP' |


### StandardComponentProperties

| Name | Description | Value |
|-|-|-|
| key | Component Key matching componentMetadata | string |
## Microsoft.Security/workspaceSettings@2017-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/workspaceSettings@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scope = "string"
      workspaceId = "string"
    }
  })
}

```

### workspaceSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Workspace setting data | WorkspaceSettingProperties |


### WorkspaceSettingProperties

| Name | Description | Value |
|-|-|-|
| scope | All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope | string (required) |
| workspaceId | The full Azure ID of the workspace to save the data in | string (required) |
