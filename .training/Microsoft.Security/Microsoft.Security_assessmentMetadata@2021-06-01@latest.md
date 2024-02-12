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


