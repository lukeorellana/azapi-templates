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


